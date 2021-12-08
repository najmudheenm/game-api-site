const initialState = { game: {}, screen: [] };

function detailReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DEATAIL":
      return {
        ...state,
        game: action.payload.game,
        screen: action.payload.screen,
      };
    case "CLEAR_DEATAIL":
      return {
        ...state,
        game: {},
        screen: {},
      };
    default:
      return { ...state };
  }
}

export default detailReducer;
