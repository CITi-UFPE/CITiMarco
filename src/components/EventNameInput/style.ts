import styled from 'styled-components';
import { InputLabel } from '@material-ui/core';

export const Container = styled.div`
  width: 100%;
  margin: 20px 0;
`;

export const InputComponent = styled.input`
  width: 100%;
  outline: none;
  border: 0;
  padding: 10px;
`;

export const BlueLine = styled.div`
  border: 0.3px #58CBFB solid;
  width: 100%;
`;

export const Label = styled(InputLabel)`
  margin-bottom: 10px;
`;
