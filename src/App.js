import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Sustainability from './pages/Sustainability';
import Industry from './pages/Industries';
import Contact from './pages/Contact';
import { LoginPage, SignupPage } from './pages/Login';
import Layout from './components/Layout';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/industry" element={<Industry />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;