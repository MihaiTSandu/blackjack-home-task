import React, { useState } from "react";
import dealApiCall from "../../utils/dealApiCall";
import sitApiCall from "../../utils/sitApiCall";
import standApiCall from "../../utils/standApiCall";
import turnApiCall from "../../utils/turnApiCall";
import BetAmountInput from "../components/BetAmountInput";
import DisplayCards from "../components/DisplayCards";
import GameButton from "../components/GameButton";

function GamePage() {
  const [availableMoney, setavailableMoney] = useState("");
  const [availableBetOptions, setAvailableBetOptions] = useState([]);
  const [sessionId, setSessionId] = useState("");
  const [betAmount, setBetAmount] = useState("");

  const sitButtonClick = async () => {
    if (availableMoney === "") {
      alert("Must place a bet between 10 and 1000");
    } else if (parseInt(availableMoney, 10) < parseInt("10", 10)) {
      alert("Must place a bet between 10 and 1000");
    } else if (parseInt(availableMoney, 10) > parseInt("1000", 10)) {
      alert("Must place a bet between 10 and 1000");
    } else {
      sitApiCall(
        { balance: availableMoney },
        setSessionId,
        setAvailableBetOptions
      );
    }
  };

  const standButtonClick = async () => {
    if (sessionId) {
      standApiCall({ sessionId: sessionId });
    } else {
      alert("You must first sit at a table!");
    }
  };

  const dealButtonClick = async () => {
    await setBetAmount("10");
    if (sessionId) {
      dealApiCall({ bet: betAmount, sessionId: sessionId });
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
        availableBetOptions={availableBetOptions}
      />
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
}

export default GamePage;
