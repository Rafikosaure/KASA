import '../styles/Card.scss'
import Overlay from '../assets/RectangleCard.png'
import { Link } from 'react-router-dom'

function Card({ apartment }) {
    return (
        <div className="card">
            <Link to={`/apartment/${apartment.id}`} className="card card__link">
                <img className="card__overlay" src={Overlay} alt="Overlay" />
                <img
                    className="card__image"
                    src={apartment.cover}
                    alt="Intérieur d'un appartement"
                />
                <p className="card__title">{apartment.title}</p>
            </Link>
        </div>
    )
}

export default Card
