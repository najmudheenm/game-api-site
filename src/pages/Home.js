import { useEffect } from "react";

import { useLocation } from "react-router-dom";
//------------- redux -----------------//

import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import { loadDatail } from "../actions/deatailAction";

//--------- components ----------------//

import Game from "../componets/Game";
import GameDeatail from "../componets/GameDeatail";

//-------- styling and animation -------------//

import styled from "styled-components";
import { motion } from "framer-motion";

function Home() {
  const path = useLocation().pathname.split("/")[1];
  console.log(path);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
    if (path) {
      dispatch(loadDatail(path));
    }
  }, [dispatch, path]);
  const { popular, newGame, upcoming, game } = useSelector(
    (state) => state.games
  );

  return (
    <GameList>
      {path && <GameDeatail />}
      <h2>Upcoming Games</h2>
      <Games>
        {Object.keys(upcoming).length !== 0 ? (
          upcoming.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))
        ) : (
          <h3>Loding.....</h3>
        )}
      </Games>
      <h2>Popular Games</h2>
      <Games>
        {Object.keys(popular).length !== 0 ? (
          popular.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))
        ) : (
          <h3>Loding.....</h3>
        )}
      </Games>
      <h2>New Games</h2>
      <Games>
        {Object.keys(newGame).length !== 0 ? (
          newGame.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))
        ) : (
          <h3>Loding.....</h3>
        )}
      </Games>
    </GameList>
  );
}

const GameList = styled(motion.div)`
  h2 {
    padding: 3rem 0rem;
    text-align: center;
  }
`;
const Games = styled(motion.div)`
  margin: auto;

  max-width: 95vw;
  display: grid;
  min-height: 80vh;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
`;

export default Home;
