import React from 'react'
import './Emailverify.css'
import { Button } from '@mui/material';
import { usersignOut } from '../features/Userslice';
import { useDispatch } from 'react-redux';

 function Emailverify() {
    const dispatch=useDispatch()
  return (
    <div className="emailverify_container">
        <div className="emailverify_content">

        <h1>A Email has been sent to your mail!</h1>
        <span>verify to proceed </span>
        </div>
        <div className="emailverify_button">
            <Button variant="contained" component="span" onClick={()=>dispatch(usersignOut())}>Sign In</Button>
        </div>
    </div>
  )
}
export default Emailverify;
