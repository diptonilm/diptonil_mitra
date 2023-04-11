import {useState, React} from 'react';

function HandleClick1(){
    const greetings= ['Hello', 'Bhojpur', 'Hola', 'Good Morning', 'Good Night'];
    const[index, setIndex]= useState(0);

    const handleClick=()=>{
        setIndex((index + 1)%greetings.length);
    };

    return(
        <div>
            <h1>{greetings[index]}</h1>
            <button onClick={handleClick}>Next Greeting</button>
        </div>
    )
}

export default HandleClick1;