import React, { useState } from 'react';
import axios from 'axios';
import validator from "validator";

const Registration=()=>{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password:'',
        cpassword:''
      });
      const [errorFlag, setErrorFlag] = useState(0);
      const [formState, setFormSate] = useState(0);
      const [msg, setMessage] = useState('');
      const handleInputChange =(e)=>{
        const { name, value } = e.target;
        setPassFlag(0);
        setErrorFlag(0);
        setMessage('');
        setFormData({ ...formData, [name]: value });
      }
      const [passFlag, setPassFlag] = useState(0);
      const serverurl = process.env.REACT_APP_SERVER_URL_KEY;
 
     const  saveRegistrationForm=async(e)=>{
        e.preventDefault();
        setErrorFlag(0);
          if(formData.name==='' ||  formData.email==='' ||  formData.password===''){
            setFormSate(1);
          }
        else if(formData.password!==formData.cpassword){
            setPassFlag(1);
        }
        else if(formData.password!=='' && formData.password.length<6){
          setPassFlag(1);
          setErrorFlag(1);
          setMessage('Password should be 6 characters long');
      }
        else if(formData.email!=='' && !validator.isEmail(formData.email)){
          setErrorFlag(1);
          setMessage('Please provide valid email');
        }
        else{
        axios.post(serverurl+'?action=register',formData)
         .then(response => {
        
           ///console.log(JSON.stringify(response.user_id));
           if(response.data.success===0){
            setErrorFlag(1);
           }
           if(response.data.success===1){
            window.location.href="/products";
            
            //window.location.reload();

           }
         localStorage.setItem('userid', response.data.user_id);

         localStorage.setItem('uname', response.data.name);

         })
       .then(data => {
         
          })
          .catch(error => {
            
         });
    //const result = await response.json();
    //console.log(result);
        }

     }
     const className=  `${formData.name==='' ? 'is-invalid' : ''}`;

     const clickOnForm=()=>{
        setFormSate(1);
     }
    return (
        <div className='container my-5' >
      

            <div className="row justify-content-center">
            <div className="col-md-6">
            <div className="card">
                    <div className="card-body">
                        <h5 className="card-title text-center">Registration</h5>
                      { errorFlag===1 || msg!=='' ? (<div className="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>Error!</strong>  {msg!=='' ? msg :'Email is already registered.'}
  
</div>) :''}

                        <form autoComplete="off" onClick={clickOnForm}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Name</label>
    <input type="text" name="name"  autoComplete="off" onChange={handleInputChange}  className={'form-control '+ (formData.name==='' && formState===1 ? 'is-invalid' : '')} id="name" aria-describedby="emailHelp" placeholder="Enter Name" />
  
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Mail</label>
    <input type="text" name="email" onChange={handleInputChange} className={'form-control '+ (formData.email==='' && formState===1 ? 'is-invalid' : '')} id="email" placeholder="Enter email" />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" autoComplete='off' name="password" onChange={handleInputChange} className={'form-control '+ (((formData.password==='' && formState===1) || passFlag===1 ) ? 'is-invalid' : '')} id="password" placeholder="Password" />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Confirm Password</label>
    <input type="password" autoComplete='off' name="cpassword"  onChange={handleInputChange} className={'form-control '+ (((formData.password==='' && formState===1) || passFlag===1 ) ? 'is-invalid' : '')} id="cpassword" placeholder="Password" />
  </div>
  
 <div className="text-center 
 ">
  <button type="submit" className="btn btn-primary" onClick={saveRegistrationForm} >Sign Up</button>
  </div>
</form>
                    </div>
                </div>
      </div>
      </div>
      </div>);
}

export default Registration;