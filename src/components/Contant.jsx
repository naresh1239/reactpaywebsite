import React, { useState } from 'react'
import img5 from "../images/for-3.jpg"

const Contant = () => {

    const[userdata, setuserdata] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        massage: "",
    });
  let name, value;
    const postUserData = (event)=>{
  name = event.target.name;
  value = event.target.value;

  setuserdata({...userdata, [name]:value})
    }


    const submitdata = async (event) => {
        event.preventDefault();
   const{firstName, lastName , phone, email, adsress, massage} = userdata;
  

 
  const res = await fetch('https://payme-e1309-default-rtdb.firebaseio.com/usedatabase.json',
   {
  method: "POST",
      headers: {
       "Content-Type" : "application/json",
   },
   body:JSON.stringify({
      firstName, lastName , phone, email, adsress, massage,
   }),
     }
    );
if(res){
    setuserdata({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        massage: "",
    })
    alert("dtat store");
}else{alert("no")}
         }
            
    return (
        <>
            <section className="contact">
                <div className="container">
                    <div className="row py-5 my-5">
                        <div className="col-lg-5 py-lg-0 py-5">
                            <h4 className="fw-bolder">contact with our<br /> sales team</h4>
                            <p className="py-3">Lorem, ipsum dolor sit amet consectetur<br /> adipisicing elit. Sit voluptatum fuga aspernatur,</p>
                            <img src={img5} className="img-fluid  w-75 " alt="d" />
                        </div>
                        <div className="col-lg-7">
                            <form action="POST">
                                <div className="d-flex">
                                    <input type="text" name="firstName" className="w-100 py-2 px-2 me-2"  placeholder="First Name" value={userdata.firstName} onChange={postUserData} />
                                    <input type="text" name="lastName" className="w-100 py-2 px-2 mr-2" placeholder="Last Name"  value={userdata.lastName} onChange={postUserData} />
                                </div>
                                <div className="d-flex my-4">
                                    <input type="text" name="phone" className="w-100 py-2 px-2 me-2" placeholder="Phone Number" value={userdata.phone} onChange={postUserData} />
                                    <input type="text" name="email" className="w-100 py-2 px-2 mr-2" placeholder="Email" value={userdata.email} onChange={postUserData} />
                                </div>
                                <div className=" my-4">
                                    <input type="text" name="address" className="w-100 py-2 px-2 " placeholder="Add Adress" value={userdata.address} onChange={postUserData} />

                                </div>
                                <div className=" my-4">
                                    <input type="text" name="massage" className="w-100 py-2 px-2 " placeholder="Enter Your Massage" value={userdata.massage} onChange={postUserData} />

                                </div>
                                <div className=" d-flex align-items-start my-4">
                                    <input type="checkbox" className="me-5" />
                                    <p>I agree that the Paythis may contact me at the email address phone number above</p>
                                </div>
                                <button className="btn rounded-pill btn-c w-100 shadow-none" onClick={submitdata}>submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contant;
