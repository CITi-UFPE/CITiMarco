import styled from 'styled-components';
import {
  InputLabel,
  Select,
} from '@material-ui/core';

export const Container = styled.div`
  width: 100%;
  height: 50px;
  margin: 15px 0;
`;

export const SelectInput = styled(Select)`
  width: 100%;
`;

export const Label = styled(InputLabel)`
  margin-bottom: 15px;
`;
