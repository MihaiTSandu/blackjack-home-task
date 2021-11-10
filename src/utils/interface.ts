export interface ApiError {
    statusCode: number;
    error: string;
    message: string;
}

export interface Card {
    rank: string;
    suite: string;
}

export interface SitResponse {
    sessionId: string;
    availableBetOptions: Array<number>;
}

export interface DealResponse {
    dealerCards: Array<Card>;
    playerCards: Array<Card>;
    roundEnded: boolean;
    winAmount: number;
    currentBalance: number;
}

export interface TurnResponse {
    playerCard?: Card;
    dealerCards: Array<Card>;
    roundEnded: boolean;
    winAmount: number;
    currentBalance: number;
}

export interface StandResponse {
    roundsPlayed: number;
    winAmount: number;
}