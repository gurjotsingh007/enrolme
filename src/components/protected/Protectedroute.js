import {React,useEffect} from 'react'
import {Link, Navigate} from "react-router-dom"
import NewDashboard from '../dashboard/NewDashboard';

function Protectedroute(props) {
    const {Component} = props
    let token = localStorage.getItem('token');
    if(!token){
        return <Navigate to="/signin" />
    }
    else if(Component === NewDashboard){
        return <NewDashboard />
    }
    else{
        return <NewDashboard Component={Component} />
        // return <Component />
    }
}

export default Protectedroute