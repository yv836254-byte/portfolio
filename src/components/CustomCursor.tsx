import { useEffect, useMemo, useState } from 'react';

const isTouchDevice = () => typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const supportsCursor = useMemo(() => typeof window !== 'undefined' && !isTouchDevice(), []);

  useEffect(() => {
    if (!supportsCursor) return;

    const updatePosition = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const interactiveElements = Array.from(document.querySelectorAll('a, button, input, textarea, select, label')) as HTMLElement[];

    const attachHoverEvents = (element: HTMLElement) => {
      element.addEventListener('mouseenter', () => setHovered(true));
      element.addEventListener('mouseleave', () => setHovered(false));
    };

    interactiveElements.forEach(attachHoverEvents);
    document.addEventListener('mousemove', updatePosition);

    return () => {
      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', () => setHovered(true));
        element.removeEventListener('mouseleave', () => setHovered(false));
      });
      document.removeEventListener('mousemove', updatePosition);
    };
  }, [supportsCursor]);

  if (!supportsCursor) return null;

  return (
    <div className={hovered ? 'cursor-hover' : ''}>
      <div className="cursor-dot" style={{ left: position.x, top: position.y }} />
      <div className="cursor-ring" style={{ left: position.x, top: position.y }} />
    </div>
  );
}
