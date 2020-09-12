import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Contact = () => {
  const [data, setData] = useState(
    {
      fullname:'',
      number:'',
      email:'',
      msg:'',

    }
  );
  const InputEvent =(event)=>{
    const {name,value} = event.target;
 
  setData((preVal)=> {
    return {
      ...preVal,
      [name]: value,
    };
  });
};

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My name is ${data.fullname}. My Email is ${data.email}.My phone number is ${data.number}. My Message is ${data.msg} `); 
  }

    return (
        <>
        <div className="my-5">
            <h1 className="text-center">Contact Us</h1>           
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                
                <form onSubmit={ formSubmit } >
  <div class="form-group  m-3">
    <label for="exampleFormControlInput1">Full Name</label>
    <input 
    type="text" class="form-control" 
    id="exampleFormControlInput1"
    name="fullname"
    value={data.fullname}
    onChange={InputEvent}
    placeholder="Enter Your Name"/>
  </div>
  
  <div class="form-group  m-3 ">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" 
    name="email"
    value={data.email}
    onChange={InputEvent}
      placeholder="name@example.com"/>
  </div>
  <div class="form-group  m-3">
    <label for="exampleFormControlInput1">Phone number</label>
    <input type="number" class="form-control" id="exampleFormControlInput1"
      name="number"
      value={data.number}
      onChange={InputEvent}
       placeholder="Enter Your Number"/>
  </div>
  
  
  <div class="form-group  m-3">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
    name="msg"
    value={data.msg}
    onChange={InputEvent}>

    </textarea>
  </div>

  <div class= "col-12 m-3">

  <button class="btn btn-outline-primary " type="submit">Submit form</button>
   </div>
</form>

                </div>
            </div>
        </div>

    </>
    );
};

export default Contact;