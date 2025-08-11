import '../styles/AboutUs.scss'
import Landscape from '../components/Landscape'
import Collapse from '../components/Collapse'
import { guidelines } from '../data/Services'

function AboutUs() {
    return (
        <div className="aboutus">
            <div className="aboutus__landscape">
                <Landscape />
            </div>
            <div className="aboutus__collapses">
                {guidelines.map((data, index) => (
                    <Collapse
                        key={`${data}-${index}`}
                        title={data.title}
                        description={data.description}
                        index={index}
                    />
                ))}
            </div>
        </div>
    )
}

export default AboutUs
