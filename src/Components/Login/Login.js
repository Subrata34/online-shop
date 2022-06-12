import { Button, TextField } from "@mui/material";
import React from "react";

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
        <input type="submit" value="Submit" />
      </form>
      <br />
      <Button variant="contained">Google Sgin In</Button>
    </div>
  );
};

export default Login;
