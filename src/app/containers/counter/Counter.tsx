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
  --border-size: 0.125rem;
  --duration: 250ms;
  --ease: cubic-bezier(0.215, 0.61, 0.355, 1);
  --font-family: monospace;
  --color-primary: white;
  --color-secondary: black;
  --color-tertiary: dodgerblue;
  --shadow: rgba(0, 0, 0, 0.1);
  --space: 1rem;

  margin: 0 auto;
  display: grid;
  place-items: center;
  width: 350px;
  height: 200px;
  padding: 10px 25px;
  background: #cfd8dc;
`;

const CounterDisplay = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  margin: 5px;
  align-items: center;
  font-size: 36px;
  margin-bottom: 25px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  box-shadow: var(--shadow) 4px 4px;

  :hover button:focus:not(:hover) {
    flex-grow: 1;
    color: var(--color-secondary);
    background-color: var(--color-primary);
    outline-color: var(--color-tertiary);
  }
`;

const Button = styled.button`
  flex-grow: 1;
  cursor: pointer;
  position: relative;
  padding: calc(var(--space) / 1.125) var(--space) var(--space);
  border: var(--border-size) solid black;
  color: var(--color-secondary);
  background-color: var(--color-primary);
  font-size: 1.5rem;
  font-family: var(--font-family);
  text-transform: lowercase;
  text-shadow: var(--shadow) 2px 2px;
  transition: flex-grow var(--duration) var(--ease);

  + button {
    border-left: var(--border-size) solid black;
    margin-left: calc(var(--border-size) * -1);
  }

  :hover,
  :focus {
    flex-grow: 2;
    color: white;
    outline: none;
    text-shadow: none;
    background-color: var(--color-secondary);
  }

  :focus {
    outline: var(--border-size) dashed var(--color-primary);
    outline-offset: calc(var(--border-size) * -3);
  }

  /* .multi-button:hover button:focus:not(:hover) {
    flex-grow: 1;
    color: var(--color-secondary);
    background-color: var(--color-primary);
    outline-color: var(--color-tertiary);
  } */

  :active {
    transform: translateY(var(--border-size));
  }
`;
