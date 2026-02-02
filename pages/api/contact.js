// pages/api/contact.js
// Brevo (formerly Sendinblue) integration for contact form
// WITH Anti-Spam Protection: Honeypot, Turnstile, Content Filtering

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const {
    firstName,
    lastName,
    email,
    phone,
    whatsapp,
    companyName,
    position,
    businessType,
    fuelTypes,
    deliveryFrequency,
    averageVolume,
    preferredDeliveryTime,
    address,
    parish,
    preferredContact,
    message,
    hearAboutUs,
    newsletter,
    whatsappUpdates,
    smsAlerts,
    source,
    // Anti-spam fields
    website,        // Honeypot field - should be empty
    turnstileToken  // Cloudflare Turnstile token
  } = req.body;

  // ============================================
  // ANTI-SPAM VALIDATION (runs before anything else)
  // ============================================

  // 1. Honeypot Check - if filled, it's a bot
  if (website) {
    console.log('🚫 Spam blocked: honeypot field filled', {
      email,
      source,
      timestamp: new Date().toISOString()
    });
    // Return fake success to not alert bots
    return res.status(200).json({
      success: true,
      message: 'Thank you! We\'ll be in touch soon.'
    });
  }

  // 2. Cloudflare Turnstile Verification (if token provided and secret configured)
  const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY;

  if (turnstileToken && TURNSTILE_SECRET) {
    try {
      const turnstileResponse = await fetch(
        'https://challenges.cloudflare.com/turnstile/v0/siteverify',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            secret: TURNSTILE_SECRET,
            response: turnstileToken,
          }),
        }
      );

      const turnstileData = await turnstileResponse.json();

      if (!turnstileData.success) {
        console.log('🚫 Spam blocked: Turnstile verification failed', {
          email,
          source,
          errorCodes: turnstileData['error-codes'],
          timestamp: new Date().toISOString()
        });
        return res.status(400).json({
          success: false,
          error: 'Security verification failed. Please refresh the page and try again.'
        });
      }

      console.log('✅ Turnstile verification passed', { email, source });
    } catch (turnstileError) {
      console.error('Turnstile verification error:', turnstileError);
      // Don't block if Turnstile service is down - continue with other checks
    }
  }

  // 3. Basic content validation - check for spam patterns
  const spamPatterns = [
    /\[url=/i,                    // BBCode links
    /\[link=/i,                   // BBCode links
    /<a\s+href/i,                 // HTML links
    /viagra|cialis|casino|lottery|bitcoin.*invest/i,  // Common spam keywords
    /click\s+here.*http/i,        // "Click here" with URL
    /earn\s+\$?\d+.*day/i,        // "Earn $X per day" spam
  ];

  const textToCheck = `${firstName} ${lastName} ${message} ${companyName || ''}`;
  const isSpamContent = spamPatterns.some(pattern => pattern.test(textToCheck));

  if (isSpamContent) {
    console.log('🚫 Spam blocked: content pattern detected', {
      email,
      source,
      timestamp: new Date().toISOString()
    });
    // Return fake success
    return res.status(200).json({
      success: true,
      message: 'Thank you! We\'ll be in touch soon.'
    });
  }

  // 4. Email domain validation - block disposable email services
  const disposableDomains = [
    'tempmail.com', 'throwaway.email', 'guerrillamail.com', 'mailinator.com',
    '10minutemail.com', 'temp-mail.org', 'fakeinbox.com', 'trashmail.com',
    'getnada.com', 'tempail.com', 'mohmal.com', 'dispostable.com'
  ];

  if (email) {
    const emailDomain = email.split('@')[1]?.toLowerCase();
    if (emailDomain && disposableDomains.includes(emailDomain)) {
      console.log('🚫 Spam blocked: disposable email domain', {
        email,
        domain: emailDomain,
        timestamp: new Date().toISOString()
      });
      return res.status(400).json({
        success: false,
        error: 'Please use a valid business or personal email address.'
      });
    }
  }

  // ============================================
  // STANDARD VALIDATION
  // ============================================

  // Validate required fields (adjusted for different form types)
  const isInternationalTrade = source === 'contact_international_trade';
  const isQuickForm = source === 'contact_jamaica_quick';

  if (isQuickForm) {
    // Quick form only requires name and phone
    if (!firstName || !phone) {
      return res.status(400).json({
        success: false,
        error: 'Please provide your name and phone number'
      });
    }
  } else if (isInternationalTrade) {
    // International trade requires company, email, phone
    if (!firstName || !email || !phone || !companyName) {
      return res.status(400).json({
        success: false,
        error: 'Please fill in all required fields (Name, Email, Phone, Company)'
      });
    }
  } else {
    // Standard form validation
    if (!firstName || !lastName || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please fill in all required fields (First Name, Last Name, Email, Phone, Message)'
      });
    }
  }

  // Validate email format (if provided)
  if (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid email address'
      });
    }
  }

  // ============================================
  // BREVO INTEGRATION
  // ============================================

  const BREVO_API_KEY = process.env.BREVO_API_KEY;
  const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'shamar@nevloh.com';
  const BREVO_LIST_ID = process.env.BREVO_LIST_ID;

  if (!BREVO_API_KEY) {
    console.error('BREVO_API_KEY is not configured');
    return res.status(500).json({
      success: false,
      error: 'Email service is not configured. Please contact us directly at +1-876-449-5172'
    });
  }

  try {
    // Map fuel type values to readable labels
    const fuelTypeLabels = {
      'ulsd': 'Ultra Low Sulphur Diesel (ULSD)',
      'ado': 'Automotive Diesel Oil (ADO)',
      'en590_diesel': 'EN590 / Ultra Low Sulfur Diesel (ULSD)',
      'urea_46': 'Urea 46% Nitrogen Fertilizer'
    };

    // Format fuel types for email with readable names
    const fuelTypesFormatted = fuelTypes && fuelTypes.length > 0
      ? fuelTypes.map(type => fuelTypeLabels[type] || type).join(', ')
      : 'Not specified';

    // Format communication preferences
    const commPreferences = [];
    if (newsletter) commPreferences.push('Newsletter');
    if (whatsappUpdates) commPreferences.push('WhatsApp Updates');
    if (smsAlerts) commPreferences.push('SMS Alerts');
    const commPreferencesFormatted = commPreferences.length > 0
      ? commPreferences.join(', ')
      : 'None selected';

    // Determine email subject based on source
    let emailSubject = `🚛 New Inquiry: ${firstName} ${lastName || ''} - ${businessType || 'Contact Form'}`;
    if (isInternationalTrade) {
      emailSubject = `🌍 International Trade Inquiry: ${companyName} (${firstName} ${lastName || ''})`;
    } else if (isQuickForm) {
      emailSubject = `📞 Quick Callback Request: ${firstName} ${lastName || ''} - ${parish || 'Jamaica'}`;
    }

    // Create HTML email content for notification
    const htmlContent = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, ${isInternationalTrade ? '#1e293b, #334155' : '#1e40af, #3b82f6'}); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
            .section { margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #e5e7eb; }
            .section:last-child { border-bottom: none; margin-bottom: 0; }
            .section-title { font-size: 14px; font-weight: bold; color: #1e40af; margin-bottom: 10px; text-transform: uppercase; }
            .field { margin-bottom: 8px; }
            .label { font-weight: bold; color: #374151; }
            .value { color: #4b5563; }
            .message-box { background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6; }
            .footer { background: #1f2937; color: #9ca3af; padding: 15px; text-align: center; font-size: 12px; border-radius: 0 0 8px 8px; }
            .highlight { background: #dbeafe; padding: 2px 6px; border-radius: 4px; }
            .spam-check { background: #d1fae5; padding: 10px; border-radius: 6px; margin-top: 15px; font-size: 12px; color: #065f46; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">${isInternationalTrade ? '🌍 International Trade Inquiry' : isQuickForm ? '📞 Quick Callback Request' : '🚛 New Contact Form Submission'}</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">${isInternationalTrade ? 'Nevloh LLC - Commodities Trading' : 'Nevloh Limited - Fuel Delivery Inquiry'}</p>
            </div>
            
            <div class="content">
              <div class="section">
                <div class="section-title">👤 Contact Information</div>
                <div class="field"><span class="label">Name:</span> <span class="value">${firstName} ${lastName || ''}</span></div>
                ${email ? `<div class="field"><span class="label">Email:</span> <span class="value"><a href="mailto:${email}">${email}</a></span></div>` : ''}
                <div class="field"><span class="label">Phone:</span> <span class="value"><a href="tel:${phone}">${phone}</a></span></div>
                ${whatsapp ? `<div class="field"><span class="label">WhatsApp:</span> <span class="value"><a href="https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}">${whatsapp}</a></span></div>` : ''}
                ${parish ? `<div class="field"><span class="label">Parish:</span> <span class="value">${parish}</span></div>` : ''}
                ${address ? `<div class="field"><span class="label">Address:</span> <span class="value">${address}</span></div>` : ''}
              </div>

              ${companyName || businessType ? `
              <div class="section">
                <div class="section-title">🏢 Business Information</div>
                ${companyName ? `<div class="field"><span class="label">Company:</span> <span class="value">${companyName}</span></div>` : ''}
                ${position ? `<div class="field"><span class="label">Position:</span> <span class="value">${position}</span></div>` : ''}
                ${businessType ? `<div class="field"><span class="label">Business Type:</span> <span class="value highlight">${businessType}</span></div>` : ''}
              </div>
              ` : ''}

              ${!isQuickForm ? `
              <div class="section">
                <div class="section-title">⛽ ${isInternationalTrade ? 'Product Requirements' : 'Fuel Requirements'}</div>
                <div class="field"><span class="label">${isInternationalTrade ? 'Products' : 'Fuel Types'}:</span> <span class="value">${fuelTypesFormatted}</span></div>
                ${deliveryFrequency ? `<div class="field"><span class="label">Delivery Frequency:</span> <span class="value">${deliveryFrequency}</span></div>` : ''}
                ${averageVolume ? `<div class="field"><span class="label">Average Volume:</span> <span class="value highlight">${averageVolume}</span></div>` : ''}
                ${preferredDeliveryTime ? `<div class="field"><span class="label">Preferred Time:</span> <span class="value">${preferredDeliveryTime}</span></div>` : ''}
              </div>
              ` : ''}

              ${message ? `
              <div class="section">
                <div class="section-title">💬 Message</div>
                <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
              </div>
              ` : ''}

              <div class="section">
                <div class="section-title">📊 Additional Info</div>
                <div class="field"><span class="label">Preferred Contact:</span> <span class="value">${preferredContact || 'Phone'}</span></div>
                ${hearAboutUs ? `<div class="field"><span class="label">How They Found Us:</span> <span class="value">${hearAboutUs}</span></div>` : ''}
                <div class="field"><span class="label">Communication Preferences:</span> <span class="value">${commPreferencesFormatted}</span></div>
                <div class="field"><span class="label">Source:</span> <span class="value highlight">${source || 'Contact Page'}</span></div>
                
                <div class="spam-check">
                  ✅ Passed anti-spam checks: Honeypot clean${turnstileToken ? ', Turnstile verified' : ''}
                </div>
              </div>
            </div>

            <div class="footer">
              <p>This inquiry was submitted via nevloh.com contact form</p>
              <p>Submitted at: ${new Date().toLocaleString('en-JM', { timeZone: 'America/Jamaica' })} (Jamaica Time)</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Plain text version for email clients that don't support HTML
    const textContent = `
NEW ${isInternationalTrade ? 'INTERNATIONAL TRADE' : isQuickForm ? 'QUICK CALLBACK' : 'CONTACT FORM'} SUBMISSION - ${isInternationalTrade ? 'Nevloh LLC' : 'Nevloh Limited'}

CONTACT INFORMATION
--------------------
Name: ${firstName} ${lastName || ''}
${email ? `Email: ${email}` : ''}
Phone: ${phone}
${whatsapp ? `WhatsApp: ${whatsapp}` : ''}
${parish ? `Parish: ${parish}` : ''}
${address ? `Address: ${address}` : ''}

${companyName || businessType ? `BUSINESS INFORMATION
--------------------
${companyName ? `Company: ${companyName}` : ''}
${position ? `Position: ${position}` : ''}
${businessType ? `Business Type: ${businessType}` : ''}
` : ''}

${!isQuickForm ? `${isInternationalTrade ? 'PRODUCT' : 'FUEL'} REQUIREMENTS
-----------------
${isInternationalTrade ? 'Products' : 'Fuel Types'}: ${fuelTypesFormatted}
${deliveryFrequency ? `Delivery Frequency: ${deliveryFrequency}` : ''}
${averageVolume ? `Average Volume: ${averageVolume}` : ''}
${preferredDeliveryTime ? `Preferred Time: ${preferredDeliveryTime}` : ''}
` : ''}

${message ? `MESSAGE
-------
${message}
` : ''}

ADDITIONAL INFO
---------------
Preferred Contact: ${preferredContact || 'Phone'}
${hearAboutUs ? `How They Found Us: ${hearAboutUs}` : ''}
Communication Preferences: ${commPreferencesFormatted}
Source: ${source || 'Contact Page'}

✅ Passed anti-spam checks

Submitted at: ${new Date().toLocaleString('en-JM', { timeZone: 'America/Jamaica' })} (Jamaica Time)
    `;

    // 1. Send notification email to Nevloh
    const notificationResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        sender: {
          name: 'Nevloh Website',
          email: 'noreply@nevloh.com'
        },
        to: [
          {
            email: NOTIFICATION_EMAIL,
            name: 'Nevloh Team'
          }
        ],
        replyTo: email ? {
          email: email,
          name: `${firstName} ${lastName || ''}`
        } : undefined,
        subject: emailSubject,
        htmlContent: htmlContent,
        textContent: textContent,
        tags: ['contact-form', 'website-inquiry', source || 'general']
      })
    });

    if (!notificationResponse.ok) {
      const errorData = await notificationResponse.json();
      console.error('Brevo notification error:', errorData);
      throw new Error('Failed to send notification email');
    }

    console.log('✅ Notification email sent successfully', { email, source });

    // 2. Send confirmation email to customer (only if email provided)
    if (email) {
      const confirmationHtml = `
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, ${isInternationalTrade ? '#1e293b, #334155' : '#1e40af, #3b82f6'}); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
              .logo { font-size: 28px; font-weight: bold; margin-bottom: 10px; }
              .content { background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; }
              .highlight-box { background: ${isInternationalTrade ? '#f1f5f9' : '#dbeafe'}; padding: 20px; border-radius: 8px; margin: 20px 0; }
              .contact-info { background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0; }
              .contact-item { margin-bottom: 10px; }
              .btn { display: inline-block; background: #1e40af; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 5px; }
              .btn-whatsapp { background: #25d366; }
              .footer { background: #1f2937; color: #9ca3af; padding: 20px; text-align: center; font-size: 12px; border-radius: 0 0 8px 8px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="logo">${isInternationalTrade ? '🌍 Nevloh LLC' : '🚛 Nevloh Limited'}</div>
                <p style="margin: 0; opacity: 0.9;">${isInternationalTrade ? 'International Commodities Trading' : 'Professional Fuel Delivery Services'}</p>
              </div>
              
              <div class="content">
                <h2 style="color: #1e40af; margin-top: 0;">Thank You for Contacting Us, ${firstName}!</h2>
                
                <p>We've received your ${isInternationalTrade ? 'trade inquiry' : 'inquiry'} and appreciate your interest in ${isInternationalTrade ? 'Nevloh LLC\'s commodities trading services' : 'Nevloh Limited\'s fuel delivery services'}.</p>
                
                <div class="highlight-box">
                  <strong>⏱️ What happens next?</strong>
                  <p style="margin-bottom: 0;">Our team will review your requirements and get back to you within <strong>${isInternationalTrade ? '48 business hours' : '24 hours'}</strong>${isInternationalTrade ? '.' : ' with a personalized quote.'}</p>
                </div>

                <p>If you need immediate assistance, don't hesitate to reach out directly:</p>

                <div class="contact-info">
                  <div class="contact-item">📞 <strong>Phone:</strong> <a href="tel:+18764495172">+1-876-449-5172</a></div>
                  <div class="contact-item">💬 <strong>WhatsApp:</strong> <a href="https://wa.me/18764495172">+1-876-449-5172</a></div>
                  <div class="contact-item">📧 <strong>Email:</strong> <a href="mailto:shamar@nevloh.com">shamar@nevloh.com</a></div>
                </div>

                <p style="text-align: center;">
                  <a href="tel:+18764495172" class="btn">📞 Call Us Now</a>
                  <a href="https://wa.me/18764495172" class="btn btn-whatsapp">💬 WhatsApp Us</a>
                </p>

                <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 25px 0;">

                <h3 style="color: #374151;">${isInternationalTrade ? 'Products We Trade:' : 'Our Services Include:'}</h3>
                <ul style="color: #4b5563;">
                  ${isInternationalTrade ? `
                    <li>EN590 / Ultra Low Sulfur Diesel (ULSD)</li>
                    <li>Urea 46% Nitrogen Fertilizer</li>
                  ` : `
                    <li>Fleet Refuelling</li>
                    <li>Generator Refuelling</li>
                    <li>On-Site Fuel Delivery</li>
                    <li>Bulk Fuel Supply</li>
                    <li>Licensed Petroleum Haulage</li>
                    <li>Ultra Low Sulphur Diesel (ULSD)</li>
                  `}
                </ul>

                <p>${isInternationalTrade ? 'All trades are LC-secured with SGS/Intertek inspection at load port.' : 'We deliver across all 14 parishes in Jamaica with 24/7 emergency service available.'}</p>

                <p style="color: #6b7280; font-size: 14px;">
                  Best regards,<br>
                  <strong>The Nevloh Team</strong><br>
                  ${isInternationalTrade ? 'Nevloh LLC, Wyoming, USA' : 'Caymanas Bay, Spanish Town, St. Catherine, Jamaica'}
                </p>
              </div>

              <div class="footer">
                <p>© ${new Date().getFullYear()} ${isInternationalTrade ? 'Nevloh LLC' : 'Nevloh Limited'}. All rights reserved.</p>
                <p>
                  <a href="https://www.nevloh.com" style="color: #9ca3af;">www.nevloh.com</a> | 
                  <a href="https://www.nevloh.com/${isInternationalTrade ? 'international-trade' : 'services'}" style="color: #9ca3af;">${isInternationalTrade ? 'Trade Services' : 'Our Services'}</a> | 
                  <a href="https://www.nevloh.com/contact" style="color: #9ca3af;">Contact Us</a>
                </p>
              </div>
            </div>
          </body>
        </html>
      `;

      const confirmationResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': BREVO_API_KEY,
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          sender: {
            name: isInternationalTrade ? 'Nevloh LLC' : 'Nevloh Limited',
            email: 'noreply@nevloh.com'
          },
          to: [
            {
              email: email,
              name: `${firstName} ${lastName || ''}`
            }
          ],
          replyTo: {
            email: 'shamar@nevloh.com',
            name: 'Nevloh Team'
          },
          subject: `Thank You for Contacting ${isInternationalTrade ? 'Nevloh LLC' : 'Nevloh Limited'} - We'll Be in Touch Soon!`,
          htmlContent: confirmationHtml,
          tags: ['confirmation', 'contact-form', source || 'general']
        })
      });

      if (!confirmationResponse.ok) {
        console.warn('Failed to send confirmation email, but notification was sent');
      }
    }

    // 3. Add/Update contact in Brevo with ALL form data
    try {
      const contactAttributes = {
        // Personal Info
        FIRSTNAME: firstName || '',
        LASTNAME: lastName || '',
        SMS: phone || '',
        WHATSAPP: whatsapp || phone || '',

        // Location
        ADDRESS: address || '',
        PARISH: parish || '',

        // Business Info
        COMPANY: companyName || '',
        POSITION: position || '',
        BUSINESS_TYPE: businessType || '',

        // Fuel Requirements
        FUEL_TYPES: fuelTypesFormatted || '',
        DELIVERY_FREQUENCY: deliveryFrequency || '',
        AVERAGE_VOLUME: averageVolume || '',
        PREFERRED_DELIVERY_TIME: preferredDeliveryTime || '',

        // Communication
        PREFERRED_CONTACT: preferredContact || 'phone',
        HEAR_ABOUT_US: hearAboutUs || '',

        // Preferences
        NEWSLETTER: newsletter ? 'Yes' : 'No',
        WHATSAPP_UPDATES: whatsappUpdates ? 'Yes' : 'No',
        SMS_ALERTS: smsAlerts ? 'Yes' : 'No',

        // Inquiry Details
        MESSAGE: message ? message.substring(0, 500) : '', // Brevo has field limits
        SOURCE: source || 'contact_page',
        INQUIRY_DATE: new Date().toISOString().split('T')[0],
        LAST_INQUIRY: new Date().toISOString()
      };

      const listIds = [];
      if (BREVO_LIST_ID) {
        listIds.push(parseInt(BREVO_LIST_ID));
      }

      const contactPayload = {
        email: email,
        attributes: contactAttributes,
        updateEnabled: true
      };

      if (listIds.length > 0) {
        contactPayload.listIds = listIds;
      }

      // Only save to contacts if email provided
      if (email) {
        const contactResponse = await fetch('https://api.brevo.com/v3/contacts', {
          method: 'POST',
          headers: {
            'accept': 'application/json',
            'api-key': BREVO_API_KEY,
            'content-type': 'application/json'
          },
          body: JSON.stringify(contactPayload)
        });

        if (!contactResponse.ok) {
          const contactError = await contactResponse.json();
          console.warn('Failed to add/update contact in Brevo:', contactError);
        } else {
          console.log('✅ Contact saved to Brevo successfully');
        }
      }
    } catch (contactError) {
      console.warn('Failed to save contact to Brevo:', contactError);
    }

    // Success response based on form type
    let successMessage = `Thank you ${firstName}! We've received your inquiry and will get back to you within 24 hours.`;
    if (isInternationalTrade) {
      successMessage = `Thank you ${firstName}! Your trade inquiry has been submitted. Our team will review your requirements and respond within 48 business hours.`;
    } else if (isQuickForm) {
      successMessage = `Thanks ${firstName}! We'll call you within 2 hours during business hours.`;
    }

    if (email) {
      successMessage += ` A confirmation email has been sent to ${email}.`;
    }

    return res.status(200).json({
      success: true,
      message: successMessage
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      success: false,
      error: 'There was an error sending your message. Please try calling us at +1-876-449-5172 or WhatsApp us directly.'
    });
  }
}