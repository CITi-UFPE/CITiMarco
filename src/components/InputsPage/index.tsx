import React from 'react';
import { Container } from './style';
import { Button } from '../Button';

const HandleClick = () => {
  console.log('muito bom');
};
export const InputsPage: React.FC = () => (
  <Container>
    <Button onClickFunction={HandleClick} textValue="Seguinte" />
  </Container>
);
