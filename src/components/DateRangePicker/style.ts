import styled from 'styled-components';

export const DatePickerDiv = styled.div`
  margin-top: 13px;
  border-bottom: 0.5px solid #F4F4F4;
  display: flex;
  align-items: baseline; 
  width: 160px;
  justify-content: space-between;

  .MuiInput-underline:before {
    border: 0;
  }

  .MuiInputBase-root{
    font: 400 14px sans-serif;
    color: #F4F4F4;
  }

  @media(max-width: 935px){
    .MuiInputBase-root{
    font: 400 12px sans-serif,
  }

  .MuiInputBase-input{
    padding: 0;
  }
  }
  @media(max-width: 780px){
    .MuiInputBase-root{
    font-size: 11px;
  }
  }
`;
