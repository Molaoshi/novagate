import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Check, Globe, Handshake } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const { t, dir } = useI18n();
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

      gsap.from(page.querySelectorAll('.value-card'), {
        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: page.querySelector('.values-grid'),
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });
    }, page);

    return () => ctx.revert();
  }, []);

  const values: Array<{ title: string; description: string }> = t.aboutPage.values.items;

  return (
    <div ref={pageRef} className="pt-[72px]" style={{ direction: dir as 'ltr' | 'rtl' }}>
      {/* Hero Header */}
      <section className="section bg-[#F5F3EF]">
        <div className="content-wrapper">
          <p className="overline animate-in mb-4">{t.aboutPage.overline}</p>
          <h1 className="animate-in mb-6 max-w-[800px]">{t.aboutPage.heading}</h1>
          <p className="text-[17px] leading-[1.65] text-[#4A4A4A] max-w-[700px] mb-6 animate-in">
            {t.aboutPage.body1}
          </p>
          <p className="text-[17px] leading-[1.65] text-[#4A4A4A] max-w-[700px] animate-in">
            {t.aboutPage.body2}
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section section-alt">
        <div className="content-wrapper">
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            style={{ direction: dir === 'rtl' ? 'rtl' : 'ltr' }}
          >
            <div className="animate-in">
              <div className="img-rounded img-shadow overflow-hidden aspect-[4/5] max-w-[450px]">
                <img
                  src="/images/founder-moataz.jpg"
                  alt="Moataz Farghaly"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="overline animate-in mb-4">{t.founder.overline}</p>
              <h2 className="animate-in mb-6">{t.founder.heading}</h2>
              <p className="text-[17px] leading-[1.65] text-[#4A4A4A] mb-6 animate-in">
                {t.founder.body}
              </p>
              <Link to="/contact" className="text-link animate-in">
                {t.founder.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-[#F5F3EF]">
        <div className="content-wrapper text-center max-w-[700px] mx-auto">
          <p className="overline animate-in mb-4">{t.aboutPage.mission.overline}</p>
          <h2 className="animate-in mb-6">{t.aboutPage.mission.heading}</h2>
          <p className="text-[17px] leading-[1.65] text-[#4A4A4A] animate-in">
            {t.aboutPage.mission.body}
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="section section-alt">
        <div className="content-wrapper">
          <div className="text-center mb-12">
            <p className="overline animate-in mb-4">{t.aboutPage.values.overline}</p>
            <h2 className="animate-in">{t.aboutPage.values.heading}</h2>
          </div>

          <div className="values-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="value-card card text-center" style={{ opacity: 1 }}>
                <div className="w-12 h-12 rounded-full bg-[rgba(107,70,193,0.1)] flex items-center justify-center mx-auto mb-4">
                  {index === 0 && <Award size={24} className="text-[#6B46C1]" />}
                  {index === 1 && <Check size={24} className="text-[#6B46C1]" />}
                  {index === 2 && <Handshake size={24} className="text-[#6B46C1]" />}
                  {index === 3 && <Globe size={24} className="text-[#6B46C1]" />}
                </div>
                <h3 className="text-[20px] mb-2">{value.title}</h3>
                <p className="text-[15px] text-[#4A4A4A] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-[#F5F3EF]">
        <div className="content-wrapper">
          <div className="text-center mb-12 max-w-[700px] mx-auto">
            <p className="overline animate-in mb-4">{t.aboutPage.team.overline}</p>
            <h2 className="animate-in mb-6">{t.aboutPage.team.heading}</h2>
            <p className="text-[17px] leading-[1.65] text-[#4A4A4A] animate-in">
              {t.aboutPage.team.body}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              '/images/team-main.jpg',
              '/images/team-colleague.jpg',
              '/images/team-meeting.jpg',
              '/images/team-elevator.jpg',
            ].map((src, index) => (
              <div
                key={index}
                className="img-rounded img-shadow overflow-hidden animate-in"
              >
                <img
                  src={src}
                  alt={`Team photo ${index + 1}`}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
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
