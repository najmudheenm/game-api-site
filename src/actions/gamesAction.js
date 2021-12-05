import axios from "axios";
import { popularGamesURL, newGamesURL, upcomingURL } from "../api";

//------------  Action creator  ----------------

export const loadGames = () => async (dispatch) => {
  // fetch AXIOS
  const popularData = await axios.get(popularGamesURL());
  const upcomingData = await axios.get(upcomingURL());
  const newGameData = await axios.get(newGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGame: newGameData.data.results,
    },
  });
};
