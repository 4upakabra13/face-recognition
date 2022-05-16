import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import {BiBrain} from 'react-icons/bi'

const Logo = () => {
    return(
      <div className="ma4 mt0">
        <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner"> <BiBrain /> </div>
        </Tilt>
      </div>
    );
}

export default Logo