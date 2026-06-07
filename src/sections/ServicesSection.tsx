import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Search,
  ShieldCheck,
  FileSignature,
  PackageCheck,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ElementType> = {
  Search,
  ShieldCheck,
  FileSignature,
  PackageCheck,
};

export default function ServicesSection() {
  const { t, dir } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);

  const services: Array<{
    title: string;
    titleZh: string;
    description: string;
    icon: string;
  }> = t.services.items.slice(0, 4);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(section.querySelectorAll('.service-card'), {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from(section.querySelectorAll('.animate-in'), {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section section-alt"
      style={{ direction: dir as 'ltr' | 'rtl' }}
    >
      <div className="content-wrapper">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="overline animate-in mb-4">{t.services.overline}</p>
          <h2 className="animate-in">{t.services.heading}</h2>
        </div>

        {/* Services Grid - always visible, GSAP enhances */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Search;
            return (
              <div
                key={index}
                className="service-card card group cursor-default"
                style={{ opacity: 1 }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[rgba(107,70,193,0.1)] flex items-center justify-center mb-6 group-hover:bg-[rgba(107,70,193,0.2)] transition-colors duration-300">
                  <Icon size={28} className="text-[#6B46C1]" />
                </div>

                {/* Title */}
                <h3 className="text-[24px] mb-1">{service.title}</h3>
                <p className="text-[13px] text-[#8A8A8A] font-medium mb-3 tracking-wide">
                  {service.titleZh}
                </p>

                {/* Description */}
                <p className="text-[#4A4A4A] leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Link */}
                <Link
                  to="/services"
                  className="text-link text-[14px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {t.services.cta} →
                </Link>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary animate-in inline-flex">
            {t.services.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
