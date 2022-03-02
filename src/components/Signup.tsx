import React,{useState,useEffect} from 'react'
import TextField  from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Signup() {
  useEffect(()=>{
      if(localStorage.getItem('accessToken')){
        history.push('/Dashborad')
      }
  },[])
 

    const [password , setPassword] = useState<any>("");
    const [text, setText] = useState<any>("");
    const [id, setId] = useState<any>("");
    const [phone, setPhone] = useState<any>("");
    const history= useHistory()

    async function signup (){
        const sigObj = {
                name: text ,
                password,
                type_id: id,
                phone
            };
        
        // console.warn(sigObj)
       let result=await fetch('https://laborappbackend.herokuapp.com/v1/api/register-user',{
            method :'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(sigObj)

        });
        result = await result.json();
        console.warn("Inside the result", result);
        
     
        if(!phone || !text || !id || !password){
          console.warn("inside the khali")
          toast.error("plz fill out the form",{
            position:"bottom-center"
            
          })
          
        }else{
          localStorage.setItem("accessToken",JSON.stringify(result));
          console.warn("inside the fillllll")
          toast.success("Successfully Signup Now you can login",{
            position:"bottom-center"
  
          })
        }
        // console.log(result.accessToken)
        // history.push("/")
      }
        // .then((result) =>{
        //     // console.warn('result',result)
        //     result.json().then((res)=>{
        //         console.warn('inside' ,res)
        //     })
        // })
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
                        helperText="Please enter your name"
                        type="text"
                        value={text}
                        onChange={(e)=>setText(e.target.value)}
                        label="Name" variant="filled" color="success" focused
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
                        <br />

                        <TextField
                      
                      id="outlined-required"
                      helperText="Please enter your Id"
                      type="text"
                      value={id}
                      onChange={(e)=>setId(e.target.value)}
                      label="Id" variant="filled" color="success" focused
                      size="medium"
                      fullWidth 
                      />
                        <br />

                          <TextField
                      
                      id="outlined-required"
                      helperText="Please enter your number"
                      type="text"
                      value={phone}
                      onChange={(e)=>setPhone(e.target.value)}
                      label="Number" variant="filled" color="success" focused
                      size="medium"
                      fullWidth 
                      />

                      </Box>
                      <Button onClick={signup} variant="contained">Signup</Button>
                      <ToastContainer />
    </div>
  )
}

export default Signup