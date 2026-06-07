import { useEffect, useRef } from 'react';
import { useI18n } from '../i18n/I18nContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  { src: '/images/event-speaking.jpg', caption: 'Speaking at Industry Conference' },
  { src: '/images/expo-deviser.jpg', caption: 'Deviser Guitars Expo Visit' },
  { src: '/images/factory-tour.jpg', caption: 'Factory Tour & Audit' },
  { src: '/images/team-main.jpg', caption: 'Team at Shuhai Conference 2025' },
  { src: '/images/event-stage.jpg', caption: 'Stage Event' },
  { src: '/images/expo-aeroband.jpg', caption: 'Aeroband Smart Guitars Expo' },
  { src: '/images/event-partners.jpg', caption: 'Brand Partnership Event' },
  { src: '/images/factory-team.jpg', caption: 'Team at Factory' },
  { src: '/images/gallery-cityscape.jpg', caption: 'Guangzhou Cityscape' },
];

export default function GallerySection() {
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
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from(section.querySelectorAll('.gallery-item'), {
        scale: 0.95,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: section.querySelector('.gallery-grid'),
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
      className="section section-alt"
      style={{ direction: dir as 'ltr' | 'rtl' }}
    >
      <div className="content-wrapper-wide px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 max-w-[600px] mx-auto">
          <p className="overline animate-in mb-4">{t.gallery.overline}</p>
          <h2 className="animate-in mb-4">{t.gallery.heading}</h2>
          <p className="text-[17px] leading-[1.65] text-[#4A4A4A] animate-in">
            {t.gallery.body}
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="gallery-grid grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className={`gallery-item ${
                index === 0 || index === 4 || index === 8
                  ? 'col-span-1 row-span-1'
                  : ''
              }`}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover"
                style={{
                  aspectRatio:
                    index % 3 === 0
                      ? '3/4'
                      : index % 3 === 1
                      ? '4/3'
                      : '1/1',
                }}
                loading="lazy"
              />
              <span className="gallery-caption">{img.caption}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
