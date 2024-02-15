interface AnimalObject {


    image: { url: string } | string;
    name?: string;

    temperament?: string;

}

interface Props {
    animalType: "cat" | "dog"
    animalInfo: AnimalObject
}

function KnowledgeBlock({animalType, animalInfo}: Props) {
    let animalDescription: string
    let animalName: string
    let animalImageURL: string = ''
    if (animalInfo.name && animalInfo.temperament && (typeof animalInfo.image === 'string' || typeof animalInfo.image === 'object')) {
        switch (animalType) {
            case "dog":
                animalDescription = animalInfo.temperament
                animalName = animalInfo.name
                if (typeof animalInfo.image === 'object') {
                    animalImageURL = animalInfo.image.url
                }
                break
            case "cat":
                animalDescription = animalInfo.temperament
                animalName = animalInfo.name
                if (typeof animalInfo.image === 'object') {
                    animalImageURL = animalInfo.image.url
                }
                break
        }
    }

    return (
        <div className="knowledgeBlock">
            <img className="knowledgeBlockImage" src={animalImageURL} alt="dog's missing"/>
            <h3>{animalInfo.name}</h3>
            <p>{animalInfo.temperament}</p>
        </div>
    )
}

export default KnowledgeBlock