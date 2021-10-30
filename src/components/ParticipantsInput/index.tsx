import React, { Dispatch, SetStateAction } from 'react';
import {
  Container, BlueLine, InputComponent, Label,
} from './style';

interface InputProps {
  placeholder: string,
  value: string,
  setValue: Dispatch<SetStateAction<string[]>>,
}

const ParticipantsInput: React.ElementType = ({ placeholder, value, setValue }: InputProps) => {
  const getEmailList = (list: string) => list.split(',');

  return (
    <Container>
      <Label><strong>{placeholder}</strong></Label>
      <InputComponent
        value={value}
        onChange={(event: any) => {
          setValue(getEmailList(event.target.value));
          console.log(value);
        }}
        type="text"
      />
      <BlueLine />
    </Container>
  );
};

export default ParticipantsInput;
