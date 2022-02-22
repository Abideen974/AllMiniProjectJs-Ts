import React from 'react'
import {Button} from '@mui/material';

function Helloworld() {
  const myFunc = () =>{
    console.log("Hello Console")
  }
  return (
    <div>
        <Button onClick={myFunc}>Click here</Button>
    </div>
  )
}

export default Helloworld