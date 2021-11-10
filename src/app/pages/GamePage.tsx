import React, { useState } from "react";
import CardVisual from "react-free-playing-cards";
import styled, { css } from "styled-components";
import { deal, sit, stand, turn, TurnAction } from "../../utils/api";
import { Card } from "../../utils/interface";
import BetAmountInput from "../components/BetAmountInput";
import Button from "../components/Button";

const translations = {
  title: "Blackjack",
  sitRequirement: "You must first sit at a table!",
  betRange: "Must place a bet between 10 and 1000",
};

export default function GamePage() {
  const [balance, setBalance] = useState<number>();
  const [availableBetOptions, setAvailableBetOptions] = useState<Array<number>>(
    []
  );
  const [sessionId, setSessionId] = useState("");
  const [betAmount, setBetAmount] = useState<number>();
  const [playerCards, setPlayerCards] = useState<Array<Card>>([]);
  const [dealerCards, setDealerCards] = useState<Array<Card>>([]);
  const [roundEnded, setRoundEnded] = useState(false);
  const [winAmount, setWinAmount] = useState<number>();
  const [currentBalance, setCurrentBalance] = useState<number>();

  const sitButtonClick = async () => {
    if (balance === 0 || balance! < 10 || balance! > 1000) {
      alert(translations.betRange);
    } else {
      try {
        const { availableBetOptions, sessionId } = await sit(balance!);
        setSessionId(sessionId);
        setAvailableBetOptions(availableBetOptions);
        setBetAmount(betAmount);
      } catch (error) {
        alert(error);
      }
    }
  };

  const standButtonClick = async () => {
    if (sessionId) {
      await stand(sessionId);
    } else {
      alert(translations.sitRequirement);
    }
  };

  const dealButtonClick = async () => {
    if (sessionId) {
      try {
        const {
          playerCards: player,
          dealerCards: dealer,
          roundEnded,
        } = await deal(betAmount || 0, sessionId);
        setDealerCards([...dealerCards, ...dealer]);
        setPlayerCards([...playerCards, ...player]);
        setRoundEnded(roundEnded);
      } catch (error) {
        alert(error);
      }
    } else {
      alert(translations.sitRequirement);
    }
  };

  const turnButtonClick = async (action: TurnAction) => {
    if (sessionId) {
      try {
        if (action === "hit") {
          const { playerCard: player, roundEnded } = await turn(
            action,
            sessionId
          );
          setPlayerCards([...playerCards!, player!]);
          setRoundEnded(roundEnded);
          setWinAmount(winAmount);
          setCurrentBalance(currentBalance);
        } else {
          const {
            dealerCards: dealer,
            roundEnded,
            winAmount,
            currentBalance,
          } = await turn(action, sessionId);
          setDealerCards([...dealerCards, ...dealer]);
          setRoundEnded(roundEnded);
          setWinAmount(winAmount);
          setCurrentBalance(currentBalance);
        }
      } catch (error) {
        alert(error);
      }
    } else {
      alert(translations.sitRequirement);
    }
  };

  return (
    <Container>
      <Header>{translations.title}</Header>

      <BetAmountInput
        value={balance}
        onAmountChange={(amount) => setBalance(amount)}
        onClick={sitButtonClick}
      />

      <Actions>
        <Button variant="secondary" onClick={dealButtonClick} label="Deal" />
        <Button
          variant="secondary"
          onClick={() => {
            turnButtonClick("hit");
          }}
          label="Hit"
        />
        <Button
          variant="secondary"
          onClick={() => {
            turnButtonClick("stay");
          }}
          label="Stay"
        />
        <Button variant="secondary" onClick={standButtonClick} label="Stand" />
      </Actions>

      <Options>
        {availableBetOptions.map((option) => (
          <OptionButton
            key={option}
            selected={option === betAmount}
            onClick={() => setBetAmount(option)}
          >
            {option}
          </OptionButton>
        ))}
      </Options>

      <Table>
        {dealerCards.length > 0 && <h2>Dealer</h2>}
        <Cards>
          {dealerCards.map((card) => (
            <CardVisual
              key={`${card.rank} ${card.suite}`}
              card={`${card.rank}${card.suite[0].toLowerCase()}`}
              height="128px"
            />
          ))}
        </Cards>

        {playerCards.length > 0 && <h2>Player</h2>}
        <Cards>
          {playerCards.map((card) => (
            <CardVisual
              key={`${card.rank} ${card.suite}`}
              card={`${card.rank}${card.suite[0].toLowerCase()}`}
              height="128px"
            />
          ))}
        </Cards>
      </Table>
    </Container>
  );
}

const Table = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Cards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1.25rem;
`;

const optionButtonSelected = css`
  background-color: ${(p) => p.theme.background};
  color: ${(p) => p.theme.primary};
`;

const OptionButton = styled.button<{ selected?: boolean }>`
  background-color: ${(p) => p.theme.primary};
  border-color: ${(p) => p.theme.primary};
  color: ${(p) => p.theme.background};

  ${(p) => (p.selected ? optionButtonSelected : "")}

  border-radius: 100%;
  cursor: pointer;
  border-width: 2px;
  border-style: solid;
  font-size: 1.5rem;
  width: 3.75rem;
  height: 3.75rem;
  text-align: center;

  &:hover {
    ${optionButtonSelected}
  }
`;

const Options = styled.div`
  margin-top: 2.5rem;

  ${OptionButton} {
    margin-right: 0.5rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 2.5rem;
`;

const Actions = styled.div`
  margin-top: 2.5rem;

  * {
    margin-right: 0.5rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const Header = styled.h1`
  color: ${(p) => p.theme.primary};
`;
