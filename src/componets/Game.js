import React from "react";
//--------- redux

//---------- Styling and animation -------------//

import styled from "styled-components";
import { motion } from "framer-motion";

function Game({ name, released, id, image }) {
  return (
    <StyledGame>
      <h3>{name}</h3>
      <p>{released}</p>
      <img loading="lazy" src={image} alt={name} />
    </StyledGame>
  );
}
const StyledGame = styled(motion.div)`
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  min-height: 35vh;
  text-align: center;

  img {
    width: 100%;
    max-height: 30vh;
    min-height: 30vh;
    object-fit: cover;
  }
`;
export default Game;
