const initialState = { game: { platforms: [] }, screen: [], isData: false };

function detailReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DEATAIL":
      return {
        ...state,
        game: action.payload.game,
        screen: action.payload.screen,
      };
    case "DATA_LOADED":
      return {
        ...state,
        isData: !state.isData,
      };
    default:
      return { ...state };
  }
}

export default detailReducer;
