import React from 'react';
import {useState, useEffect} from 'react';

function Hooks (){
    const [count, setCount]= useState(0);
    useEffect(()=>{
        document.title= `Your clicked ${count} times `;
    });
   
    return(
        <div>
        <p> Your Total is {count}</p>
        <button onClick= {()=> setCount(count +1)}> Click Me</button>
        </div>
    )
}
export default Hooks;