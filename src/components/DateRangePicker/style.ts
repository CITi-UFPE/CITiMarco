import styled from 'styled-components';
import {
  InputLabel,
} from '@material-ui/core';

export const Container = styled.div`
  margin-top: 13px;
  border-bottom: 0.5px solid #58CBFB;
  display: flex;
  flex-direction: column;
  align-items: baseline; 
  width: 100%;
  justify-content: space-between;

  .MuiInput-underline:before {
    border: 0;
  }

  .MuiInputBase-root{
    font: 400 14px sans-serif;
    color: #292929;
  }
`;

export const Label = styled(InputLabel)`
  margin-bottom: 10px;
`;
