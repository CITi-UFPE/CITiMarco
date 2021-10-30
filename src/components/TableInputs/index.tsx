import React from 'react';
import { DateRangePicker } from '..';
import {
  Container, TitleContainer, Text, ContentContainer,
} from './style';

type TableProps = {
  title: string;
  children: JSX.Element;
}
export const TableInputs: React.FC<TableProps> = ({ title, children }: TableProps) => (
  <Container>
    <TitleContainer>
      <Text>{title}</Text>
    </TitleContainer>
    <ContentContainer>
      <p>Intervalo da reunião</p>
      {children}
      <DateRangePicker />
    </ContentContainer>
  </Container>
);
