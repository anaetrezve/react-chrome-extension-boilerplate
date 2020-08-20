import "redux";
import { ICounter } from "../counter/interfaces/reducer";
// Enhance the Action interface with the option of a payload.
// While still importing the Action interface from redux.
declare module "redux" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export interface Action<T = any, P = any> {
    type: T;
    payload?: P;
  }
}

export type OnSuccess = () => void;
export type OnError = (e: Error) => void;

export interface IAppState {
  counter: ICounter;
}
