import React, { Dispatch, SetStateAction } from 'react';
import { BlueLine, InputComponent } from './styles';

interface InputProps {
  placeholder: string,
  state: string,
  setState: Dispatch<SetStateAction<string>>,
}

function Input({ placeholder, state, setState }: InputProps): JSX.Element {
  return (
    <>
      <InputComponent
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder={placeholder}
        type="text"
      />
      <BlueLine />
    </>
  );
}

export default Input;
