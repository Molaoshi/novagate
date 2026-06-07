import { useState, useEffect, useRef } from 'react';
import { useI18n } from '../i18n/I18nContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialsSection() {
  const { t, dir } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  const testimonials: Array<{
    quote: string;
    author: string;
    location: string;
  }> = t.testimonials.items;

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(section.querySelectorAll('.animate-in'), {
        y: 30,
        opacity: 0,
        duration: 0.8,
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
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section section-dark"
      style={{ direction: dir as 'ltr' | 'rtl' }}
    >
      <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
        {/* Header */}
        <p className="overline animate-in mb-4 text-[#8A8A8A]">
          {t.testimonials.overline}
        </p>
        <h2 className="animate-in mb-16 text-[#F5F3EF]">
          {t.testimonials.heading}
        </h2>

        {/* Testimonial Carousel */}
        <div className="relative min-h-[250px]">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                index === active
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
              }`}
            >
              <blockquote className="testimonial-quote mb-8">
                "{item.quote}"
              </blockquote>
              <div>
                <p className="text-[16px] font-semibold text-[#F5F3EF]">
                  {item.author}
                </p>
                <p className="text-[14px] text-[#8A8A8A]">{item.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-3 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`dot ${index === active ? 'active' : ''}`}
              aria-label={`Testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
