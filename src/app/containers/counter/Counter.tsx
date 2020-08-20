import * as React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../background/store/counter';
import { IAppState } from '../../background/store/interfaces/store';

export interface CounterProps {}

const Counter: React.FC<CounterProps> = () => {
  const count = useSelector((state: IAppState) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <CounterWrapper>
      <CounterDisplay>{count}</CounterDisplay>
      <ButtonWrapper>
        <Button onClick={() => dispatch(increment())}>Increment</Button>
        <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      </ButtonWrapper>
    </CounterWrapper>
  );
};

export default Counter;

const CounterWrapper = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CounterDisplay = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  margin: 5px;
  align-items: center;
  font-size: 36px;
  margin-bottom: 25px;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const Button = styled.button`
  padding: 15px 20px;
  display: inline-flex;
  margin: 0px 5px;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  background: rgba(27, 188, 194, 1);
  border: 0 none;
  outline: 0 none;

  &:hover {
    background: rgba(27, 188, 194, 0.8);
  }

  &:active {
    background: #169499;
  }
`;
