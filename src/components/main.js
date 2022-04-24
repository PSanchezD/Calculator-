import { useState } from "react"



function Main(){

    const [num,setNum]=useState("0")
    const [num2,setNum2]=useState('')
    const [opt,setOpt]=useState("")


function handleOne(e){
  
    const n = e.target.innerText; 

    if(num === "0"){
        setNum(n)
        
    }
    else{
        setNum( num + n)
    };
    
}



function handleOP(e){

    const oper = e.target.innerText;
    if(opt === ""){
        setOpt(oper)
    }
    else{
        setOpt("")
    }

}

function handleRest(){
    setNum("0")
    setOpt("")
    setNum2("")
}



    return(
        <>
           <div className="container">
               <div className="cal-c">
                   <h1>{num}{opt}{num2}</h1>
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
                    <button onClick={handleOP}>+</button>
                    <button onClick={handleOP}>-</button>
                    <button onClick={handleOP}>x</button>
                    <button onClick={handleOP}>/</button>
                    <button onClick={handleRest}>AC</button>
                   </div>
               </div>
           </div>
        </>
    )
}
export default Main