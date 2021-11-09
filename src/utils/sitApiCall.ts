import encodeCallBody from "./encodeCallBody";

const sitApiCall = async (details: any, setSessionId: React.Dispatch<React.SetStateAction<string>>
  , setAvailableBetOptions: React.Dispatch<React.SetStateAction<never[]>>) => {

  const requestBody = encodeCallBody(details);

    const response = await fetch("https://blackjack.fuzz.me.uk/sit", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: requestBody,
      });
      // ?????
      const json = await response.json();
      setSessionId(json.sessionId);
      setAvailableBetOptions(json.availableBetOptions);
}

export default sitApiCall;