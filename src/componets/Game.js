import React from "react";
//--------- redux ----------

import { useDispatch } from "react-redux";
import { loadDatail } from "../actions/deatailAction";

//---------- Styling and animation -------------//

import styled from "styled-components";
import { motion } from "framer-motion";

function Game({ name, released, id, image }) {
  //---- load deatails ----
  const dispatch = useDispatch();
  const loadDeatailsHandler = () => {
    dispatch(loadDatail(id));
  };
  return (
    <StyledGame onClick={loadDeatailsHandler}>
      <h3>{name}</h3>
      <p>{released}</p>

      <img loading="lazy" src={image} alt={name} />
    </StyledGame>
  );
}
const StyledGame = styled(motion.div)`
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  height: 40 vh;
  text-align: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export default Game;
