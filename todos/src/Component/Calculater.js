import React, { useState } from 'react'

export default function Calculater() {
    const[val,setVal]=useState("")
    const valchange = (e) =>{
        setVal(e.target.value)
    }

    const backspace = () =>{
       setVal("")
    }
   
    const Calculater =()=>{
        try{
            setVal(eval(val))
        }catch(error){
           setVal("error")
        }
    }

    const getdata = (e)=>{
      setVal(val+e.target.value)
    }
  return (

    <div>
    <h1>Calculater</h1>
    <input value={val} onChange={valchange}/>
    <div style={{display:"flex",justifyContent:"center"}}>
    <button value="1" onClick={getdata}>1</button>
    <button value="2" onClick={getdata}>2</button>
    <button value="3" onClick={getdata}>3</button>
    <button value="+" onClick={getdata}>+</button>
    </div>
    <div style={{display:"flex",justifyContent:"center"}}>
    <button value="4" onClick={getdata}>4</button>
    <button value="5" onClick={getdata}>5</button>
    <button value="6" onClick={getdata}>6</button>
    <button value="-" onClick={getdata}>-</button>
    </div>
    
    <div style={{display:"flex",justifyContent:"center"}}>
    <button value="7" onClick={getdata}>7</button>
    <button value="8" onClick={getdata}>8</button>
    <button value="9" onClick={getdata}>9</button>
    <button value="*" onClick={getdata}>*</button>
    </div>
    <div style={{display:"flex",justifyContent:"center"}}>
    <button value="." onClick={getdata}>.</button>
    <button value="0" onClick={getdata}>0</button>
    <button value="=" onClick={()=>Calculater()}>=</button>
    {/* <button value="%" onClick={getdata}>%</button> */}
    <button value="C" onClick={()=>backspace()}>C</button>
    </div>
    </div>
  )
}
