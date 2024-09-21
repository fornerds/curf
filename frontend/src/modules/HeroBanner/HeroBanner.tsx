import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroBanner.module.css';

export type SlideItem = {
  imageUrl: string;
  link: string;
};

export type HeroBannerProps = {
  slides: SlideItem[];
};

export function HeroBanner({ slides }: HeroBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className={styles.sliderContainer}>
      {slides.map((slide, index) => (
        <Link
          key={index}
          to={slide.link}
          className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
        >
          <img src={slide.imageUrl} alt={`Slide ${index + 1}`} />
        </Link>
      ))}
      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
