import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext';
import { Linkedin, Twitter, Instagram, Facebook, Youtube, ExternalLink } from 'lucide-react';

export default function Footer() {
  const { t, dir } = useI18n();

  const quickLinks = [
    { to: '/', label: t.nav.home },
    { to: '/services', label: t.nav.services },
    { to: '/about', label: t.nav.about },
    { to: '/contact', label: t.nav.contact },
  ];

  const socials = [
    { icon: Twitter, href: 'https://x.com/fairschina', label: 'X (Twitter)' },
    { icon: Youtube, href: 'https://www.youtube.com/@Fairschina', label: 'YouTube' },
    { icon: Instagram, href: 'https://www.instagram.com/fairschina', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/nova-gate/', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://www.facebook.com/FairsChina/', label: 'Facebook' },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-[#F5F3EF] relative z-10">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 pt-20 pb-10">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
          style={{ direction: dir as 'ltr' | 'rtl' }}
        >
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 className="text-[16px] font-semibold tracking-[0.15em] text-[#F5F3EF] mb-3">
              {t.footer.brand}
            </h3>
            <p className="text-[14px] text-[#8A8A8A] mb-6">{t.footer.tagline}</p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8A8A8A] hover:text-[#F5F3EF] transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
              <a
                href="https://linktr.ee/NovaGate"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8A8A8A] hover:text-[#F5F3EF] transition-colors duration-200 flex items-center gap-1"
                aria-label="Linktree"
              >
                <ExternalLink size={18} />
                <span className="text-[12px]">Linktree</span>
              </a>
            </div>

            {/* Fairs China Logo */}
            <div className="mt-8">
              <p className="text-[12px] uppercase tracking-[0.1em] text-[#8A8A8A] mb-3">
                {dir === 'rtl' ? 'العلاقات العامة' : 'PR Division'}
              </p>
              <img
                src="/images/logo-fairs-china.jpg"
                alt="Fairs China"
                className="h-16 w-auto rounded"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[14px] font-semibold uppercase tracking-[0.1em] text-[#8A8A8A] mb-6">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[15px] text-[#F5F3EF] hover:text-[#6B46C1] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[14px] font-semibold uppercase tracking-[0.1em] text-[#8A8A8A] mb-6">
              {t.footer.contact}
            </h4>
            <div className="space-y-3 text-[15px]">
              <a
                href={`mailto:${t.footer.email}`}
                className="block text-[#8A8A8A] hover:text-[#F5F3EF] transition-colors duration-200"
              >
                {t.footer.email}
              </a>
              <a
                href={`https://wa.me/${t.footer.phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#8A8A8A] hover:text-[#F5F3EF] transition-colors duration-200"
              >
                {t.footer.phone}
              </a>
              <p className="text-[#8A8A8A] text-[14px] leading-relaxed">
                {t.footer.address}
              </p>
            </div>

            {/* Mini QR Codes */}
            <div className="mt-6 flex gap-4">
              <div className="text-center">
                <p className="text-[11px] text-[#8A8A8A] mb-1">WeChat</p>
                <img
                  src="/images/qr-wechat.jpg"
                  alt="WeChat QR"
                  className="w-16 h-16 rounded"
                />
              </div>
              <div className="text-center">
                <p className="text-[11px] text-[#8A8A8A] mb-1">WhatsApp</p>
                <img
                  src="/images/qr-whatsapp.jpg"
                  alt="WhatsApp QR"
                  className="w-16 h-16 rounded"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-6 border-t border-[rgba(245,243,239,0.1)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-[#8A8A8A]">{t.footer.copyright}</p>
          <div className="flex items-center gap-2 text-[13px] text-[#8A8A8A]">
            <span className="hover:text-[#F5F3EF] cursor-pointer transition-colors">
              {t.footer.privacy}
            </span>
            <span>·</span>
            <span className="hover:text-[#F5F3EF] cursor-pointer transition-colors">
              {t.footer.terms}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
