import { DealResponse, SitResponse, StandResponse, TurnResponse } from './interface';

export const baseUrl = "https://blackjack.fuzz.me.uk";

export const sit = async (balance: number): Promise<SitResponse> => {
    const requestUrl = `${baseUrl}/sit`;

    const response = await fetch(requestUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `balance=${balance}`
    });
    const responseJson = await response.json();
    if (response.ok) {
        return responseJson;
    } else {
        throw Error(responseJson.validation.body.messsage);
    }
};

export const deal = async (bet: number,
    sessionId: string): Promise<DealResponse> => {
    const requestUrl = `${baseUrl}/deal`;

    const response = await fetch(requestUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `bet=${bet}&sessionId=${sessionId}`,
    });
    const responseJson = await response.json();
    if (response.ok) {
        return responseJson;
    } else {
        throw Error(responseJson.validation.body.message);
    }
};

export type TurnAction = 'stay' | 'hit';

export const turn = async (
    action: TurnAction,
    sessionId: string
): Promise<TurnResponse> => {
    const requestUrl = `${baseUrl}/turn`;
    
    const response = await fetch(requestUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `action=${action}&sessionId=${sessionId}`
    });
    const responseJson = await response.json();
    if (response.ok) {
        return responseJson;
    } else {
        throw Error(responseJson.validation.body.message);
    }
}

export const stand = async (sessionId: string): Promise<StandResponse> => {
    const requestUrl = `${baseUrl}/stand`;

    const response = await fetch(requestUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `sessionId=${sessionId}`,
    });
    const responseJson = await response.json();
    if (response.ok) {
        return responseJson;
    } else {
        throw Error(responseJson.validation.body.message);
    }
}