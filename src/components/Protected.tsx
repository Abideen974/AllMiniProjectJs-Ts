import React,{useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

function Protected(props:any) {
  let history = useHistory()
    let Cmp = props.Cmp;
    let Sign = props.Sign;
    // if(localStorage.getItem('user-info')){
    //   history.push("./")
    // }

  return (
    <div>
        <Cmp />,
        {/* <Sign /> */}
    </div>
  )
}

export default Protected