import React from 'react';
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
  setValue: (value: string) => void;
}

const DurationInput: React.ElementType = ({
  value,
  setValue,
}: InputProps) => {
  const a = 1;

  return (
    <Container>
      <Label><strong>Duração do evento</strong></Label>
      <SelectInput
        variant="outlined"
        value={value}
        onChange={(event: any) => setValue(event.target.value)}
        autoWidth
        label="Duração do evento"
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
};
export default DurationInput;
