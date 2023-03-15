import Image from "next/image";
import styles from './animalSection.module.css'

interface AnimalSectionProps {
    title: string
    subtitle: string
    imgSrc: string
    imgAlt: string
    highlited: string
}

const highlitWord = (text: string, themedWord: string) => {
    const words = text.split(' ')
    words[words.indexOf(themedWord)] = `<span class=${styles.themeTextColor}>${themedWord}</span>`
    return words.join(' ') 
}

const AnimalSection = ({title, subtitle, imgSrc, imgAlt, highlited}: AnimalSectionProps) => {
    return (
        <section id={title} className={styles.section}>
            <div>
                <h2>{title}</h2>
                <h3 dangerouslySetInnerHTML={{__html: highlitWord(subtitle, highlited)}} />
            </div>
            <div className={styles.imgWrapper}>
                <Image src={imgSrc} alt={imgAlt} fill={true} sizes='944px' />
            </div>
        </section>
    );
}
 
export default AnimalSection;