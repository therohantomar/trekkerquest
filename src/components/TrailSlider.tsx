import "iconify-icon";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { regions } from "../data/treks";

export default function TrailSlider() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const slides = regions;
  const slide = slides[active];
  const move = (direction: number) =>
    setActive(
      (current) => (current + direction + slides.length) % slides.length,
    );

  return (
    <section className="trail-slider" aria-label="Featured Indian landscapes">
      <AnimatePresence mode="wait">
        <motion.a
          key={slide.slug}
          className="slider-slide"
          href={`/destinations/${slide.slug}/`}
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(18,34,27,.78), rgba(18,34,27,.08)), url('${slide.image}')`,
          }}
          initial={{ opacity: 0, scale: 1.025 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
        >
          <span className="slider-kicker">
            LANDSCAPE {String(active + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")}
          </span>
          <span className="slider-title">{slide.name}</span>
          <span className="slider-description">{slide.description}</span>
          <span className="slider-link">
            Explore this landscape <span aria-hidden="true">↗</span>
          </span>
        </motion.a>
      </AnimatePresence>
      <div className="slider-controls">
        <button
          type="button"
          onClick={() => move(-1)}
          aria-label="Previous landscape"
        >
          <iconify-icon icon="solar:arrow-left-linear" />
        </button>
        <div
          className="slider-dots"
          role="group"
          aria-label="Choose a landscape"
        >
          {slides.map((item, index) => (
            <button
              type="button"
              key={item.slug}
              aria-label={`Show ${item.name}`}
              aria-current={active === index ? "true" : undefined}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => move(1)}
          aria-label="Next landscape"
        >
          <iconify-icon icon="solar:arrow-right-linear" />
        </button>
      </div>
    </section>
  );
}
