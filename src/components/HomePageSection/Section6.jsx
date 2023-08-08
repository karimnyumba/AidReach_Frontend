import React from 'react'
import { useGlobalContext } from '../../context';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { BiSolidDownvote } from 'react-icons/bi'
import { BiSolidUpvote } from 'react-icons/bi'
import uuid from 'react-uuid';

const Section6 = ({propos}) => {
 const [page, setPage] = React.useState(0);
 const {divideToThree}=useGlobalContext();

   const handleResize = (end = true) => {
     const width = window.innerWidth
     if (width < 780) {
       end && setNoImages(1)
       return 1
     }
     if (width < 1000) {
       end && setNoImages(2)
       return 2
     }

     end && setNoImages(3)
     return 3
   }
   const [noImages, setNoImages] = React.useState(handleResize(false))
   React.useEffect(() => {
   
     window.addEventListener('resize', handleResize)
     return () => window.removeEventListener('resize', handleResize)
   }, [])
 const dividedArr = divideToThree(noImages, propos);

  return (
    <section className='m-5'>
      <div>
        <div className='d-flex justify-content-around'>
          <h3>Vote for some of our proposals</h3>
          <div>
            <button
              className='btn btn-outline-warning mx-3 my-1'
              onClick={() =>
                setPage((page - 1 + dividedArr.length) % dividedArr.length)
              }
            >
              <AiOutlineArrowLeft />
            </button>
            <button
              className='btn btn-outline-warning mx-3 my-1'
              onClick={() => setPage((page + 1) % dividedArr.length)}
            >
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
        
        <div className='mt-5 '>
          <ProposalCards proposals={dividedArr[page]} />
        </div>
      </div>
    </section>
  )
}
const ProposalCards=({proposals})=>{
 

 return (
   
     <div className='row'>
       {proposals.map((proposal, ind) => {
         const propLength = proposals.length
         const propWidthMap = new Map([
           [1, 12],
           [2, 6],
           [3, 4],
         ])
         const size = propWidthMap.get(propLength)
         return (
           <div
           key={uuid()}
             className={`${
               propLength !== 1
                 ? 'col-' + size
                 : 'd-flex justify-content-center'
             }`}
           >
             <div className={`card`} style={{ width: '18rem' }}>
               <img className='card-img-top' src='...' alt='Card image cap' />
               <div className='card-body'>
                 <h5 className='card-title'>{proposal}</h5>
                 <p className='card-text'>
                   Some quick example text to build on the card title and make
                   up the bulk of the card's content.
                 </p>
               </div>
               <div className='card-footer'>
                 <div className='d-flex justify-content-around'>
                   <div>
                     <small>Proposed</small>
                     <small className='d-block text-center'>100$</small>
                   </div>
                   <div>
                     <small>Votes</small>
                     <small className='d-block text-center'>100</small>
                   </div>
                   <div>
                     <div className='my-1'>
                       <div>
                         <BiSolidUpvote id='vote_btn' />
                       </div>
                       <div>
                         <BiSolidDownvote id='vote_btn'/>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         )
       })}
     </div>
   
 )
}


export default Section6