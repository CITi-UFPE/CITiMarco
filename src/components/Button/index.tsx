import React from 'react';
import { ButtonContainer, Text } from './style';

type ButtonProps = {
    onClickFunction: Function;
    textValue: string;
};

const Button: React.FC<ButtonProps> = ({ onClickFunction, textValue }: ButtonProps) => (
  <ButtonContainer onClick={() => onClickFunction()}>
    <Text>{textValue}</Text>
  </ButtonContainer>
);

export default Button;
