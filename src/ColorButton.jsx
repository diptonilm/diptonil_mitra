import React, { useState } from "react";
import { useRecoilState } from "recoil";
import {colorState} from './atoms';

function ColorButton(){
    const[color, setColor]= useRecoilState(colorState);
    function handleClick(){
        setColor(color==='blue'? 'red' : 'blue');
    }
    return(
        <button onClick={handleClick} style={{backgroundColor: color}}>Change Colour</button>
        
    )
}

export default ColorButton;