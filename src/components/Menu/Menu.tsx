import styles from './menu.module.css';
import data from '../../../data/animal_sections_data.json';
import { useLayoutEffect, useState } from 'react';

export const Menu = () => {
  const [activeElementTitle, setActiveElementTitle] = useState('');

  useLayoutEffect(() => {
    const listener = () => {
      const scroll = window.pageYOffset;
      const position = data
        .map(({ title }) => {
          const element = document.getElementById(title);
          if (!element) return { title, top: 0, bottom: 0 };
          const rect = element.getBoundingClientRect();
          return {
            title,
            top: Math.max(0, rect.top + scroll - rect.height + 50),
            bottom: Math.max(0, rect.bottom + scroll - rect.height + 50),
          };
        })
        .find(({ top, bottom }) => scroll >= top && scroll <= bottom);
      setActiveElementTitle(position?.title || '');
    };
    window.addEventListener('resize', listener);
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('resize', listener);
      window.removeEventListener('scroll', listener);
    };
  });

  return (
    <nav className={styles.menuContainer}>
      <h3>Your new gang</h3>
      {data.map(({ title }, index) => (
        <a
          className={activeElementTitle === title ? `${styles.menuItem} ${styles.active}` : styles.menuItem}
          key={index}
          href={`#${title}`}
        >
          {title}
        </a>
      ))}
    </nav>
  );
};
