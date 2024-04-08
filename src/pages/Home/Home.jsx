import React from "react";
import { useNavigate } from "react-router-dom";

function home() {
  const navigate = useNavigate();
  return (
    <>
      <div>Welcome to the Home page</div>
      <button onClick={() => navigate("/login")}>Go to Login</button>
      <button onClick={() => navigate("/signup")}>Go to Signup</button>
    </>
  );
}

export default home;
