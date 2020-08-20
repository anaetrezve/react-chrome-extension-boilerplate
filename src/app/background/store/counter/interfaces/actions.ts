import { Action } from "redux";

export type CounterActionTypes = "INCREMENT" | "DECREMENT";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CounterPayload = any;

export type CounterActions = Action<CounterActionTypes, CounterPayload>;
