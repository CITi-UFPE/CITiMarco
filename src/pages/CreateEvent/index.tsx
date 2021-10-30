import React from 'react';
import { Container } from './style';
import {
  Button,
} from '../../components';

const CreateEvent: React.FC = () => {
  const HandleClick = () => {
    console.log('muito bom');
  };
  return (
    <Container>
      <Button onClickFunction={HandleClick} textValue="Seguinte" />
    </Container>
  );
};

export default CreateEvent;
