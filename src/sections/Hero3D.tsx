import { useEffect, useRef } from 'react';
import { useI18n } from '../i18n/I18nContext';

export default function Hero3D() {
  const { t } = useI18n();
  const stageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const labelsRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const stage = stageRef.current;
    const content = contentRef.current;
    if (!stage || !content) return;

    // Generate faces for 3D hexagonal shape
    const faceCount = 6;
    const width = content.offsetWidth || window.innerWidth * 0.25;
    const depth = width / 2;
    const angle = 360 / faceCount;

    // Clear existing faces
    const existingFaces = content.querySelectorAll('.face-3d');
    existingFaces.forEach((f) => f.remove());

    const fragment = document.createDocumentFragment();
    for (let i = 0; i < faceCount; i++) {
      const face = document.createElement('div');
      face.className = 'face-3d';
      face.style.transform = `rotateY(${i * angle}deg) translateZ(${depth}px)`;
      face.style.background = `linear-gradient(135deg, rgba(107,70,193,0.3), rgba(142,68,173,0.2))`;
      face.style.border = '1px solid rgba(255,255,255,0.15)';
      face.style.borderRadius = '8px';
      face.style.backdropFilter = 'blur(4px)';
      fragment.appendChild(face);
    }
    content.appendChild(fragment);

    // Scroll-driven animation loop
    const handleScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const scrollProgress = Math.min(scrollTop / (window.innerHeight * 3), 1);

      // Update CSS custom property for progress
      document.documentElement.style.setProperty('--progress', String(scrollProgress));

      // Animate content based on scroll
      if (content) {
        // Phase 1: Initial rotation (0-10%)
        // Phase 2: Extrusion (10-25%)
        // Phase 3: 3D Spin (25-40%)
        // Phase 4: Unfolding (40-60%)
        // Phase 5: Scale & Flip (60-80%)
        // Phase 6: Shatter (80-100%)

        let transform = '';
        let opacity = 1;

        if (scrollProgress < 0.1) {
          const p = scrollProgress / 0.1;
          const scale = 0.5 + p * 0.5;
          const rotZ = -180 + p * 180;
          transform = `scale(${scale}) rotateZ(${rotZ}deg)`;
          opacity = p;
        } else if (scrollProgress < 0.25) {
          const p = (scrollProgress - 0.1) / 0.15;
          transform = `scale(1) rotateZ(0deg)`;
          opacity = 1;
          // Extrusion via box-shadow
          const layers = Math.floor(p * 25);
          const shadows: string[] = [];
          for (let i = 0; i < layers; i++) {
            shadows.push(`inset ${i * 12}px 0 rgba(107,70,193,${0.05 + p * 0.15})`);
          }
          content.style.boxShadow = shadows.join(', ');
        } else if (scrollProgress < 0.4) {
          const p = (scrollProgress - 0.25) / 0.15;
          const rotY = p * 360;
          transform = `scale(1) rotateY(${rotY}deg)`;
          content.style.boxShadow = 'none';
        } else if (scrollProgress < 0.6) {
          const p = (scrollProgress - 0.4) / 0.2;
          const rotX = -100 + p * 100;
          transform = `scale(1) rotateX(${rotX}deg)`;
        } else if (scrollProgress < 0.8) {
          const p = (scrollProgress - 0.6) / 0.2;
          const scale = 1 + p * 1.5;
          const rotZ = p * 180;
          transform = `scale(${scale}) rotateZ(${rotZ}deg)`;
        } else {
          const p = (scrollProgress - 0.8) / 0.2;
          const pieces = content.querySelectorAll('.face-3d');
          pieces.forEach((piece, i) => {
            const z = (i % 2 === 0 ? 1 : -1) * p * 500;
            const r = (i * 60) * p;
            (piece as HTMLElement).style.transform = `rotateY(${i * 60}deg) translateZ(${150 + z}px) rotateZ(${r}deg)`;
          });
          transform = `scale(${2.5 - p * 1.5}) rotateZ(${180 + p * 180}deg)`;
          opacity = 1 - p;
        }

        content.style.transform = transform;
        content.style.opacity = String(opacity);
      }

      // Update background gradient
      const p = scrollProgress;
      let color = '#3498db';
      if (p < 0.1) color = '#3498db';
      else if (p < 0.3) color = '#9b59b6';
      else if (p < 0.5) color = '#e74c3c';
      else if (p < 0.7) color = '#f39c12';
      else if (p < 0.9) color = '#2ecc71';
      else color = '#1abc9c';

      if (stage) {
        stage.style.background = `linear-gradient(135deg, ${color}, ${adjustColor(color, -40)})`;
      }

      // Update text labels
      if (labelsRef.current) {
        const labels = labelsRef.current.querySelectorAll('.hero-scroll-label');
        labels.forEach((label, index) => {
          const threshold = (index + 1) * 0.15;
          const el = label as HTMLElement;
          if (scrollProgress > threshold - 0.05 && scrollProgress < threshold + 0.15) {
            const localProgress = Math.min(1, Math.max(0, (scrollProgress - (threshold - 0.05)) / 0.1));
            el.style.opacity = String(localProgress);
            el.style.transform = `translateY(${(1 - localProgress) * 30}px)`;
          } else {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
          }
        });
      }

      // Toggle running state
      if (scrollProgress > 0 && scrollProgress < 1) {
        document.body.classList.add('running');
      } else {
        document.body.classList.remove('running');
      }
    };

    function adjustColor(color: string, amount: number): string {
      const num = parseInt(color.slice(1), 16);
      const r = Math.max(0, Math.min(255, (num >> 16) + amount));
      const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00ff) + amount));
      const b = Math.max(0, Math.min(255, (num & 0x0000ff) + amount));
      return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
    }

    // Animation loop
    const animate = () => {
      handleScroll();
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.body.classList.remove('running');
    };
  }, []);

  return (
    <>
      {/* 3D Stage - Fixed */}
      <div
        ref={stageRef}
        className="stage-3d"
        style={{ background: 'linear-gradient(135deg, #3498db, #2980b9)' }}
      >
        {/* 3D Content Container */}
        <div ref={contentRef} className="content-3d">
          {/* Logo image inside 3D shape */}
          <img
            src="/images/logo-nova-gate.jpg"
            alt="Nova Gate"
            className="relative z-10 w-3/4 h-3/4 object-contain"
            style={{ filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.3))' }}
          />
        </div>

        {/* Text Labels */}
        <div ref={labelsRef} className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="hero-scroll-label"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.2em' }}
          >
            {t.hero.label1}
          </div>
          <div
            className="hero-scroll-label"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, letterSpacing: '0.1em' }}
          >
            {t.hero.label2}
          </div>
          <div
            className="hero-scroll-label"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 400, letterSpacing: '0.15em' }}
          >
            {t.hero.label3}
          </div>
          <div
            className="hero-scroll-label"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.2em' }}
          >
            {t.hero.label4}
          </div>
          <div
            className="hero-scroll-label"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 400, letterSpacing: '0.1em', opacity: 0.7 }}
          >
            {t.hero.label5}
          </div>
        </div>
      </div>

      {/* Scroll spacer to create scroll distance */}
      <div className="scroll-spacer" />
    </>
  );
}
