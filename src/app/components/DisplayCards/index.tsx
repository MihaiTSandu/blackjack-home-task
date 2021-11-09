import React from "react";

const DisplayCards = (props: any) => {
  return (
    <div>
      <h1>{props.dealerCards}</h1>
      <br></br>
      <h2>{props.playerCards}</h2>
    </div>
  );
};

export default DisplayCards;
