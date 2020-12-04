import { Link } from 'react-router-dom';
import togglerIcon from '../images/toggler-icon.png';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-dark bg-danger">
                <button className="navbar-toggler mr-4" type="button" data-toggle="collapse"
                    data-target="#navbarToggler" aria-controls="navbarToggler"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <img src={togglerIcon} alt="toggler icon"></img>
                </button>
                <Link className="navbar-brand mr-auto" to="/">Pokédex</Link>
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">List of Pokémon</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;