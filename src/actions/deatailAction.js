//---- importing -----

import axios from "axios";
import { gameDetailsURL, screenShortURL } from "../api";

export const loadDatail = (id) => async (dispach) => {
  const detailData = await axios.get(gameDetailsURL(id));
  const screenShot = await axios.get(screenShortURL(id));
  dispach({
    type: "DATA_LOADED",
  });

  dispach({
    type: "GET_DEATAIL",
    payload: {
      game: detailData.data,
      screen: screenShot.data.results,
    },
  });
};
