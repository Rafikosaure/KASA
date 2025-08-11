import '../styles/Home.scss'
import Landscape from '../components/Landscape'
import { data } from '../data/Services'
import Card from '../components/Card'

function Home() {
    return (
        <div className="home">
            <div className="home__body">
                <Landscape />
                <div className="home__cardslist">
                    {data.map((apartment) => (
                        <Card key={`${apartment.id}`} apartment={apartment} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
