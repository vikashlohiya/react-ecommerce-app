import logo from './logo.svg';
import './App.css';

import  {tempnamevar}  from "./common"
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement,setUser } from './redux/action';
import { useEffect, useState } from 'react';
import NavBar  from  "./components/Navbar";
import CardNews  from  "./components/CardNews";
import Login from "./components/Login"
import Registration from './components/Registration';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Allproducts from "./components/Allproducts"
import Products from "./components/Products";
import AddedtoCart from './components/AddedtoCart';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home';
import About from './components/About';
function App() {
  const name = useSelector((state) => state.counter.name);
  const counter = useSelector((state) => state.counter.counter);
  const [temp,setTemp]=useState(1);
  const dispatch = useDispatch();
  const [newsData,setNew]=useState(null);

  

  // useEffect(()=>{
  //   fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=62de2d2823f845ceb3cfdfd81f20f2b2')
  //   .then(response => response.json())
  //   .then(json => console.log(json))
  //   .catch(error => console.error(error));

  // });
  return (
    <>
    <Router>
        <NavBar/>
        <AddedtoCart/>
        
        <Routes>    
        <Route path="/login" element={<Login />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/home" element={<Home />} /> 
        <Route path="/registration" element={<Registration />} />   
        <Route element={<ProtectedRoute />}>
        <Route path="/products" element={<Allproducts />} />
        </Route>
 
        {/* <Route exact path="/login" >
          <Login />
          </Route>
        
        <Route exact path="/registration" >
        <Registration/>
          </Route>
       
        </Routes> */}
        </Routes>
        </Router>
        
       
    </>
  );
}

export default App;
