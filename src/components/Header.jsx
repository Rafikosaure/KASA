import { NavLink } from 'react-router-dom'
import '../styles/Header.scss'
import logo from '../assets/logo.png'

function Header() {
    return (
        <div className="header">
            <div className="banner">
                <img src={logo} alt="Logo de Kasa" className="banner__logo" />
                <nav className="banner__navigation">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? 'banner__navlink--underline'
                                : 'banner__navlink'
                        }
                    >
                        Accueil
                    </NavLink>
                    <NavLink
                        to="/aboutus"
                        className={({ isActive }) =>
                            isActive
                                ? 'banner__navlink--underline'
                                : 'banner__navlink'
                        }
                    >
                        A Propos
                    </NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Header
