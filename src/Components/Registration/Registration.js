
import { Input, TextField } from "@mui/material";
import React from "react";

const Registration = () => {
  return (
    <div>
      <h1>Registration Please</h1>
      <div>
        <form action="">
        
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          type="name"
        />
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          type="email"
        />
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          type="password"
        />
        <Input type="submit" value="Submit" />
      
        </form>
        <Button variant="contain">Google sign In</Button>
      </div>
    </div>
  );
};

export default Registration;
