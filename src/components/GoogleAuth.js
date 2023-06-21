import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 10px 20px;
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
`;

const GoogleAuth = () => {
  return (
    <div>
      <Button>Login with Google</Button>
    </div>
  );
};

export default GoogleAuth;
