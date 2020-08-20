import * as React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Store } from "webext-redux";
import ContentScriptApp from "./containers/ContentScriptApp";

const createDomAnchor = (anchorId = "content-script-dom-root") => {
  const anchor = document.createElement("div");

  anchor.id = anchorId;
  document.body.insertBefore(anchor, document.body.childNodes[0]);
};

createDomAnchor("content-script-dom-root");

const store = new Store();

store.ready().then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <ContentScriptApp />
    </Provider>,
    document.getElementById("content-script-dom-root")
  );
});
