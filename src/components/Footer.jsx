import '../styles/Footer.scss'
import LogoFooter from '../assets/logo-footer.png'

function Footer() {
    return (
        <div className="footer">
            <img src={LogoFooter} alt="Logo de Kasa" className="footer__logo" />
            <p className="footer__text">© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer
