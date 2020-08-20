import * as React from "react";
import { Store } from "webext-redux";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import PopupApp from "./containers/PopupApp";

const store = new Store();

store.ready().then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <PopupApp />
    </Provider>,
    document.getElementById("popup-root")
  );
});
