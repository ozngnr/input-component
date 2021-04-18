import React from 'react';
import Input from './input';
import InputContainer from './inputContainer';
import styled from "styled-components"
import Footer from './footer';

const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  color: red;
  margin-bottom: 65px;
`;
const Row = styled.div`
  display:flex;
  flex-wrap: wrap;
`;

const App = () => {
  return (
    <>
    <main>
      <Title>Inputs</Title>
      <InputContainer>
        <Input />
      </InputContainer>
      <InputContainer>
        <Input error />
      </InputContainer>
      <InputContainer>
        <Input disabled />
      </InputContainer>
      <Row>
        <InputContainer>
          <Input helperText="Some interesting text" />
        </InputContainer>
        <InputContainer>
          <Input helperText="Some interesting text" error />
        </InputContainer>
      </Row>
      <Row>
        <InputContainer>
          <Input startIcon />
        </InputContainer>
        <InputContainer>
          <Input endIcon />
        </InputContainer>
      </Row>
      <InputContainer>
        <Input value="text" />
      </InputContainer>
      <Row>
        <InputContainer>
          <Input size="sm" />
        </InputContainer>
        <InputContainer>
          <Input size="md" />
        </InputContainer>
      </Row>
      <InputContainer>
        <Input fullWidth />
      </InputContainer>
      <InputContainer>
        <Input multiline row="4" />
      </InputContainer>
    </main>
    <Footer />
    </>
  );
}

export default App;
