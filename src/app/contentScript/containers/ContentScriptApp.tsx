import * as React from 'react';
import styled from 'styled-components';
import Counter from '../../containers/counter/Counter';

export interface ContentScriptAppProps {}

const ContentScriptApp: React.FC<ContentScriptAppProps> = () => (
  <>
    <ContentScriptContainer>
      <Counter />
    </ContentScriptContainer>
  </>
);

export default ContentScriptApp;

const ContentScriptContainer = styled.div`
  position: fixed;
  z-index: 999;
  bottom: 0;
  right: 0;
`;
