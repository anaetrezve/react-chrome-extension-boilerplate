import { CounterPayload } from './interfaces/actions';

export const increment = (payload: CounterPayload = 1) => ({
  type: 'INCREMENT',
  payload
});

export const decrement = (payload: CounterPayload = 1) => ({
  type: 'DECREMENT',
  payload
});
