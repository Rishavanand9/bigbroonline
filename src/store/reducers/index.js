import { combineReducers } from "redux";

const initialState = {
  games: [
    {
      gameid: "1",
      gameName: "KALYAN",
      activeBets: [
        { slNo: "1", number: "2", amount: "33", details: "-NA-" },
        { slNo: "1", number: "2", amount: "3", details: "-NA-" },
      ],
      isLive: true,
      lockTimeInSeconds: 380,
      gameTypes: ["ones", "tens", "haraf", "family pair"],
    },
    {
      gameid: "2",
      gameName: "GOLDSTAR",
      activeBets: [],
      isLive: true,
      lockTimeInSeconds: 280,
      gameTypes: ["ones", "tens", "haraf", "family pair"],
    },
    {
      gameid: "3",
      gameName: "GOLDEN NIGHT",
      activeBets: [],
      isLive: true,
      lockTimeInSeconds: 10,
      gameTypes: ["ones", "tens", "haraf", "family pair"],
    },
    {
      gameid: "4",
      gameName: "DESAWAR",
      activeBets: [],
      isLive: true,
      lockTimeInSeconds: 30,
      gameTypes: ["ones", "tens", "haraf", "family pair"],
    },
    { gameid: "5", gameName: "BOMBAY EXP", activeBets: [] },
    { gameid: "6", gameName: "GOLDEN", activeBets: [] },
    { gameid: "7", gameName: "GOOD MORNING", activeBets: [] },
  ],
};

const gamesReducer = (state = initialState.games, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  gamesReducer,
});

export default rootReducer;
