import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext';
import type { Language } from '../i18n/translations';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const { t, lang, setLang, dir } = useI18n();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/services', label: t.nav.services },
    { to: '/about', label: t.nav.about },
    { to: '/contact', label: t.nav.contact },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: t.lang.en },
    { code: 'zh', label: t.lang.zh },
    { code: 'ar', label: t.lang.ar },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(245,243,239,0.95)] backdrop-blur-[12px] border-b border-[rgba(26,26,26,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-[15px] font-semibold tracking-[0.15em] uppercase text-[#1A1A1A] whitespace-nowrap"
        >
          {t.nav.brand}
        </Link>

        {/* Desktop Nav */}
        <div
          className="hidden md:flex items-center gap-8"
          style={{ flexDirection: dir === 'rtl' ? 'row-reverse' : 'row' }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link ${isActive(link.to) ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}

          {/* Language Switcher */}
          <div className="lang-switcher ml-4">
            {languages.map((l, i) => (
              <span key={l.code} className="flex items-center">
                {i > 0 && <span className="mx-2 text-[rgba(26,26,26,0.3)]">·</span>}
                <button
                  onClick={() => setLang(l.code)}
                  className={`lang-link ${lang === l.code ? 'active' : ''}`}
                  aria-label={`Switch to ${l.label}`}
                >
                  {l.label}
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[#1A1A1A]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-[72px] left-0 right-0 bg-[rgba(245,243,239,0.98)] backdrop-blur-[12px] border-b border-[rgba(26,26,26,0.08)] md:hidden">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link text-lg ${isActive(link.to) ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Language Switcher */}
            <div className="lang-switcher pt-4 border-t border-[rgba(26,26,26,0.08)]">
              {languages.map((l, i) => (
                <span key={l.code} className="flex items-center">
                  {i > 0 && <span className="mx-2 text-[rgba(26,26,26,0.3)]">·</span>}
                  <button
                    onClick={() => setLang(l.code)}
                    className={`lang-link ${lang === l.code ? 'active' : ''}`}
                  >
                    {l.label}
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
