import styled from 'styled-components';

export const DatePickerDiv = styled.div`
  margin-top: 13px;
  border-bottom: 0.5px solid #58CBFB;
  display: flex;
  align-items: baseline; 
  width: 160px;
  justify-content: space-between;

  .MuiInput-underline:before {
    border: 0;
  }

  .MuiInputBase-root{
    font: 400 14px sans-serif;
    color: #292929;
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
