import { Reducer } from "redux";
import { ICounter } from "./interfaces/reducer";
import { CounterActions } from "./interfaces/actions";

const counterState: ICounter = {
  count: 0,
};

const counter: Reducer<ICounter, CounterActions> = (
  state = counterState,
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case "INCREMENT":
      return { ...state, count: state.count + (payload || 1) };
    case "DECREMENT":
      return { ...state, count: state.count - (payload || 1) };
    default:
      return state;
  }
};

export { counter };
