import React from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  return (
    <>
      <div>Signup Page</div>
      <button onClick={() => navigate("/login")}>Go to Login</button>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </>
  );
}

export default Signup;
