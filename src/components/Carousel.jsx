import { useEffect, useMemo, useRef, useState } from "react";

export default function Carousel({ images = [], aspect = "aspect-[4/5]", interval = 4500, altPrefix = "Danzario" }) {
  const [index, setIndex] = useState(0);
  const total = images.length;
  const timer = useRef(null);
  const startX = useRef(0);

  const go = (i) => setIndex((i + total) % total);
  const prev = () => go(index - 1);
  const next = () => go(index + 1);

  useEffect(() => {
    if (!total) return;
    timer.current = setInterval(next, interval);
    return () => clearInterval(timer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, total, interval]);

  const onMouseEnter = () => timer.current && clearInterval(timer.current);
  const onMouseLeave = () => (timer.current = setInterval(next, interval));

  useEffect(() => {
    const onKey = (e) => { if (e.key === "ArrowLeft") prev(); if (e.key === "ArrowRight") next(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const onTouchStart = (e) => { startX.current = e.touches[0].clientX; clearInterval(timer.current); };
  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) > 40) (dx > 0 ? prev() : next());
    timer.current = setInterval(next, interval);
  };

  const transform = useMemo(() => `translateX(-${index * 100}%)`, [index]);
  if (!total) return null;

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-white ${aspect}`}
         onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
         onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} aria-roledescription="carousel">
      <div className="h-full w-full overflow-hidden">
        <div className="flex h-full w-full transition-transform duration-500 ease-out" style={{ transform }}>
          {images.map((src, i) => (
            <div key={i} className="min-w-full h-full flex items-center justify-center bg-gray-50">
              <img src={src} alt={`${altPrefix} ${i + 1}`} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Controles */}
      <button onClick={prev} aria-label="Anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white p-2 shadow-soft">‹</button>
      <button onClick={next} aria-label="Siguiente"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white p-2 shadow-soft">›</button>

      {/* Dots */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
        {images.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} aria-label={`Ir a la imagen ${i + 1}`}
                  className={`h-2 w-2 rounded-full ${i === index ? "bg-brand" : "bg-gray-300"}`} />
        ))}
      </div>
    </div>
  );
}
