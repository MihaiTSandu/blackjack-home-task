# Take home test - Blackjack

## Context

At 888 Casino we want to launch a new game, an ol' time favorite amongst our users: Blackjack. A team
of highly skilled backend developers has created the backend for it, in the form of a REST API. We now
need the frontend application to be able to launch this game for our eager users.

## Task

Your task is to create the UI for the game. It should be in the form of a webpage and should
communicate with the backend per the protocol described later in this document. The focus should not
be on the graphics (simple text display is enough), but rather on the functionality and communication
with the backend API.

## UI

We want to support the following actions:

- Sit
  - this represents the action of sitting at a new table
  - during this action, we will also set the player’s available money
    - we expect the sum to be an integer between 10 and 1000 (representing USD)
  - we will receive information from the API regarding the available options of betting
- Deal
  - this is when a new round is started
  - it should include a bet value
    - we should mind the balance and ensure only an accepted bet value is used
  - the player cannot stand if he is in the middle of a round
  - if the round has been completed, we want to show the results and update the player’s
    balance
- Turn
  - this represents a turn in the game
  - we can use one of the following actions:
    - hit – we ask for one more card
    - stay – we don’t want any more cards and expect the result
  - the response from the API will contain information on whether the round has been
    completed
  - if the round has been completed, we want to show the results and update the player’s
    balance
- Stand
  - when the player wants to end his session or he doesn&#39;t have enough money left in his
    balance to start a new round, he will stand
  - the player cannot stand if he is in the middle of a round
  - on this action, we want to display the number of rounds he played and his earnings
    balance

The user should always see his balance and he should have specific buttons for each available action.
The UI should be updated with relevant information on each action completion.

## API documentation

You can hit the API at <https://blackjack.fuzz.me.uk/>

### POST /sit

_Request_

        {

        "balance": int

        }

_Response_

        {
            "sessionId": guid,
            "availableBetOptions": array_of_int
        }

### POST /deal

_Request_

        {
            "bet": int,
            "sessionId": guid
        }

_Response_

        {
            "dealerCards": array_of_cards,
            "playerCards": array_of_cards,
            "roundEnded": bool,
            "winAmount": int,
            "currentBalance": int
        }

### POST /turn

_Request_

        {
            "action": string,
            "sessionId": guid
        }

_Response_

        {
            "playerCard": card, // null if it is a "stay" action
            "dealerCards": array_of_cards,
            "roundEnded": bool,
            "winAmount": int,
            "currentBalance": int
        }

### POST /stand

_Request_

        {
            "sessionId": guid
        }

_Response_

        {
            "roundsPlayed": int,
            "winAmount": int
        }

The cards' structure is as follows:

        {
            "rank": string,
            "suite": string
        }

where rank will go from 2 to A and the suite will be one of Clubs, Diamonds, Hearts, Spades.

All the above API calls can return an error field, when something is invalid, in the form of:

        {
            "statusCode": int,
            "error": string,
            "message": string
        }

## Requirements

We expect you to write the code to be production-ready, readable, extendable, and testable (preferably
well-tested). We would like you to use ES6+ and we leave it to your preference whether you want to use
any libraries, frameworks, or transpiling tools. Oh, by the way, TypeScript is more than welcome!
