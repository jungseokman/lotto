import React, { memo } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const ballFade = keyframes`
  to {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  text-align: center;

  }
  from {
    
  width: 150px;
  height: 150px;
  border-radius: 100%;
  text-align: center;
  line-height: 150px;
  font-size: 75px;
  font-weight: bold;
  opacity: 0.7;

  }
`;

const BallWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  text-align: center;
  line-height: 50px;

  font-size: 25px;
  font-weight: bold;
  color: white;

  margin: 5px;

  animation: ${ballFade} 2s;
`;

const Ball = memo(({ number }) => {
  let background;
  if (number <= 10) {
    background = "#FAC400";
  } else if (number <= 20) {
    background = "#69C8F2";
  } else if (number <= 30) {
    background = "#FF7171";
  } else if (number <= 40) {
    background = "#AAAAAA";
  } else {
    background = "#B0D840";
  }
  return (
    <BallWrapper className="ball" style={{ background }}>
      {number}
    </BallWrapper>
  );
});

export default Ball;
