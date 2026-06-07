import { useEffect, useRef } from 'react';
import { useI18n } from '../i18n/I18nContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  ExternalLink,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const { t, dir, lang } = useI18n();
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const ctx = gsap.context(() => {
      gsap.from(page.querySelectorAll('.animate-in'), {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: page,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from(page.querySelectorAll('.contact-card'), {
        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: page.querySelector('.contact-grid'),
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      });
    }, page);

    return () => ctx.revert();
  }, []);

  const socials = [
    { icon: Twitter, href: 'https://x.com/fairschina', label: 'X (Twitter)' },
    { icon: Youtube, href: 'https://www.youtube.com/@Fairschina', label: 'YouTube' },
    { icon: Instagram, href: 'https://www.instagram.com/fairschina', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/nova-gate/', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://www.facebook.com/FairsChina/', label: 'Facebook' },
  ];

  return (
    <div ref={pageRef} className="pt-[72px]" style={{ direction: dir as 'ltr' | 'rtl' }}>
      {/* Hero Header */}
      <section className="section bg-[#F5F3EF]">
        <div className="content-wrapper text-center max-w-[700px] mx-auto">
          <p className="overline animate-in mb-4">{t.contact.overline}</p>
          <h1 className="animate-in mb-6">{t.contact.heading}</h1>
          <p className="text-[17px] leading-[1.65] text-[#4A4A4A] animate-in">
            {t.contact.body}
          </p>
        </div>
      </section>

      {/* Contact Info & QR Codes */}
      <section className="section section-alt">
        <div className="content-wrapper">
          <div
            className="contact-grid grid grid-cols-1 lg:grid-cols-2 gap-12"
            style={{ direction: dir === 'rtl' ? 'rtl' : 'ltr' }}
          >
            {/* Contact Info */}
            <div>
              <h2 className="animate-in mb-8">
                {dir === 'rtl' ? 'معلومات الاتصال' : lang === 'zh' ? '联系信息' : 'Contact Information'}
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="contact-card flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-[rgba(107,70,193,0.1)] flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-[#6B46C1]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#1A1A1A] mb-1">
                      {t.contact.addressLabel}
                    </p>
                    <p className="text-[15px] text-[#4A4A4A] leading-relaxed">
                      {t.contact.address}
                    </p>
                    <p className="text-[15px] text-[#6B46C1] font-medium mt-1">
                      {t.contact.addressZh}
                    </p>
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <a
                  href={`https://wa.me/${t.contact.phone.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow block"
                >
                  <div className="w-12 h-12 rounded-lg bg-[rgba(107,70,193,0.1)] flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-[#6B46C1]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#1A1A1A] mb-1">
                      {t.contact.phoneLabel}
                    </p>
                    <p className="text-[15px] text-[#4A4A4A]">{t.contact.phone}</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${t.footer.email}`}
                  className="contact-card flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow block"
                >
                  <div className="w-12 h-12 rounded-lg bg-[rgba(107,70,193,0.1)] flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-[#6B46C1]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#1A1A1A] mb-1">
                      {t.contact.emailLabel}
                    </p>
                    <p className="text-[15px] text-[#4A4A4A]">{t.footer.email}</p>
                  </div>
                </a>

                {/* WeChat */}
                <div className="contact-card flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-[rgba(107,70,193,0.1)] flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={24} className="text-[#6B46C1]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#1A1A1A] mb-1">
                      {t.contact.wechatLabel}
                    </p>
                    <p className="text-[15px] text-[#4A4A4A]">
                      ID: {t.contact.wechatId}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <h3 className="text-[18px] font-medium mb-4 animate-in">
                  {t.contact.socialsTitle}
                </h3>
                <div className="flex items-center gap-4">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-[rgba(107,70,193,0.1)] flex items-center justify-center text-[#6B46C1] hover:bg-[#6B46C1] hover:text-white transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                  <a
                    href="https://linktr.ee/NovaGate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[rgba(107,70,193,0.1)] flex items-center justify-center text-[#6B46C1] hover:bg-[#6B46C1] hover:text-white transition-all duration-300"
                    aria-label="Linktree"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* QR Codes */}
            <div>
              <h2 className="animate-in mb-8">{t.contact.scanTitle}</h2>
              <p className="text-[17px] leading-[1.65] text-[#4A4A4A] mb-8 animate-in">
                {t.contact.scanBody}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* WeChat QR */}
                <div className="qr-card">
                  <div className="w-12 h-12 rounded-full bg-[rgba(107,70,193,0.1)] flex items-center justify-center mx-auto mb-4">
                    <MessageCircle size={24} className="text-[#6B46C1]" />
                  </div>
                  <h3 className="text-[18px] font-medium mb-4">
                    {t.contact.wechatQrLabel}
                  </h3>
                  <div className="w-[180px] h-[180px] mx-auto rounded-lg overflow-hidden bg-white border border-[rgba(26,26,26,0.08)]">
                    <img
                      src="/images/qr-wechat.jpg"
                      alt="WeChat QR Code"
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-[14px] text-[#8A8A8A] mt-4">
                    {t.contact.wechatQrCaption}
                  </p>
                  <p className="text-[13px] text-[#6B46C1] font-medium mt-1">
                    ID: FairsChina
                  </p>
                </div>

                {/* WhatsApp QR */}
                <div className="qr-card">
                  <div className="w-12 h-12 rounded-full bg-[rgba(107,70,193,0.1)] flex items-center justify-center mx-auto mb-4">
                    <Phone size={24} className="text-[#6B46C1]" />
                  </div>
                  <h3 className="text-[18px] font-medium mb-4">
                    {t.contact.whatsappQrLabel}
                  </h3>
                  <div className="w-[180px] h-[180px] mx-auto rounded-lg overflow-hidden bg-white border border-[rgba(26,26,26,0.08)]">
                    <img
                      src="/images/qr-whatsapp.jpg"
                      alt="WhatsApp QR Code"
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-[14px] text-[#8A8A8A] mt-4">
                    {t.contact.whatsappQrCaption}
                  </p>
                  <p className="text-[13px] text-[#6B46C1] font-medium mt-1">
                    +86 189 0286 1875
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="section-alt">
        <div className="w-full h-[400px] bg-[#e8e6e2] relative overflow-hidden">
          <img
            src="/images/gallery-cityscape.jpg"
            alt="Guangzhou"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center bg-white/90 backdrop-blur-sm px-8 py-6 rounded-xl shadow-lg">
              <MapPin size={32} className="text-[#6B46C1] mx-auto mb-2" />
              <p className="text-[18px] font-medium text-[#1A1A1A]">
                {lang === 'zh' ? '广州市越秀区' : dir === 'rtl' ? 'يوشيو، جوانزو' : 'Yuexiu District, Guangzhou'}
              </p>
              <p className="text-[14px] text-[#4A4A4A] mt-1">
                广州市越秀区解放南路123号17层1706-3
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fairs China */}
      <section className="section bg-[#F5F3EF]">
        <div className="content-wrapper text-center">
          <p className="overline animate-in mb-4">
            {dir === 'rtl' ? 'شريك الإعلام' : lang === 'zh' ? '媒体合作伙伴' : 'Media Partner'}
          </p>
          <div className="animate-in">
            <img
              src="/images/logo-fairs-china.jpg"
              alt="Fairs China"
              className="h-24 w-auto mx-auto rounded-lg"
            />
            <p className="text-[15px] text-[#4A4A4A] mt-4 max-w-[500px] mx-auto">
              {dir === 'rtl'
                ? 'Fairs China هو ذر العلاقات العامة لـ Nova Gate، حيث نشارك جميع المحتوى والأحداث والرؤى.'
                : lang === 'zh'
                ? 'Fairs China是Nova Gate的公共关系部门，我们在此发布所有内容、活动和见解。'
                : 'Fairs China is the Public Relations arm of Nova Gate, where we share all content, events, and insights.'}
            </p>
            <div className="flex items-center justify-center gap-4 mt-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[rgba(107,70,193,0.1)] flex items-center justify-center text-[#6B46C1] hover:bg-[#6B46C1] hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
