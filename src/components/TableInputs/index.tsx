import React from 'react';
import { DateRangePicker } from '..';
import {
  Container, TitleContainer, Text, ContentContainer,
} from './style';

type TableProps = {
  title: string;
}
export const TableInputs: React.FC<TableProps> = ({ title }: TableProps) => (
  <Container>
    <TitleContainer>
      <Text>{title}</Text>
    </TitleContainer>
    <ContentContainer>
      <p>Intervalo da reunião</p>
      <DateRangePicker />
    </ContentContainer>
  </Container>
);
