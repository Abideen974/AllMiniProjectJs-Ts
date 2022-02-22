import "./Style.css"
import React, { useState } from 'react';
import {TextField,Box,Paper,FormControl,InputLabel,Input,FormHelperText,Button} from '@material-ui/core'


function Changbackground() {
const [color, setColor] = useState<string>("");
  

  const onTextChange = (e: any) => setColor(e.target.value);
  const handleSubmit = () => {
    console.log(color);
    // let c = style={{backgroundColor:'red'}};
    let col = color 
    console.log(col)
    setColor(col)
  }
  const handleReset = () => setColor("");
  return <div>
      <>
      <div className="color">
          <Paper>
                <h2>Changing the background color</h2>

                     <TextField
                          onChange={onTextChange}
                          value={color}
                          label={"Enter Color"} //optional
                          />

                      <Button variant="outlined"  onClick={handleSubmit}>Submit</Button>
                      <Button variant="outlined"  onClick={handleReset}>Reset</Button>
                          
           </Paper>
      </div>
      <div className="box">
      <Box
       style={{backgroundColor:color}}
      // style={`${setColor({backgroundColor=${col})}`}

          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            width: 300,
            height: 300,
            border:"2px solid gray",
            alignItems:"center",
            justifyContent:"center",
           }}
      />
      </div>
      
    
      </>
  </div> 
}

export default Changbackground;
