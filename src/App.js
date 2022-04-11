import React from "react";
import styled from "styled-components";
import Lotto from "./Lotto";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeadWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 10px;

  font-size: 30px;
  font-weight: bold;
`;

const BallWrapper = styled.div`
  margin-top: 100px;
`;

const App = () => {
  return (
    <Wrapper>
      <HeadWrapper>💎 1등 당첨 기원 💎</HeadWrapper>
      <BallWrapper>
        <Lotto />
      </BallWrapper>
    </Wrapper>
  );
};

export default App;
