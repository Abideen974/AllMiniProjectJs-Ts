import React,{useState,useEffect} from 'react'
import TextField  from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useHistory } from "react-router-dom";

function Log() {

  useEffect(()=>{
    if(localStorage.getItem('accessToken')){
      history.push('./Dashborad')
    }
   
},[])

    const [phone, setPhone] = useState<any>();
    const [password , setPassword] = useState<any>();
    const [users, setUsers] = useState<any>([])
    const [response, setResponse] =useState<any>();

    const [alrt , setAlrt] =useState<any>(null);

    let history = useHistory();

    async function login(){
      
  //     const data = 
  // {
  //         phone : "phone",
  //         password : "password"
  //       }
      
      // console.log(phone, password)
    let result = await fetch('https://laborappbackend.herokuapp.com/v1/api/login-user',{
        method: 'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({phone, password})
      })
     let data= await result.json();
      console.log(data);
      if(data.accessToken){
        toast.success("Login Successfull!",{
          position:"bottom-center"

        });
        setTimeout(() => {
          history.push('/Dashborad');
          
        }, 6000);
      }
      else{
        toast.error("Please fil out the correct information!",{
          position:"bottom-center"

        });
      }
        
      
      localStorage.setItem('accessToken', JSON.stringify(result))
      
      }
  //  let emal = "Abideen@gmail.com";
  //  let pasword = "abideen"

//     const login = () =>{
      
//         fetch('https://laborappbackend.herokuapp.com/v1/api/login-user',{
//           method :'POST',
//           headers: {
//             'Accept':'application/json',
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ phone, password  }
//           )
//         }).then((result)=>{
//           return result.json()
//         })
//         .then((response)=>{
//           if(response.accessToken){
            
//             console.warn("inside response" ,response)
//             setUsers(history.push("./Dashborad"));
           
//           }

         
//         })
//         .catch((error)=>{
//           setUsers(history.push("./Error"));
//           console.warn("inside ree" ,error)
//         });
       

// }




  
        
      
  return (

    <div>
   
        <Box
                        component="form"
                        sx={{
                          '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                      >
        
            
            
                        <TextField
                      
                        id="outlined-required"
                        helperText="Please enter your email"
                        type="text"
                        value={phone}
                        onChange={(e)=>setPhone(e.target.value)}
                        label="phone" variant="filled" color="success" focused
                        size="medium"
                        fullWidth 
                        />
                        <br />
                        <TextField
                        id="outlined-password-input"
                        helperText="Please enter your password"
                        type="password"
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                        autoComplete="current-password"
                        label="Password" variant="filled" color="success" focused
                        /> 

                      </Box>
                      <Button variant='contained' onClick={login}>Login</Button>
                      <ToastContainer />

    </div>
  )
}

export default Log


// // https://laborappbackend.herokuapp.com/v1/api/login-user

// // https://laborappbackend.herokuapp.com/v1/api/register-user


// // Signup
// // data:{name,password,type_id,phone}

// // SignIn
// //  data: { phone, password },

//  GET https://data.fixer.io/api/latest