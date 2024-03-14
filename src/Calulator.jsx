import React, { useState } from 'react'

function Calulator() {
    const [display,setDisplay] = useState('0');

    const handleNumber = (event) =>{
      const number=event.target.textContent;
      if(display==='0'){
        setDisplay(number)
      }
      else{
        setDisplay(display+number)
      }
      
    }
    const handleOperator = (event) =>{
      const operator=event.target.textContent;
      setDisplay(display + ' ' + operator +' ')

    }
    const evaluate = () =>{
      setDisplay(eval(display))
    }
    const handleDecimal = () =>{
      const array=display.split(' ')
      const lastElement=array[array.length-1]
      if(!lastElement.includes('.')){
        setDisplay(display + '.')
      }
    }
    const ac = () =>{
      setDisplay('0')
    }
    const del = () =>{
      const array=display.split('')
      setDisplay(display.slice(0,array.length-1))
    }


  return (
    <>
    <div className='container p-3 bg-dark rounded' style={{border:'2px solid black', width:'350px'}}>
    <div className="calc-wrapper"  >
        <div className="container">
            <div className="calc-screen card p-3" style={{alignItems:'flex-end' , height:'50px'}}>
               
               <div className="curr-calc">{display}</div>
            </div>
            <div className="calc-body-wrapper">
                <div className="body-wrapper">
                 <div className="row-1 b d-flex justify-content-between m-2">
                    <button className='btn  bg-light text-dark fw-bolder shadow-none' onClick={ac}>AC</button>
                    <button  className='btn bg-light text-dark fw-bolder shadow-none' onClick={del}>DEL</button>
                    <button  className='btn bg-light text-dark fw-bolde shadow-none' onClick={handleOperator}>%</button>
                    <button  className='btn bg-warning text-light fw-bolder shadow-none' onClick={handleOperator}>/</button>
                 </div>
                 <div className="row-2 b d-flex justify-content-between m-2">
                 <button className='btn  bg-secondary text-dark fw-bolder shadow-none' onClick={handleNumber}>7</button>
                 <button className='btn  bg-secondary text-dark fw-bolder shadow-none' onClick={handleNumber}>8</button>
                 <button className='btn  bg-secondary text-dark fw-bolder shadow-none' onClick={handleNumber}>9</button>
                 <button className='btn  bg-warning text-light fw-bolder shadow-none' onClick={handleOperator}>*</button>
                 </div>
                 <div className="row-3 b d-flex justify-content-between m-2">
                 <button className='btn  bg-secondary text-dark fw-bolder shadow-none' onClick={handleNumber}>4</button>
                 <button className='btn  bg-secondary text-dark fw-bolder shadow-none' onClick={handleNumber}>5</button>
                 <button className='btn  bg-secondary text-dark fw-bolder shadow-none' onClick={handleNumber}>6</button>
                 <button className='btn  bg-warning text-light fw-bolder shadow-none' onClick={handleOperator}>-</button>
                 </div>
                 <div className=" row-4 b d-flex justify-content-between m-2">
                 <button className='btn  bg-secondary text-dark fw-bolder shadow-none' onClick={handleNumber}>1</button>
                 <button className='btn  bg-secondary text-dark fw-bolder shadow-none' onClick={handleNumber}>2</button>
                 <button className='btn  bg-secondary text-dark fw-bolder shadow-none' onClick={handleNumber}>3</button>
                 <button className='btn  bg-warning text-light fw-bolder shadow-none' onClick={handleOperator}>+</button>
                 </div>
                 <div className=" row-4 b d-flex justify-content-between m-2">
                 <button className='btn  bg-secondary text-dark fw-bolder shadow-none' style={{width:'130px'}} onClick={handleNumber}>0</button>
                 <button className='btn  bg-secondary text-dark fw-bolder shadow-none' onClick={handleDecimal}>.</button>
                 <button className='btn  bg-warning text-light fw-bolder shadow-none' onClick={evaluate}>=</button>
                 </div>
                </div>
            </div>
        </div>
        
    </div>
    </div>
    </>
  )
}

export default Calulator