import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Church, MapPin, Phone, Mail, Globe, Youtube, Bold } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'am' : 'en');
  };

  const links = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.sermons'), path: '/sermons' },
    { name: t('nav.ministries'), path: '/ministries' },
    { name: t('nav.contact'), path: '/contact' },
    { name: t('nav.donate'), path: '/donation' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar" style={{ backgroundColor: 'var(--color-surface)', boxShadow: 'var(--shadow-sm)', position: 'sticky', top: 0, zIndex: 50 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-primary)' }}>
          <Church size={32} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: '700', lineHeight: 1 }}>Hawassa Reformed</span>
            <span style={{ fontSize: '0.875rem', letterSpacing: '0.05em', color: 'var(--color-accent)' }}>BAPTIST CHURCH</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="md:flex hidden items-center" style={{ gap: '2rem' }}>
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                fontWeight: '500',
                color: isActive(link.path) ? 'var(--color-primary)' : 'var(--color-secondary)',
                borderBottom: isActive(link.path) ? '2px solid var(--color-accent)' : '2px solid transparent'
              }}
            >
              {link.name}
            </Link>
          ))}

          <button
            onClick={toggleLanguage}
            className="btn btn-outline"
            style={{ padding: '0.5rem 1rem', display: 'flex', gap: '0.5rem', borderColor: '#cbd5e1', color: 'var(--color-secondary)' }}
          >
            <Globe size={18} />
            {i18n.language === 'en' ? 'AM' : 'EN'}
          </button>

          {/* <Link to="/contact" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem' }}>{t('nav.visit')}</Link> */}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', color: 'var(--color-primary)' }}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" style={{ backgroundColor: 'var(--color-surface)', padding: '1rem', borderTop: '1px solid #e2e8f0', position: 'absolute', width: '100%', boxShadow: 'var(--shadow-md)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                style={{
                  padding: '0.5rem',
                  color: isActive(link.path) ? 'var(--color-primary)' : 'var(--color-secondary)',
                  fontWeight: '500'
                }}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                toggleLanguage();
                setIsOpen(false);
              }}
              style={{
                textAlign: 'left',
                padding: '0.5rem',
                background: 'none',
                border: 'none',
                color: 'var(--color-secondary)',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Globe size={18} />
              Switch to {i18n.language === 'en' ? 'Amharic' : 'English'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-surface)', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div className="grid md:grid-cols-3" style={{ gap: '3rem' }}>

          {/* Column 1: Identity */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <Church size={24} color="var(--color-accent)" />
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 'bold' }}>HRBC</span>
            </div>
            <p style={{ color: '#94a3b8', marginBottom: '1.5rem', maxWidth: '300px' }}>
              {t('footer.desc')}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 style={{ fontSize: '1.125rem', color: 'var(--color-accent)', marginBottom: '1.25rem' }}>{t('footer.services')}</h3>
            <ul style={{ color: '#e2e8f0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><strong>{t('footer.sunday_morning')}:</strong> 11:30 - 1:30 AM</li>
              <li><strong>{t('footer.sunday_evening')}:</strong> 3:30 - 6:30 AM</li>
              <li><strong>{t('footer.wednesday_prayer')}:</strong> 11:30 - 1:30 AM</li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 style={{ fontSize: '1.125rem', color: 'var(--color-accent)', marginBottom: '1.25rem' }}>{t('footer.contact_us')}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#e2e8f0' }}>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <MapPin size={20} />
                <span>Hawassa, Ethiopia<br />Piassa Near Awash Bank</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <Phone size={20} />
                <span>+251990862321</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <Mail size={20} />
                <span>hawassarbc@gmail.com</span>
              </div>
              <div style={{ marginTop: '0.5rem' }}>
                <a href="https://www.youtube.com/@HawassaReformedBaptistChurch" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent)' }}>
                  <Youtube size={20} />
                  <span>YouTube Channel</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #334155', marginTop: '3rem', paddingTop: '2rem', textAlign: 'center', color: '#64748b', fontSize: '0.875rem' }}>
          <p>
            &copy; {new Date().getFullYear()} Hawassa Reformed Baptist Church. {t('footer.rights')}
          </p>
          <p style={{ marginTop: '0.5rem' }}>
            Designed by <a href="https://kibruabebe.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#64748b', textDecoration: 'Bold' }}>Kibru.</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
