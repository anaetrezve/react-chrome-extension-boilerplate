import * as React from 'react';
import Counter from '../../containers/counter/Counter';
import GlobalStyle from '../../components/styles/GlobalStyles';

export interface OptionsAppProps {}

const OptionsApp: React.FC<OptionsAppProps> = () => (
  <>
    <GlobalStyle />
    <Counter />
  </>
);

export default OptionsApp;
