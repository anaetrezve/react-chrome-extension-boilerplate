import * as React from "react";
import Counter from "../../containers/counter/Counter";
import GlobalStyle from "../../components/styles/GlobalStyles";

export interface PopupAppProps {}

const PopupApp: React.FC<PopupAppProps> = () => (
  <>
    <GlobalStyle />
    <Counter />
  </>
);

export default PopupApp;
