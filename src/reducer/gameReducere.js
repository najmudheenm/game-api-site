const inintState = {
  popular: [],
  newGame: [],
  upcoming: [],
};

const gameReducer = (state = inintState, aciton) => {
  switch (aciton.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: aciton.payload.popular,
        newGame: aciton.payload.newGame,
        upcoming: aciton.payload.upcoming,
      };
    default:
      return { ...state };
  }
};

//---------------------------------------

export default gameReducer;
