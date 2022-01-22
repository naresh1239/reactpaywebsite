import React, { useState } from 'react'
import workapi from './workapi';
const Work = () => {
  
     const[workdata, setworkdata] = useState(workapi);
     console.log(workdata);

    return (
        <>
           <section className="work ">
               <div className="container shadow bg-white my-md-0 my-5">
               <div className="row py-5 ">
                <div className="col-12 text-center ">
                    <h5 className="fw-bold">How does it work</h5>
                </div>
            </div>
       
                <div className="row pb-5">


                </div>
           
                
               </div>
        </section> 
        </>
    )
}

export default Work;
