import { useEffect } from 'react'
import './counter.scss'
import { useState } from "react"

export const CounterComp = () => {
    const [counter, setCounter] = useState([])
    const Increment = () => {
        setCounter(counter + 1)
    }
    const Decrement = () => {
        setCounter(counter - 1)
    }
    const Reset = () => {
        setCounter(0)
    }
    useEffect(() => {
        var animateButton = function(e) {
            e.preventDefault;
            e.target.classList.remove('animate');
            e.target.classList.add('animate');
            setTimeout(function(){
              e.target.classList.remove('animate');
            },700);
          };        
          var bubblyButtons = document.getElementsByClassName("bubbly-button");
          for (var i = 0; i < bubblyButtons.length; i++) {
            bubblyButtons[i].addEventListener('click', animateButton, false);
          }
    }, [])
    return(
        <div>
            <button className="bubbly-button" onClick={Increment}>Increment</button>
            <span>{counter}</span>
            <button className='bubbly-button' onClick={Decrement}>Decrement</button>
            <button className='bubbly-button' onClick={Reset}>Reset</button>
        </div>    
    )
}