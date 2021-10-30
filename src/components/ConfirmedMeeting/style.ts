import styled from 'styled-components';

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(7px);
`;

export const MessageContainer = styled.div`
  position: absolute;
  background: linear-gradient(0deg, #58CBFB, #58CBFB);
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 8px 0 12px 0;
  width: 138px;
  height: 80px;
  z-index: 100000000;
`;

export const Message = styled.div`
  color: #000000;
  font-size: 10px;
  font-weight: bold;
`;
