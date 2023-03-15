import styles from './menu.module.css'
import data from '../../../data/animal_sections_data.json'
import { useLayoutEffect, useState } from 'react';

export const Menu = () => {
    const [activeElementTitle, setActiveElementTitle] = useState('')

    useLayoutEffect(() => {
        const listener = () => {
            const scroll = window.pageYOffset
            const position = data.map(({title}) => {
                const element = document.getElementById(title)
                if (!element) return { title , top: -1, bottom: -1 }
                const rect = element.getBoundingClientRect()
                return { 
                    title, 
                    top: Math.max(0, rect.top + scroll - (275 * 1920 / window.innerWidth)),
                    bottom: Math.max(0, rect.bottom + scroll - (275 * 1920 / window.innerWidth))
                }
            })
            .find(({ top, bottom }) => scroll >= top && scroll <= bottom)
            setActiveElementTitle(position?.title || "")
        }
        window.addEventListener('resize', listener)
        window.addEventListener('scroll', listener)
        return () => {
            window.removeEventListener('resize', listener)
            window.removeEventListener('scroll', listener)
        }
    })

    return (
        <nav className={styles.menuContainer}>
            <h3>Your new gang</h3>
            {data.map(({title}, index) => (
                <a
                    style={activeElementTitle === title ? { color: 'red'} : {}}
                    className={styles.menuItem}
                    key={index}
                    href={`#${title}`}>
                    {title}        
                </a>
            ))}
        </nav>
    );
}