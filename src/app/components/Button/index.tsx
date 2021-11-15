import React from "react";
import styled, { css } from "styled-components";

export interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
  variant?: "primary" | "secondary";
}

const Button = ({ onClick, label, variant = "primary" }: ButtonProps) => {
  return (
    <StyledButton
      data-testid={"button"}
      variant={variant}
      type="button"
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};

export default Button;

const primaryVariant = css`
  background-color: ${(p) => p.theme.background};
  border-color: ${(p) => p.theme.primary};
  color: ${(p) => p.theme.primary};

  &:hover {
    background-color: ${(p) => p.theme.primary};
    color: ${(p) => p.theme.background};
  }
`;

const secondaryVariant = css`
  background-color: ${(p) => p.theme.secondary};
  border-color: ${(p) => p.theme.secondary};
  color: ${(p) => p.theme.background};

  &:hover {
    background-color: ${(p) => p.theme.background};
    color: ${(p) => p.theme.secondary};
  }
`;

const StyledButton = styled.button<{ variant?: ButtonProps["variant"] }>`
  ${({ variant }) => (variant === "primary" ? primaryVariant : "")}
  ${({ variant }) => (variant === "secondary" ? secondaryVariant : "")}

  border-width: 2px;
  border-style: solid;
  border-radius: 1.375rem;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 800;
  padding: 0.25rem 1.5rem;
  text-transform: uppercase;
`;
