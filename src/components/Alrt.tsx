import React from 'react'
import { AlertTitle } from '@mui/material';
import Alert from '@mui/material/Alert';

function Alrt(props:any) {
  return (
    <div>
        <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
           
            <strong>{props.alrt.type}</strong>: {props.alrt.msg}

            {props.alrt}
        </Alert>
    </div>
  )
}

export default Alrt