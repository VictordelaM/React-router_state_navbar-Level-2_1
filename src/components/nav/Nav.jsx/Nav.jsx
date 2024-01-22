import { Link } from "react-router-dom";

const Nav = () => {
    return ( 
        <nav>
            <Link to= "/">Home</Link>
            <Link to = '/speisekarte'>Speisekarte</Link>
            <Link to= "/contact">Kontakt</Link>
            <Link to= "/galerie">Galerie</Link>
            <Link to= "/open">Öffnungszeiten</Link>
        </nav>
     );
}
 
export default Nav;