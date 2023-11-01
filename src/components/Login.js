import { useState } from "react";
import axios from 'axios';
import { Route, redirect,useNavigate,Navigate, Outlet } from 'react-router-dom';
const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });
  const [formClick, setFormClick] = useState(0);
  const [formError, setformError] = useState(0);
  const submitLogin = (e) => {
    e.preventDefault();
    const serverurl = process.env.REACT_APP_SERVER_URL_KEY;
    axios.post(serverurl+'?action=login',loginForm)
    .then(response => {
     
      ///console.log(JSON.stringify(response.user_id));
      if(response.data.success===0){
        setformError(1);
      }
      if(response.data.success===1){
        localStorage.setItem('userid', response.data.user_id);
        localStorage.setItem('uname', response.data.name);
        //<Navigate replace to="/products" />
     window.location.href="/products"
      ;
      //Navigate("/products");
     

      }
    localStorage.setItem('userid', response.data.user_id);

  });
}
  const elementClick = (e) => {
    setFormClick(0);
    setformError(0);
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });

  }
  const formCLick=()=>{
    setFormClick(1);
  }
  return (
    <div className='container my-5' >
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Login</h5>
              { formError===1 ? (
              <div className='alert alert-danger alert-dismissible fade show'>Login Details Incorrect. Please try again.
</div>) : ''
}
              <form onClick={formCLick}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="text" name="email" className={'form-control'+ (loginForm.email==='' && formClick===1 ? ' is-invalid':'')} id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={elementClick} />

                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" autoComplete="off" name="password" className={'form-control'+ (loginForm.password==='' && formClick===1 ? ' is-invalid':'')} id="password" placeholder="Enter Password" onChange={elementClick} />
                </div>
                <div className="form-group form-check text-right py-2">

                
                </div>
                <div className="text-center 
 ">
                  <button type="submit" className="btn btn-primary " onClick={submitLogin}>Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>);
}

export default Login;