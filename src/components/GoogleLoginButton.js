import React from "react";
import styled from "styled-components";
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider, auth } from "../Config";

const Button = styled.button`
  padding: 10px 20px;
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
`;

const GoogleLoginButton = () => {
  async function onButtonClick() {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      console.log("Successfully logged in with Google");
    } catch (error) {
      console.error("Google login error:", error);
    }
  }

  return (
    <div>
      <Button onClick={onButtonClick}>Login with Google</Button>
    </div>
  );
};

export default GoogleLoginButton;
