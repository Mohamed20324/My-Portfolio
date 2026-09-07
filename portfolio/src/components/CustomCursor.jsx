import { useEffect, useRef } from 'react';

const INTERACTIVE =
  'a, button, input, textarea, select, label, [role="button"], .cursor-hover';

export const CustomCursor = () => {
  const cursorRef = useRef(null);
  const rafRef = useRef(0);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const hovering = useRef(false);
  const visible = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const isTouch =
      'ontouchstart' in window || navigator.maxTouchPoints > 0;

    const canUseCustomCursor = () =>
      mediaQuery.matches && !motionQuery.matches && !isTouch;

    const setEnabled = (enabled) => {
      document.documentElement.classList.toggle('has-custom-cursor', enabled);
      cursor.style.opacity = enabled && visible.current ? '1' : '0';
      if (!enabled) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = 0;
      }
    };

    const render = () => {
      if (!canUseCustomCursor()) {
        rafRef.current = 0;
        return;
      }

      const ease = 0.22;
      const dx = target.current.x - pos.current.x;
      const dy = target.current.y - pos.current.y;
      pos.current.x += dx * ease;
      pos.current.y += dy * ease;

      const scale = hovering.current ? 1.55 : 1;
      cursor.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) scale(${scale})`;
      cursor.classList.toggle('is-hovering', hovering.current);

      // Stop the loop when close enough to the pointer (saves CPU when idle)
      if (Math.abs(dx) > 0.15 || Math.abs(dy) > 0.15) {
        rafRef.current = requestAnimationFrame(render);
      } else {
        rafRef.current = 0;
      }
    };

    const startLoop = () => {
      if (!rafRef.current && canUseCustomCursor()) {
        rafRef.current = requestAnimationFrame(render);
      }
    };

    const onPointerMove = (e) => {
      if (!canUseCustomCursor()) return;
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (!visible.current) {
        visible.current = true;
        pos.current.x = e.clientX;
        pos.current.y = e.clientY;
        cursor.style.opacity = '1';
      }
      startLoop();
    };

    const onPointerOver = (e) => {
      hovering.current = Boolean(e.target.closest?.(INTERACTIVE));
    };

    const onPointerLeave = () => {
      visible.current = false;
      cursor.style.opacity = '0';
    };

    const onMediaChange = () => setEnabled(canUseCustomCursor());

    setEnabled(canUseCustomCursor());
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('pointerover', onPointerOver, { passive: true });
    document.documentElement.addEventListener('mouseleave', onPointerLeave);
    mediaQuery.addEventListener('change', onMediaChange);
    motionQuery.addEventListener('change', onMediaChange);

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerover', onPointerOver);
      document.documentElement.removeEventListener('mouseleave', onPointerLeave);
      mediaQuery.removeEventListener('change', onMediaChange);
      motionQuery.removeEventListener('change', onMediaChange);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      aria-hidden="true"
    />
  );
};
