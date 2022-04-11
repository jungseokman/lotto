import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Ball from "./Ball";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;

const BallsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BtnWrapper = styled.button`
  padding: 7px 20px;
  border: none;
  background-color: #027bc2;

  color: white;
  font-size: 20px;
  font-weight: bold;
  border-radius: 7px;
`;

const getWinNumbers = () => {
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    );
  }
  console.log(shuffle);
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  console.log(winNumbers);
  return [...winNumbers];
};

const LottoBall = () => {
  const lottoNumbers = useMemo(() => getWinNumbers(), []);
  const [winNumbers, setWinNumbers] = useState(lottoNumbers);
  const [winBalls, setWinBalls] = useState([]);
  const [redo, setRedo] = useState(false);

  const timeout = useRef([]);

  useEffect(() => {
    if (winBalls.length === 0) {
      for (let i = 0; i < winNumbers.length; i++) {
        timeout.current[i] = setTimeout(() => {
          setWinBalls((prev) => [...prev, winNumbers[i]]);
        }, 1000 + i * 2000);
      }
    }
    timeout.current[6] = setTimeout(() => {
      setRedo(true);
    }, 13000);
    return () => {
      timeout.current.forEach((v) => {
        clearTimeout(v);
      });
    };
  }, [timeout.current]);

  const onClickRedo = useCallback(() => {
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setRedo(false);
    timeout.current = [];
  }, [winNumbers]);

  return (
    <Wrapper>
      <BallsWrapper>
        {winBalls.map((v) => (
          <Ball key={v} number={v} />
        ))}
      </BallsWrapper>
      <ButtonWrapper>
        {redo && <BtnWrapper onClick={onClickRedo}>한번 더</BtnWrapper>}
      </ButtonWrapper>
    </Wrapper>
  );
};

export default LottoBall;
