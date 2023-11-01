import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { isUserLoggedIn } from './ProtectedRoute';
import { useSelector, useDispatch } from 'react-redux';
import { showPopup ,performCartOperation} from '../redux/action';

const NavBar = () => {
  useEffect(() => {
    var cartProductArray=[];
 
    var tempQty=0;
    var saveProductArray=localStorage.getItem('products');
    if(saveProductArray){
      cartProductArray=JSON.parse(saveProductArray);
      cartProductArray.map((item)=>{
        tempQty=tempQty+item.qty;
      });
      dispatch(performCartOperation(cartProductArray,tempQty));
    }
}
  
  , []);

  const [showPop,setShowPop]=useState({display:'none'});
  const cartitems = useSelector((state) => state.cartitems);
  const dispatch = useDispatch();
  const logOut=()=>{
    localStorage.removeItem('userid');
    localStorage.removeItem('uname');
    window.location.reload();
  }
  const showLogOut=()=>{
    setShowPop({display:'block'});
  }
  const showCartPopup=()=>{
    dispatch(showPopup());
  }
 const uname= localStorage.getItem('uname');
       

  return (
    <nav className="navbar  sticky-top navbar-expand-lg navbar-dark " style={{ backgroundColor: '#232f3e' }}>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand" href="#">Lohiya-Ecom</a>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/home">Home </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/about">About </Link>
          </li>
          {
            

          }
          {isUserLoggedIn() === false &&
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          }
          {isUserLoggedIn() === false &&
            <li className="nav-item">
              <Link className="nav-link" to="/registration">Registration</Link>
            </li>
          }

          {isUserLoggedIn() === true &&
            <li className="nav-item">
              <Link className="nav-link" to="/products">Shop</Link>
            </li>
          }
        </ul>

      </div>
      {isUserLoggedIn() === true &&
      <div onClick={showCartPopup} ><i className="bi-cart text-light bg-dark mr-5">{cartitems.qty>0 && <span className="cartCount">{cartitems.qty}</span>}</i></div>
      }
      {isUserLoggedIn() === true &&
       
      <div className='rightdiv' onClick={showLogOut}> {isUserLoggedIn()===true ? 'Hi '+ uname.charAt(0).toUpperCase() + uname.slice(1) :''}
        <div className='popup' style={showPop} onMouseLeave={()=>{setShowPop({display:'none'})}} onClick={logOut}><a href="#">Logout</a></div>
       
      </div>
     }
     
    </nav>
  );
}

export default NavBar;