import React from 'react'
import { useLocation } from 'react-router-dom'

const Dashboard = () => {
    const location = useLocation();
    
    console.log(location.state);
  return (
    <>
    <div>Dashboard</div>
    <p>Current Path: {location.pathname}</p>
    <p>Query Parameters: {location.search}</p>
    <p>Hash: {location.hash}</p>
    <p>State: {location.state ? JSON.stringify(location.state) : 'None'}</p>
    <p>Location Key: {location.key}</p>
    </>
  )
}

export default Dashboard