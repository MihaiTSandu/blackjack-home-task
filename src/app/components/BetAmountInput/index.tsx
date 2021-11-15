import React from "react";
import styled from "styled-components";
import Button from "../Button";

const translations = {
  inputPlaceHolder: "Bet amount (10 -1000)",
  sit: "sit",
  parseIntError: "Could not parse bet amount input value",
};

export interface BetAmountInputProps {
  value: number | undefined;
  onAmountChange: (amount: number) => void;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const BetAmountInput = ({
  value,
  onAmountChange,
  onClick,
}: BetAmountInputProps) => {
  return (
    <Container data-testid="betAmountInput">
      <StyledInput
        data-testid="betInput"
        placeholder={translations.inputPlaceHolder}
        type="number"
        max="1000"
        min="10"
        value={value || ""}
        onInput={(event) => {
          try {
            onAmountChange(
              parseInt((event.target as HTMLInputElement).value, 10)
            );
          } catch {
            console.error(translations.parseIntError);
          }
        }}
      />
      <Button
        data-testid="button"
        variant="primary"
        onClick={onClick}
        label={translations.sit}
      />
    </Container>
  );
};

export default BetAmountInput;

const Container = styled.div`
  text-align: center;
`;

const StyledInput = styled.input`
  background-color: transparent;
  border: 0;
  border-bottom: 0.0625rem solid ${(prop) => prop.theme.border};
  border-left: 0.1875 solid ${(prop) => prop.theme.primary};
  color: ${(prop) => prop.theme.text};
  font-size: 1.25rem;
  padding: 0.75rem 1rem;
  min-width: 15rem;
  margin-right: 0.5rem;

  :focus {
    background: ${(prop) => prop.theme.backgroundFocus};
    outline: none;
  }
`;
