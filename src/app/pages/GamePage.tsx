import React, { useState } from "react";
import styled from "styled-components";
import dealApiCall from "../../utils/dealApiCall";
import sitApiCall from "../../utils/sitApiCall";
import standApiCall from "../../utils/standApiCall";
import turnApiCall from "../../utils/turnApiCall";
import BetAmountInput from "../components/BetAmountInput";
import DisplayCards from "../components/DisplayCards";
import GameButton from "../components/GameButton";

interface Card {
  rank: string;
  suite: string;
}

const GamePage = () => {
  const [availableMoney, setavailableMoney] = useState("");
  const [availableBetOptions, setAvailableBetOptions] = useState<Array<number>>(
    [1, 2, 3, 4]
  );
  const [sessionId, setSessionId] = useState("");
  const [betAmount, setBetAmount] = useState("");
  const [playerCards, setPlayerCards] = useState<Array<Card>>();
  const [dealerCards, setDealerCards] = useState<Array<Card>>();

  const sitButtonClick = async () => {
    if (availableMoney === "") {
      alert("Must place a bet between 10 and 1000");
    } else if (parseInt(availableMoney, 10) < parseInt("10", 10)) {
      alert("Must place a bet between 10 and 1000");
    } else if (parseInt(availableMoney, 10) > parseInt("1000", 10)) {
      alert("Must place a bet between 10 and 1000");
    } else {
      const { availableBetOptions, sessionId } = await sitApiCall({
        balance: availableMoney,
      });
      setSessionId(sessionId);
      setAvailableBetOptions(availableBetOptions);
      setBetAmount("10");
    }
  };

  const standButtonClick = async () => {
    if (sessionId) {
      await standApiCall({ sessionId: sessionId });
    } else {
      alert("You must first sit at a table!");
    }
  };

  const dealButtonClick = async () => {
    if (sessionId) {
      const { playerCard, dealerCard } = await dealApiCall({
        bet: betAmount,
        sessionId: sessionId,
      });
      setDealerCards(dealerCard);
      setPlayerCards(playerCard);
    } else {
      alert("You must first sit at a table!");
    }
  };

  const turnButtonClick = async (action: string) => {
    if (sessionId) {
      turnApiCall({ action: action, sessionId: sessionId });
    } else {
      alert("You must first sit at a table!");
    }
  };

  return (
    <>
      <BetAmountInput
        value={availableMoney}
        onInput={(e: any) => {
          setavailableMoney(e.target.value);
        }}
        onClick={sitButtonClick}
      />
      <div>
        {availableBetOptions.map((option) => (
          <Option key={option}>{option}</Option>
        ))}
      </div>

      <DisplayCards></DisplayCards>
      <div>
        <GameButton onClick={dealButtonClick} name="Deal" />
        <GameButton
          onClick={() => {
            turnButtonClick("hit");
          }}
          name="Hit"
        />
        <GameButton
          onClick={() => {
            turnButtonClick("stay");
          }}
          name="Stay"
        />
        <GameButton onClick={standButtonClick} name="Stand" />
      </div>
    </>
  );
};

export default GamePage;

const Option = styled.button`
  background-color: red;
  color: blue;
`;
