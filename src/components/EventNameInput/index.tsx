import React, { Dispatch, SetStateAction } from 'react';
import {
  Container, BlueLine, InputComponent, Label,
} from './style';

interface InputProps {
  placeholder: string,
  value: string,
  setValue: Dispatch<SetStateAction<string>>,
}

const EventNameInput: React.ElementType = ({ placeholder, value, setValue }: InputProps) => (
  <Container>
    <Label><strong>{placeholder}</strong></Label>
    <InputComponent
      value={value}
      onChange={(event: any) => setValue(event.target.value)}
      type="text"
    />
    <BlueLine />
  </Container>
);

export default EventNameInput;
