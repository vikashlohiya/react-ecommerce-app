import React from 'react';
import { Route, redirect,useNavigate,Navigate, Outlet } from 'react-router-dom';


function ProtectedRoute({ component: Component, ...rest }) {
    const isAuthenticated = localStorage.getItem('userid') >0;
    const navigate = useNavigate();

    return isAuthenticated>0 ? <Outlet /> : <Navigate to="/login" />;


}
function isUserLoggedIn() {
    const isAuthenticated = localStorage.getItem('userid') >0;
     if(isAuthenticated>0){
        return true;
     }
    else{
        return false;
    }

}   
export default ProtectedRoute;
export { isUserLoggedIn };