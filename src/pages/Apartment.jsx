import { useNavigate, useParams } from 'react-router-dom'
import '../styles/Apartment.scss'
import Slideshow from '../components/Slideshow'
import { data } from '../data/Services'
import TagName from '../components/TagName'
import { useEffect } from 'react'
import { useState } from 'react'
import Collapse from '../components/Collapse'
import Rating from '../components/Rating'

function Apartment() {
    const { apartmentId } = useParams()
    const [rightPage, updateRightPage] = useState(false)
    const navigate = useNavigate()
    const currentData = data.find((apartment) => apartment.id === apartmentId)

    useEffect(() => {
        if (apartmentId === undefined || currentData === undefined) {
            navigate('*')
        } else {
            updateRightPage(true)
        }
    }, [apartmentId, currentData, navigate])

    return (
        <div>
            {rightPage ? (
                <div className="apartment">
                    <Slideshow currentData={currentData} />
                    <div className="apartment__data">
                        <div className="apartment__data--orientation">
                            <div className="apartment__presentation">
                                <h1 className="apartment__title">
                                    {currentData.title}
                                </h1>
                                <p className="apartment__location">
                                    {currentData.location}
                                </p>
                                <div className="apartment__tagnames">
                                    {currentData.tags.map((tag, index) => (
                                        <TagName
                                            key={`${tag}-${index}`}
                                            tagText={tag}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className='apartment__hostAndRating'>
                                <div className="apartment__host">
                                    <p className="apartment__hostName">
                                        {currentData.host.name}
                                    </p>
                                    <img
                                        className="apartment__hostPhoto"
                                        src={currentData.host.picture}
                                        alt="Hôte de l'appartement"
                                    />
                                </div>
                                <div className='apartment__rating'>
                                    <Rating rating={currentData.rating} />
                                </div>
                            </div>
                        </div>
                        <div className="apartment__collapseComponents">
                            <div className="apartment__collapse">
                                <Collapse
                                title="Description"
                                description={currentData.description}             
                                />
                            </div>
                            <div className="apartment__collapse">
                                <Collapse
                                title="Equipements"
                                description={currentData.equipments}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default Apartment
