import "./navbar.css";
import CartWidget from "./CartWidget";

export default function NavBar(){
    return(
        <nav className="navbar">

            <h1 style={{margin:0, padding:"20px", textDecoration:"underline"}}>ShopTastic</h1>

            <menu>
                <li>Inicio</li>
                <li>Productos</li>
            </menu>

            <CartWidget/>
        </nav>
    );
}