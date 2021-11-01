import React from 'react'
import { NavLink } from 'react-router-dom';

const MainError = () => {
    return (
        <>
         <section className="main-error">
             <div className="container py-5 my-5">
                 <div className="row text-center">
                     <div className="col-12">
                        <h1> WE ARE SORRY , PAGE NOT FOUND!</h1>
                        <p>THE PAGE YOU ARE LOOKIN FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME CHANGED OR IS TEMPORARILY UNAVAILABLE</p>
                        <NavLink to="/"><button className="btn btn-outline-secondary">BACK TO HOMEPAGE</button></NavLink>
                     </div>
                 </div>
             </div>
         </section>
        </>
    )
}

export default MainError;
