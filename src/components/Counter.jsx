import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset,incrementByAmount } from '../redux/slices/counterSlice'

function Counter() {
 
  const {count}=useSelector(state=>state.counterReducer)
  const dispatch=useDispatch()
  const inputRef=useRef()

  const handleIncrement=()=>{
    const amount=inputRef.current.value
    if(amount){
      dispatch(incrementByAmount(+amount))
      inputRef.current.value= ""
    }else{
      alert("Please enter a valid input")
    }
  }

  return (
    <div>

      <div style={{height:"100vh"}} className="bg-dark text-light d-flex justify-content-center align-items-center">
        <div className="border rounded p-5 d-flex flex-column justify-content-center align-items-center">
          <h1 style={{fontSize:"50px"}}>{count}</h1>
          <div style={{width:"300px"}} className="my-3 d-flex justify-content-center align-items-center">
             <button onClick={()=>dispatch(decrement())} className="btn btn-warning mx-2">Decrement</button>
             <button onClick={()=>dispatch(reset())} className="btn btn-danger mx-2">Reset</button>
             <button onClick={()=>dispatch(increment())} className="btn btn-success mx-2">Increment</button>
          </div>
      <div className="my-3 d-flex justify-content-center align-items-center w-100">
        <input ref={inputRef} type="text" className="form-control me-2" placeholder="Incremented Counter Amount" />
           <button onClick={handleIncrement} className="btn btn-primary">Increment by Amount</button>
           </div>
         </div>
       </div>
     </div>
    
  )
}

export default Counter
