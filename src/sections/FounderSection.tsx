import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FounderSection() {
  const { t, dir } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(section.querySelector('.founder-image'), {
        x: dir === 'rtl' ? 40 : -40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from(section.querySelectorAll('.founder-text'), {
        x: dir === 'rtl' ? -40 : 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      });
    }, section);

    return () => ctx.revert();
  }, [dir]);

  return (
    <section
      ref={sectionRef}
      className="section bg-[#F5F3EF]"
      style={{ direction: dir as 'ltr' | 'rtl' }}
    >
      <div className="content-wrapper">
        <div
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center"
          style={{ direction: dir === 'rtl' ? 'rtl' : 'ltr' }}
        >
          {/* Image Column */}
          <div className="lg:col-span-2 founder-image">
            <div className="img-rounded img-shadow overflow-hidden aspect-[4/5]">
              <img
                src="/images/founder-moataz.jpg"
                alt="Moataz Farghaly - Founder of Nova Gate"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-3">
            <p className="overline founder-text mb-4">{t.founder.overline}</p>
            <h2 className="founder-text mb-6">{t.founder.heading}</h2>
            <p className="text-[17px] leading-[1.65] text-[#4A4A4A] mb-8 founder-text">
              {t.founder.body}
            </p>
            <Link to="/contact" className="text-link founder-text">
              {t.founder.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
