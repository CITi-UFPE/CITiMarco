import React from 'react';
import { Container } from './style';
import { TableInputs, Button } from '../index';

const HandleClick = () => {
  console.log('muito bom');
};
export const InputsPage: React.FC = () => (
  <Container>
    <TableInputs title="Informações" />
    <Button onClickFunction={HandleClick} textValue="Seguinte" />
  </Container>
);
