import React,{useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

function Protected(props:any) {
    let Cmp = props.Cmp;

  return (
    <div>
        <Cmp />
    </div>
  )
}

export default Protected