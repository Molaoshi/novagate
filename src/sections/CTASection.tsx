import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const { t, dir } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(section.querySelectorAll('.animate-in'), {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section py-[120px]"
      style={{
        direction: dir as 'ltr' | 'rtl',
        background: 'linear-gradient(135deg, #6B46C1, #8e44ad)',
      }}
    >
      <div className="content-wrapper text-center">
        <h2
          className="text-[clamp(32px,4vw,48px)] font-normal text-white mb-6 animate-in"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {t.cta.heading}
        </h2>
        <p className="text-[17px] text-[rgba(255,255,255,0.85)] max-w-[560px] mx-auto mb-10 animate-in leading-relaxed">
          {t.cta.body}
        </p>
        <Link to="/contact" className="btn-accent animate-in inline-flex">
          {t.cta.button}
        </Link>
      </div>
    </section>
  );
}
