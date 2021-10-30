import React, { Dispatch, SetStateAction } from 'react';
import {
  MenuItem,
} from '@material-ui/core';

import {
  Container,
  Label,
  SelectInput,
} from './style';

interface InputProps {
  value: string | null;
  setValue: Dispatch<SetStateAction<number>>;
}

const DurationInput: React.ElementType = ({
  value,
  setValue,
}: InputProps) => (
  <Container>
    <Label><strong>Duração da reunião</strong></Label>
    <SelectInput
      value={value}
      onChange={(event: any) => setValue(event.target.value)}
      autoWidth
      label="Duração da reunião evento"
    >
      <MenuItem value=""><em>Selecione a duração do evento</em></MenuItem>
      <MenuItem value={0.25}>15 minutos</MenuItem>
      <MenuItem value={0.50}>30 minutos</MenuItem>
      <MenuItem value={0.75}>45 minutos</MenuItem>
      <MenuItem value={1}>1 hora</MenuItem>
      <MenuItem value={2}>2 horas</MenuItem>
    </SelectInput>
  </Container>
);

export default DurationInput;
