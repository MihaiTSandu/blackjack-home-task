import React from "react";
import styled from "styled-components";

function BetAmountInput() {
  return (
    <>
      <StyledInput
        placeholder="Bet amount (10-1000)"
        type="number"
        max="1000"
        min="10"
      />
      <button type="button">SIT</button>
    </>
  );
}

export default BetAmountInput;

const StyledInput = styled.input`
  background-color: black;
  color: gray;
  font-size: 20pt;
  padding: 1rem 1rem 1rem 1rem;
`;
