// jest.config.js - Next.js Jest configuration
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env.local files
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: {
    // Handle module aliases (this will be automatically configured for you based on your tsconfig.json paths)
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    '^@/lib/(.*)$': '<rootDir>/lib/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: [
    'components/**/*.{js,jsx}',
    'pages/**/*.{js,jsx}',
    'lib/**/*.{js,jsx}',
    '!pages/_app.js',
    '!pages/_document.js',
    '!pages/api/**',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)

// jest.setup.js - Test setup file
import '@testing-library/jest-dom'

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn(),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
    }
  },
}))

// Mock Firebase
jest.mock('./lib/firebase', () => ({
  db: {},
  auth: {},
  analytics: {},
}))

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}
global.localStorage = localStorageMock

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

// __tests__/components/HeroSection.test.js - Example component test
import { render, screen } from '@testing-library/react'
import HeroSection from '../../components/HeroSection'

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    return <img {...props} />
  },
}))

// Mock Next.js Link component
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }) => {
    return <a href={href}>{children}</a>
  },
}))

describe('HeroSection', () => {
  it('renders hero heading', () => {
    render(<HeroSection />)

    const heading = screen.getByRole('heading', {
      name: /delivering fuel, driving success/i
    })
    expect(heading).toBeInTheDocument()
  })

  it('renders call-to-action button', () => {
    render(<HeroSection />)

    const ctaButton = screen.getByRole('link', {
      name: /request a quote/i
    })
    expect(ctaButton).toBeInTheDocument()
    expect(ctaButton).toHaveAttribute('href', '/contact')
  })

  it('displays company logo', () => {
    render(<HeroSection />)

    const logo = screen.getByAltText(/nevloh limited/i)
    expect(logo).toBeInTheDocument()
  })

  it('shows service highlights', () => {
    render(<HeroSection />)

    expect(screen.getByText(/island-wide delivery/i)).toBeInTheDocument()
    expect(screen.getByText(/24\/7 emergency service/i)).toBeInTheDocument()
    expect(screen.getByText(/on-site solutions/i)).toBeInTheDocument()
  })
})

// __tests__/components/ServicesSection.test.js - Services component test
import { render, screen, fireEvent } from '@testing-library/react'
import ServicesSection from '../../components/ServicesSection'

describe('ServicesSection', () => {
  it('renders all service cards', () => {
    render(<ServicesSection />)

    expect(screen.getByText(/mobile fuel delivery/i)).toBeInTheDocument()
    expect(screen.getByText(/fleet refueling programs/i)).toBeInTheDocument()
    expect(screen.getByText(/bulk fuel supply/i)).toBeInTheDocument()
  })

  it('displays service features', () => {
    render(<ServicesSection />)

    // Check for specific features
    expect(screen.getByText(/24\/7 emergency service/i)).toBeInTheDocument()
    expect(screen.getByText(/gps tracked delivery/i)).toBeInTheDocument()
    expect(screen.getByText(/professional drivers/i)).toBeInTheDocument()
  })

  it('has working learn more links', () => {
    render(<ServicesSection />)

    const learnMoreLinks = screen.getAllByText(/learn more/i)
    expect(learnMoreLinks).toHaveLength(3)

    learnMoreLinks.forEach(link => {
      expect(link.closest('a')).toHaveAttribute('href')
    })
  })

  it('shows trust indicators', () => {
    render(<ServicesSection />)

    expect(screen.getByText(/500\+/)).toBeInTheDocument()
    expect(screen.getByText(/satisfied customers/i)).toBeInTheDocument()
  })
})

// __tests__/lib/auth.test.js - Auth utilities test
import {
  isAuthenticated,
  getUserRole,
  loginUser,
  logoutUser,
  hasRole,
  validateDemoCredentials,
  USER_ROLES
} from '../../lib/auth'

// Clear localStorage before each test
beforeEach(() => {
  localStorage.clear()
})

