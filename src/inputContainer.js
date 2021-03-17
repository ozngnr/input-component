import React from 'react';
import jsxToString from 'jsx-to-string';
import styled from "styled-components"

const InputContainer = ({children, row, ...restProps}) => {
  const jsxString = jsxToString(children, {
    shortBooleanSyntax: true,
  })

  return (
    <> 
      <Container>
        <Code>{jsxString}</Code>
        {children}
      </Container>
    </>
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
`