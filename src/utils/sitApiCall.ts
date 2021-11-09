import encodeCallBody from "./encodeCallBody";

export interface SitResponse {
  availableBetOptions: Array<number>;
  sessionId: string;
}

const sitApiCall = async (details: any): Promise<SitResponse> => {
  const requestBody = encodeCallBody(details);

  const response = await fetch("https://blackjack.fuzz.me.uk/sit", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: requestBody,
  });

  const data = await response.json();

  return data;
};

export default sitApiCall;
