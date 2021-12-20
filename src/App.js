import React from 'react';
import styled from '@emotion/styled';

//importing components
import Form from './components/Form';
import logo from './img/to-do-list.png'

const Div2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Header = styled.h1`
  font-size: 30px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin:0;
`;
const Subtitle = styled.h3`
  font-size: 16px;
  font-weight:400;
`;
const Div = styled.div`
  height:100%;
`;
const Img = styled.img`
  width: 30%;
  margin:1.5rem;

`;

function App() {

  return (
    <Div>
      <Div2><Header>App Tareas<Img src={logo} alt="logo" /></Header></Div2>
      <Subtitle>¿Qué cosas tenés que terminar hoy?</Subtitle> 
      <Form />
      
    </Div>
  );
}

export default App;
