//------- styling  and Animation --------

import styled from "styled-components";
import { motion } from "framer-motion";

//---------- redux --------
import { useSelector, useDispatch } from "react-redux";
import { clearGameDetails } from "../actions/deatailAction";

const GameDeatail = () => {
  const { game, screen } = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  if (Object.keys(game).length !== 0) {
    return (
      <CardShadow onClick={() => dispatch(clearGameDetails())}>
        <Detail>
          <Stats>
            <div className="rating">
              <h3>{game.name}</h3>
              <p>rating{game.rating}</p>
            </div>
            <Info>
              <h3>Platforms</h3>
              <Platforms>
                {game.platforms.map((data) => (
                  <h3 key={data.platform.id}>{data.platform.name}</h3>
                ))}
              </Platforms>
            </Info>
          </Stats>
          <Media>
            <img src={game.background_image} alt={game.name} />
          </Media>
          <Description>{game.description_raw}</Description>
          <div className="gallery">
            {screen.map((data) => (
              <img src={data.image} key={data.id} alt="" />
            ))}
          </div>
        </Detail>
      </CardShadow>
    );
  }
  return "";
};
const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  & ::-webkit-scrollbar-track {
    background-color: white;
  }
`;
const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;
const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    padding: 1.5rem 0;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;
const Media = styled(motion.div)`
  margin-top: 5rem;

  img {
    width: 100%;
  }
`;
const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;
export default GameDeatail;
