
import {evaluate} from "mathjs";
import { useState } from "react"


function Main(){

        const [result,setResult]=useState("")

        const handleOne=(e)=>{
            setResult(result.concat(e.target.innerText))
        };

        const operation=(e)=>{
        setResult(result + e.target.innerText);
        };

        const clear=()=>{
            setResult("")
            
        };

        const equal =()=>{
            setResult(evaluate(result))
        }

    return(
        <>
           <div className="container">
               <div className="cal-c">
                   <h1>{result}</h1>
                   <div className="numb-c">
                    <button onClick={handleOne}>1</button>
                    <button onClick={handleOne}>2</button>
                    <button onClick={handleOne}>3</button>
                    <button onClick={handleOne}>4</button>
                    <button onClick={handleOne}>5</button>
                    <button onClick={handleOne}>6</button>
                    <button onClick={handleOne}>7</button>
                    <button onClick={handleOne}>8</button>
                    <button onClick={handleOne}>9</button>
                    <button onClick={handleOne}>0</button>
                   </div>
                   <div className="opt-c">
                    <button onClick={operation}>+</button>
                    <button onClick={operation}>-</button>
                    <button onClick={operation}>*</button>
                    <button onClick={operation}>/</button>
                    <button onClick={equal}>=</button>
                    <button onClick={clear}>AC</button>
                   </div>
               </div>
           </div>
        </>
    )
}
export default Main