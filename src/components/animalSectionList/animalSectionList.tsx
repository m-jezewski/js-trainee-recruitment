import styles from './animalSectionList.module.css'
import data from '../../../data/animal_sections_data.json'
import AnimalSection from '../animalSection/animalSection';

export const AnimalSectionList = () => {
    return (
        <main className={styles.listConatiner}>
            {data.map(({title, subtitle, imgSrc, imgAlt, highlited}, index) => 
                <AnimalSection 
                    key={index}
                    title={title}
                    subtitle={subtitle}
                    highlited={highlited}
                    imgSrc={imgSrc} 
                    imgAlt={imgAlt}
                />
            )}
        </main>
    );
}
 