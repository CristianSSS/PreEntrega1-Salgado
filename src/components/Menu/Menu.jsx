import "./menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

export default function Menu(){

    const [visible, setVisible] = useState(false);

    return(
        <menu className="menu"> 
            <li>
                <button className="menu__button">
                    Inicio
                </button>
                
            </li>

            <li>
                <button className="menu__button menu__button--dropdown" onClick={()=> setVisible(!visible)}>
                    Categorias
                    <FontAwesomeIcon icon={faCaretDown} style={{padding:"0 10px"}}/>
                </button>
                

                <ul className="dropdown-list" style={visible ? {display:"flex"} : {display:"none"}}>

                    <button className="dropdown-list__button">
                        categoria 1
                    </button>

                    <button className="dropdown-list__button">
                        categoria 2
                    </button>

                    <button className="dropdown-list__button">
                        categoria 3
                    </button>

                </ul>
            </li>

            <li>
                <button className="menu__button">
                    Contacto
                </button>
            </li>
        </menu>
    )
}