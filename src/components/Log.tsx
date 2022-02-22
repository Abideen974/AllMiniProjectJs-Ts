import React,{useState,useEffect} from 'react'
import TextField  from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { useHistory } from "react-router-dom";

function Log() {

//   useEffect(()=>{
//     if(localStorage.getItem('user-info')){
//       history.push('./Dashborad')
//     }
//     // else{
//     //   history.push('Signup')
//     // }
// },[])

  const [phone, setPhone] = useState<any>();
    const [password , setPassword] = useState<any>();
    const [users, setUsers] = useState<any>([])
    const [response, setResponse] =useState<any>(true);

    const [alrt , setAlrt] =useState<any>(null);

    let history = useHistory();
  //  let emal = "Abideen@gmail.com";
  //  let pasword = "abideen"
    const login = () =>{
      
        fetch('https://laborappbackend.herokuapp.com/v1/api/login-user',{
          method :'POST',
          headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ phone, password  }
          )
        }).then((result)=>{
          return result.json()
        })
        .then((response)=>{
          if(response.accessToken){
            
            console.warn("inside response" ,response)
            setUsers(history.push("./Dashborad"));
           
          }
          else{
          setUsers(history.push("./Error"));

          }
         
        })
        .catch((error)=>{
          setUsers(history.push("./Error"));
          // alert("Error")
          console.warn("inside ree" ,error)
        })
        // console.log(e) 

        

}



    
      //   if(email === emal && password === pasword){
      //       console.log("login Successfully");
      //       history.push("/Dashborad");
      //   }
      // else if (email ==="" && password ===""){
      //   alert("Please fil out the form")
      //   console.log("empty")
      // }

      // else if(email !== emal && password  !== pasword){
      //     history.push("/Error")
      //   }
      //   else {
      //     history.push("/Login");
      //   }
      // useEffect(()=>{
        
      // },[])
        
      
  return (

    <div>
      {/* {
          alert("Something went wrong")

      } */}
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