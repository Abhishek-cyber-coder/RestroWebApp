import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div>Login Page</div>
      <button onClick={() => navigate("/signup")}>Go to Signup</button>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </>
  );
}

export default Login;
