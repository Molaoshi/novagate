import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Search,
  ShieldCheck,
  FileSignature,
  PackageCheck,
  Factory,
  Globe,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ElementType> = {
  Search,
  ShieldCheck,
  FileSignature,
  PackageCheck,
  Factory,
  Globe,
};

function useCountUp(end: number, duration: number = 2000, startCounting: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;
    let startTime: number | null = null;
    let rafId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [end, duration, startCounting]);

  return count;
}

function StatCounter({ number, suffix, label, desc, inView }: {
  number: number; suffix: string; label: string; desc: string; inView: boolean;
}) {
  const count = useCountUp(number, 2000, inView);
  return (
    <div className="text-center p-8 bg-white rounded-xl shadow-sm">
      <p className="text-[48px] font-light text-[#6B46C1] mb-2">
        {count}{suffix}
      </p>
      <p className="text-[18px] font-medium text-[#1A1A1A] mb-2">{label}</p>
      <p className="text-[15px] text-[#4A4A4A]">{desc}</p>
    </div>
  );
}

export default function Services() {
  const { t, dir, lang } = useI18n();
  const pageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsInView, setStatsInView] = useState(false);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const ctx = gsap.context(() => {
      gsap.from(page.querySelectorAll('.animate-in'), {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: page,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from(page.querySelectorAll('.service-detail-card'), {
        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: page.querySelector('.services-grid'),
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }, page);

    return () => ctx.revert();
  }, []);

  // Stats scroll observer
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const services: Array<{
    title: string;
    titleZh: string;
    description: string;
    icon: string;
  }> = t.services.items;

  const stats = [
    {
      number: 20,
      suffix: '+',
      label: dir === 'rtl' ? 'سنوات من الخبرة' : lang === 'zh' ? '年经验' : 'Years of Experience',
      desc: dir === 'rtl' ? 'عقدان من الخبرة العملية في التجارة الدولية' : lang === 'zh' ? '二十年国际贸易实践经验' : 'Two decades of hands-on experience in international trade',
    },
    {
      number: 3,
      suffix: '',
      label: dir === 'rtl' ? 'مكاتب في الصين' : lang === 'zh' ? '中国办事处' : 'Offices in China',
      desc: dir === 'rtl' ? 'جوانزو، زوهاي، وشنزن' : lang === 'zh' ? '广州、珠海和深圳' : 'Guangzhou, Zhuhai & Shenzhen',
    },
    {
      number: 100,
      suffix: '+',
      label: dir === 'rtl' ? 'عميل سعيد' : lang === 'zh' ? '满意客户' : 'Happy Clients',
      desc: dir === 'rtl' ? 'شركات من جميع أنحاء العالم تثق بنا' : lang === 'zh' ? '来自全球各地的企业信任我们' : 'Companies from around the world trust us',
    },
  ];

  return (
    <div ref={pageRef} className="pt-[72px]" style={{ direction: dir as 'ltr' | 'rtl' }}>
      {/* Hero Header */}
      <section className="section bg-[#F5F3EF]">
        <div className="content-wrapper">
          <p className="overline animate-in mb-4">{t.servicesPage.overline}</p>
          <h1 className="animate-in mb-6 max-w-[800px]">{t.servicesPage.heading}</h1>
          <p className="text-[17px] leading-[1.65] text-[#4A4A4A] max-w-[700px] mb-8 animate-in">
            {t.servicesPage.body}
          </p>
          <Link to="/contact" className="btn-primary animate-in inline-flex">
            {t.servicesPage.cta}
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section section-alt">
        <div className="content-wrapper">
          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Globe;
              return (
                <div
                  key={index}
                  className="service-detail-card card group"
                  style={{ opacity: 1 }}
                >
                  <div className="w-16 h-16 rounded-xl bg-[rgba(107,70,193,0.1)] flex items-center justify-center mb-6 group-hover:bg-[rgba(107,70,193,0.2)] group-hover:scale-110 transition-all duration-300">
                    <Icon size={32} className="text-[#6B46C1]" />
                  </div>

                  <h3 className="text-[24px] mb-1">{service.title}</h3>

                  {lang === 'zh' ? (
                    <p className="text-[14px] text-[#6B46C1] font-medium mb-3">{service.titleZh}</p>
                  ) : (
                    <p className="text-[13px] text-[#8A8A8A] font-medium mb-3 tracking-wide">{service.titleZh}</p>
                  )}

                  <p className="text-[#4A4A4A] leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats with Count-Up Animation */}
      <section className="section bg-[#F5F3EF]">
        <div className="content-wrapper">
          <div className="text-center mb-12">
            <p className="overline animate-in mb-4">
              {dir === 'rtl' ? 'لماذا نحن' : 'WHY CHOOSE US'}
            </p>
            <h2 className="animate-in">
              {dir === 'rtl'
                ? 'الخبرة التي تحتاجها'
                : lang === 'zh'
                ? '您需要的经验'
                : 'The Experience You Need'}
            </h2>
          </div>

          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <StatCounter
                key={index}
                number={stat.number}
                suffix={stat.suffix}
                label={stat.label}
                desc={stat.desc}
                inView={statsInView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section py-[100px]"
        style={{ background: 'linear-gradient(135deg, #6B46C1, #8e44ad)' }}
      >
        <div className="content-wrapper text-center">
          <h2
            className="text-[clamp(28px,3.5vw,40px)] font-normal text-white mb-6 animate-in"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {t.cta.heading}
          </h2>
          <Link to="/contact" className="btn-accent animate-in inline-flex">
            {t.cta.button}
          </Link>
        </div>
      </section>
    </div>
  );
}
