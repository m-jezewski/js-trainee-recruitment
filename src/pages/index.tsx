import { Menu } from '@/components/Menu/Menu';
import styles from '../styles/index.module.css';
import { AnimalSectionList } from '@/components/animalSectionList/animalSectionList';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`${styles.wrapper} ${inter.className}`}>
      <Menu />
      <AnimalSectionList />
    </div>
  );
}
