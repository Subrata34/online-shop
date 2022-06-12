import { TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <h1>please login </h1>
        <form action="">
        <TextField 
        id="standard-basic" 
        label="Name" 
        variant="standard"
        type="name" 
      />

        </form>
    </div>
  )
}

export default Login