import React from 'react';
import { createGlobalStyle } from 'styled-components';
import ExhibitTemplate from './components/ExhibitTemplate';
import ExhibitHead from './components/ExhibitHead';

const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ExhibitTemplate>
      	<ExhibitHead></ExhibitHead>
      </ExhibitTemplate>
    </>
  );
}

export default App;
