import encodeCallBody from "./encodeCallBody";

const dealApiCall = async (details: any) => {

    const requestBody = encodeCallBody(details);

        const response = await fetch("https://blackjack.fuzz.me.uk/deal", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: requestBody,
        });
  
  const data = await response.json();
    
    return data;
}

export default dealApiCall;