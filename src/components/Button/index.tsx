import React from 'react';
import { ButtonContainer, Text } from './style';

type ButtonProps = {
  onClickFunction: Function;
  textValue: string;
};

export const Button: React.FC<ButtonProps> = ({ onClickFunction, textValue }) => (
  <ButtonContainer onClick={() => onClickFunction}>
    <Text>{textValue}</Text>
  </ButtonContainer>
);
