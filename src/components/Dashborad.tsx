import React,{useState,useEffect} from 'react'
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Alrt from './Alrt'
import { useHistory } from 'react-router-dom';
import { clear } from 'console';

function Dashborad() {
  let history = useHistory()
  useEffect(()=>{
    if(!localStorage.getItem('user-info')){
      history.push('/')
    }
    
},[])
const Logout = () =>{
  console.warn("logout was invoked")
  localStorage.clear()
  history.push('/')
}
 
  return (
    <div>
          {/* {
          (localStorage.getItem('user-info'))?
            
            alert("Loged in Successfully")
          
          :
            alert("Error")
          

        
      } */}
      {/* {<Alrt alrt={alrt}/>} */}
      <h2>You are successfully logedIn Welcome to Dashboard</h2>
      <button onClick={Logout}>Logout</button>
      </div>
  )
}

export default Dashborad