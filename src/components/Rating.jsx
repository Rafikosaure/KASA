import '../styles/Rating.scss'
import StarActive from '../assets/star-active.svg'
import StarInactive from '../assets/star-inactive.svg'

function Rating({ rating }) {
    const denominator = 5
    const orangeStars = new Array(parseInt(rating)).fill(true)
    const greyStars = new Array(denominator - parseInt(rating)).fill(false)
    const totalStars = orangeStars.concat(greyStars)

    return (
        <div className="stars">
            {totalStars.map((star, index) =>
                star === true ? (
                    <img
                        key={`${star}-${index}`}
                        src={StarActive}
                        alt="Etoile orange"
                    />
                ) : (
                    <img
                        key={`${star}-${index}`}
                        src={StarInactive}
                        alt="Etoile grise"
                    />
                )
            )}
        </div>
    )
}

export default Rating