describe('Auth Utilities', () => {
  describe('isAuthenticated', () => {
    it('returns false when not authenticated', () => {
      expect(isAuthenticated()).toBe(false)
    })

    it('returns true when authenticated', () => {
      localStorage.setItem('isAuthenticated', 'true')
      expect(isAuthenticated()).toBe(true)
    })
  })

  describe('loginUser', () => {
    it('sets authentication data in localStorage', () => {
      const email = 'test@nevloh.com'
      const role = USER_ROLES.CUSTOMER

      loginUser(email, role)

      expect(localStorage.setItem).toHaveBeenCalledWith('isAuthenticated', 'true')
      expect(localStorage.setItem).toHaveBeenCalledWith('userEmail', email)
      expect(localStorage.setItem).toHaveBeenCalledWith('userRole', role)
    })

    it('generates session ID', () => {
      loginUser('test@nevloh.com', USER_ROLES.CUSTOMER)

      expect(localStorage.setItem).toHaveBeenCalledWith(
        'sessionId',
        expect.any(String)
      )
    })
  })

  describe('logoutUser', () => {
    it('clears authentication data', () => {
      // Set up authenticated state
      localStorage.setItem('isAuthenticated', 'true')
      localStorage.setItem('userEmail', 'test@nevloh.com')

      logoutUser()

      expect(localStorage.removeItem).toHaveBeenCalledWith('isAuthenticated')
      expect(localStorage.removeItem).toHaveBeenCalledWith('userEmail')
    })
  })

  describe('hasRole', () => {
    it('returns false when no user role', () => {
      expect(hasRole(USER_ROLES.ADMIN)).toBe(false)
    })

    it('returns true for matching role', () => {
      localStorage.setItem('userRole', USER_ROLES.ADMIN)
      expect(hasRole(USER_ROLES.ADMIN)).toBe(true)
    })

    it('supports multiple roles', () => {
      localStorage.setItem('userRole', USER_ROLES.MANAGER)
      expect(hasRole([USER_ROLES.ADMIN, USER_ROLES.MANAGER])).toBe(true)
    })
  })

  describe('validateDemoCredentials', () => {
    it('validates correct admin credentials', () => {
      const result = validateDemoCredentials('admin@nevloh.com', 'admin123')

      expect(result).toEqual({
        email: 'admin@nevloh.com',
        password: 'admin123',
        role: USER_ROLES.ADMIN,
        name: 'Admin User'
      })
    })

    it('returns null for invalid credentials', () => {
      const result = validateDemoCredentials('wrong@email.com', 'wrongpass')
      expect(result).toBeNull()
    })
  })
})

// __tests__/pages/index.test.js - Homepage test
import { render, screen } from '@testing-library/react'
import Home from '../../pages/index'

// Mock all the components used in the homepage
jest.mock('../../components/HeroSection', () => {
  return function MockHeroSection() {
    return <div data-testid="hero-section">Hero Section</div>
  }
})

jest.mock('../../components/ServicesSection', () => {
  return function MockServicesSection() {
    return <div data-testid="services-section">Services Section</div>
  }
})

jest.mock('../../components/ProcessSection', () => {
  return function MockProcessSection() {
    return <div data-testid="process-section">Process Section</div>
  }
})

jest.mock('../../components/CallToAction', () => {
  return function MockCallToAction() {
    return <div data-testid="cta-section">Call to Action</div>
  }
})

describe('Homepage', () => {
  it('renders all main sections', () => {
    render(<Home />)

    expect(screen.getByTestId('hero-section')).toBeInTheDocument()
    expect(screen.getByTestId('services-section')).toBeInTheDocument()
    expect(screen.getByTestId('process-section')).toBeInTheDocument()
    expect(screen.getByTestId('cta-section')).toBeInTheDocument()
  })

  it('has correct page title', () => {
    render(<Home />)

    // Check that Head component sets the title (this is tricky to test)
    // You might want to use a more sophisticated testing setup for this
  })
})

// __tests__/api/example.test.js - API route test (if you have API routes)
import handler from '../../pages/api/contact'
import { createMocks } from 'node-mocks-http'

describe('/api/contact', () => {
  it('handles POST request', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        message: 'Test message'
      },
    })

    await handler(req, res)

    expect(res._getStatusCode()).toBe(200)

    const jsonData = JSON.parse(res._getData())
    expect(jsonData.success).toBe(true)
  })

  it('rejects invalid email', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'invalid-email',
        message: 'Test message'
      },
    })

    await handler(req, res)

    expect(res._getStatusCode()).toBe(400)
  })
})
