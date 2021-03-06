import React from 'react';
import styled from "styled-components";
import reactElementToJSXString from "react-element-to-jsx-string"

const InputContainer = ({children, ...restProps}) => {
  const jsxMarkup = reactElementToJSXString(children, { displayName: () => ("Input") })

  return (
      <Container {...restProps}>
        <Code>{jsxMarkup}</Code>
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