import React from 'react'
import {Dropdown} from 'react-bootstrap';
function Header(){
    const DanteHTBLink = 'https://raw.githubusercontent.com/DanteHTB/anime-memory-game/main/public'; 

    return (

        <div className="myHeader btn-group">
        
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                AlcaanDesign.com
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="https://alcaandesign.com/">Home</Dropdown.Item>
                <Dropdown.Item href="https://alcaandesign.com/about/">About</Dropdown.Item>
                <Dropdown.Item href="https://alcaandesign.com/portfolio/">Portfolio</Dropdown.Item>
                <Dropdown.Item href="https://alcaandesign.com/contact/">Contact</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Tile/Company Info
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item target="_blank" href="https://en.wikipedia.org/wiki/Brain%27s_Base">  <img src={DanteHTBLink+"/img/brainsbase.png"} alt="Brains Base"></img> Brain's Base</Dropdown.Item>
                <Dropdown.Item href="https://en.wikipedia.org/wiki/CloverWorks"> <img src={DanteHTBLink+"/img/cloverworks.png"} alt="Cloverworks"></img> Cloverworks</Dropdown.Item>
                <Dropdown.Item href="https://en.wikipedia.org/wiki/David_Production"> <img src={DanteHTBLink+"/img/davidproduction.png"} alt="David Production"></img> David Prod.</Dropdown.Item>
                <Dropdown.Item href="https://en.wikipedia.org/wiki/Feel_(animation_studio)"> <img src={DanteHTBLink+"/img/feel.png"} alt="Feel"></img> Feel</Dropdown.Item>
                <Dropdown.Item href="https://en.wikipedia.org/wiki/Liden_Films"> <img src={DanteHTBLink+"/img/lidenfilms.png"} alt="Liden Films"></img> Liden Films</Dropdown.Item>
                <Dropdown.Item href="https://en.wikipedia.org/wiki/Madhouse_(company)"> <img src={DanteHTBLink+"/img/madhouse.png"} alt="Madhouse"></img> Madhouse</Dropdown.Item>
                <Dropdown.Item href="https://en.wikipedia.org/wiki/MAPPA"> <img src={DanteHTBLink+"/img/mappa.png"} alt="Mappa"></img> Mappa</Dropdown.Item>
                <Dropdown.Item href="https://en.wikipedia.org/wiki/Shueisha"> <img src={DanteHTBLink+"/img/shueisha.png"} alt="Shueisha"></img> Shueisha</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </div>
        
    )
}

export default Header;