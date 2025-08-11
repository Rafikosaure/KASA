import '../styles/Landscape.scss'
import LandscapeHome from '../assets/landscape-home.jpg'
import LandscapeAboutUs from '../assets/landscape-aboutus.jpg'
import { useState } from 'react'
import { useEffect } from 'react'

function Landscape() {
    const aboutusPage = window.location.pathname === '/aboutus'
    const [landscapeImage, setLandscapeImage] = useState(LandscapeHome)
    const [homeStyle, updateHomeStyle] = useState('')
    const [imageLegend, setImageLegend] = useState('Chez vous, partout et ailleurs')

    // Gestion des styles du composant selon la page & les media queries
    useEffect(() => {
        if (aboutusPage) {
            setLandscapeImage(LandscapeAboutUs)
            setImageLegend('')
        } else {
            updateHomeStyle('landscape--homestyle')
        }
    }, [aboutusPage])
    
    return (
        <div className={`landscape ${homeStyle}`}>
            <div className="landscape__overlay">
                <img
                    className="landscape__image"
                    src={landscapeImage}
                    alt="Paysage de présentation"
                />
            </div>
            <p className="landscape__legend">{imageLegend}</p>
        </div>
    )
}

export default Landscape
