import React from 'react';
import styled, { css } from "styled-components"


const Input = ({
  startIcon,
  endIcon,
  helperText,
  multiline, 
  placeholder="Placeholder", 
  label="label", 
  size="md", 
  ...restProps
}) => {

  return ( 
    <Wrapper>
      {multiline ? 
      <Textarea 
        {...restProps}
      ></Textarea> 
      : 
      <StyledInput
        {...restProps}
      />
      }
      <Label {...restProps}>{label}</Label>  
      {startIcon && <span className="material-icons">phone</span>}
      {endIcon && <span style={{ left: '170px' }} className="material-icons">lock</span>}
      {helperText && <HelperText {...restProps}>{helperText}</HelperText>}
    </Wrapper> 
  );
}
 
export default Input;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  margin-bottom: 42px;

  span {
    position:absolute;
    top: 38px;
    left: 12px;
    background: #ffffff;
    color: #828282;
  }
`;

const Label = styled.label`
  font-weight: 400;
  font-size: 12px;
  color: ${({error}) => error ? "#D32F2F" : "#333333"};
  order: -1;
`;

const HelperText = styled.p`
  margin-top: 4px;
  font-size: 10px;
  line-height: 14px;
  color: ${({error}) => error ? "#D32F2F" : "#828282"};
`;

const baseInputStyles = css`
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  text-transform: capitalize;
  margin-top: 4px;
  border: 1px solid ${({error}) => error ? "#D32F2F" : "#828282"};
  border-radius: 8px;

  &:hover {
    border-color: #333333;

    ~ ${Label}, ~ ${HelperText} {
      color: #333333;
    }
  }

  &:focus {
    outline: none;
    border-color: ${({error}) => error ? "#D32F2F" : "#2962FF"};

    ~ ${Label}, ~ ${HelperText} {
      color: ${({error}) => error ? "#D32F2F" : "#2962FF"};
    }
  }

  &:disabled {
    background: #F2F2F2;
    border-color: #E0E0E0;
  }
`

const StyledInput = styled.input`
  ${baseInputStyles}
  width: ${({fullWidth}) => fullWidth ? "100%" : "200px"};
  padding: ${({size}) => size === "sm" ? '10px' : '18px'} 12px;
  ${({startIcon}) => startIcon && "padding-left: 45px"};
`;

const Textarea = styled.textarea`
  ${baseInputStyles}
  padding: 18px 12px;
  resize: none;
`;




