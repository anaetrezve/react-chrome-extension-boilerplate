import { combineReducers } from "redux";
import { counter } from "../../background/store/counter";
import { OnSuccess, OnError, IAppState } from "./interfaces/store";

export const loadState = (): IAppState | undefined => {
  try {
    const serializedState = localStorage.getItem("appstate");

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (
  appstate: IAppState,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  success: OnSuccess = () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  error: OnError = () => {}
) => {
  try {
    const serializedState = JSON.stringify(appstate);

    localStorage.setItem("appstate", serializedState);
    success();
  } catch (e) {
    error(e);
  }
};

const reducers = combineReducers<IAppState>({
  counter,
});

export { reducers };
