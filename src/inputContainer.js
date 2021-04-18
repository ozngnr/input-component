import React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import styled from "styled-components";

const InputContainer = ({children, ...restProps}) => {
  return (
      <Container {...restProps}>
        <Code>{reactElementToJSXString(children)}</Code>
        {children}
      </Container>
   );
}
 
export default InputContainer;

const Container = styled.div`
  min-width: 400px;
`;

const Code = styled.p`
  font-family: 'Ubuntu Mono', monospace;
  font-size: 12px;
  color: #333333;
  margin-bottom: 16px;
`;