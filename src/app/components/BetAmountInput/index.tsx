import React from "react";
import styled from "styled-components";

function BetAmountInput(props: any) {
  return (
    <>
      <StyledInput
        placeholder="Bet amount (10-1000)"
        type="number"
        max="1000"
        min="10"
        value={props.value}
        onInput={props.onInput}
      />
      <StyledInputButton onClick={props.onClick} type="button">
        SIT
      </StyledInputButton>
      {props.availableBetOptions?.forEach((element: string) => {
        <span>{element}</span>;
      })}
    </>
  );
}

export default BetAmountInput;

const StyledInput = styled.input`
  background-color: black;
  border-radius: 3rem;
  color: gray;
  font-size: 20pt;
  padding: 1rem 1rem 1rem 1rem;

  :focus {
    outline: none;
  }
`;

const StyledInputButton = styled.button`
  background-color: #00ff00;
  border-radius: 3rem;
  font-size: 20pt;
  font-weight: 800;
  margin-left: 1rem;
  padding: 1rem 1rem 1rem 1rem;
`;
