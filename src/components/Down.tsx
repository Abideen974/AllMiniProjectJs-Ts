
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Box,
  TableContainer,
  Paper,
  Table,
  TableHead,
 
} from '@material-ui/core';
import React,{useState} from 'react';


function Down() {
  const weekDays =[
    {
        id: 1,
        days: "Sunday"
    },
    {
        id: 2,
        days: "Monday"
    },
    {
        id: 3,
        days: "Tuesday"
    },
    {
        id: 4,
        days: "wednesday"
    },
    {
        id: 5,
        days: "Thursday"
    },
    {
        id: 6,
        days: "Friday"
    },
    {
        id: 7,
        days: "Saturday"
    }
    
]
const [users, setUsers] = useState(weekDays)
const [value, setValue] = useState("")

let SelectDays 
const handleChange = () => {
//     console.log(e.target.value)
  // setValue(e.target.value);
  }


  return <div>
    <>
      <Grid container direction="row" justifyContent="center">
        <Grid item lg={6} md={6} sm={6} xs={6}>
        <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">SelectDays</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={SelectDays}
                    label="SelectDays"
                    onChange={handleChange}
                >
                    {users?.map((row) => (
                        <MenuItem value={row.days}>{row.days}</MenuItem>
                
                     ))}
                </Select> 
        </FormControl>
        </Grid>
      </Grid>                  
      {
          <p>Your selected day is :{value}</p>
      }     
    </>
  </div>
}

export default Down;
