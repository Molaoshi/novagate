import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const { t, dir } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });

      tl.from(section.querySelectorAll('.animate-in'), {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
      });

      tl.from(
        section.querySelector('.about-image'),
        {
          scale: 1.05,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.6'
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section bg-[#F5F3EF]"
      style={{ direction: dir as 'ltr' | 'rtl' }}
    >
      <div className="content-wrapper">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          style={{ direction: dir === 'rtl' ? 'rtl' : 'ltr' }}
        >
          {/* Text Column */}
          <div className={dir === 'rtl' ? 'lg:order-2' : ''}>
            <p className="overline animate-in mb-4">{t.about.overline}</p>
            <h2 className="animate-in mb-6">{t.about.heading}</h2>
            <p className="text-[17px] leading-[1.65] text-[#4A4A4A] mb-8 animate-in">
              {t.about.body}
            </p>
            <Link to="/about" className="btn-primary animate-in inline-flex">
              {t.about.cta}
            </Link>
          </div>

          {/* Image Column */}
          <div className={`about-image ${dir === 'rtl' ? 'lg:order-1' : ''}`}>
            <div className="img-rounded img-shadow overflow-hidden aspect-[3/4]">
              <img
                src="/images/about-meeting.jpg"
                alt="Business meeting in Guangzhou"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
