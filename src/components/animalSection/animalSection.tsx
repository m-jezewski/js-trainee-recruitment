import Image from "next/image";
import styles from './animalSection.module.css'

interface AnimalSectionProps {
    title: string
    subtitle: string
    imgSrc: string
    imgAlt: string
    highlited: string
}

const highlitText = (text: string, themedWord: string) => {
    const words = text.split(' ')
    words[words.indexOf(themedWord)] = `<span class=${styles.themeTextColor}>${themedWord}</span>`
    return words.join(' ') 
}
 
const AnimalSection = ({title, subtitle, imgSrc, imgAlt, highlited}: AnimalSectionProps) => {
    return (
        <section id={title} className={styles.sectionWrapper}>
            <div>
                <h2>{title}</h2>
                <h3 dangerouslySetInnerHTML={{__html: highlitText(subtitle, highlited)}} />
            </div>
            <div className={styles.imgWrapper}>
                <Image src={imgSrc} alt={imgAlt} fill={true} />
            </div>
        </section>
    );
}
 
export default AnimalSection;