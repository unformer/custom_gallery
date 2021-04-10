import React from 'react';
import preloader from "../images/preloader.gif";

let Preloader = (props) => {
    return <div  style={ { backgroundColor: 'white' } }>
        <img src={preloader} className="Preloader" alt=""/>
    </div>
}

export default Preloader;