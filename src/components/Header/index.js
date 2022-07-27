import './header.css'
import {Link} from 'react-router-dom';


function Header() {
    return (
        <header>
            <Link className="logo" to="/"><img src='android-chrome-192x192.png'></img>Projeto BasicFlix</Link>
            <Link className='favoritos' to="/favoritos">Meus Filmes</Link>


        </header>
    )
}

export default Header;