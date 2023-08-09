import React from 'react'
import {BsThreeDots} from 'react-icons/bs'
const Summary = () => {
  return (
    <section>
      <div className='row'>
        <SingleSummary name={'Amount Donated'} amount={'100000 f'}/>
        
        <SingleSummary name={'Votes'} amount={120}/>
        
       
      </div>
    </section>
  )
}
const SingleSummary =({name, amount})=>{
 return (
   <div className='col-sm-6  '>
     <div className='m-5 text-center border h-75 w-75 shadow rounded p-4 d-flex flex-column '>
       <div className='d-flex mt-auto'>
         <h3 className='text-capitalize mt-auto fw-1'>{name}</h3>
         <BsThreeDots className='ms-auto' />
       </div>
       <div className='d-flex mt-3'>
         <h2 className='text-start mb-auto me-1 '>{amount}</h2>
         <small className='align-self-end'>3d ago</small>
       </div>
     </div>
   </div>
 )
}

export default Summary