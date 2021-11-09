import React from "react";
import styled from "styled-components";

const GameButton = (props: any) => {
  return (
    <>
      <StyledButton onClick={props.onClick}>{props.name}</StyledButton>
    </>
  );
};

export default GameButton;

const StyledButton = styled.button`
  background-color: #00ff00;
  border-radius: 3rem;
  font-size: 20pt;
  font-weight: 800;
  margin-left: 1rem;
  padding: 1rem 1rem 1rem 1rem;
`;
