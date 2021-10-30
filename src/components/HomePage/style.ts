import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  & h1 {
    font-size: 54px;
    color: ${(props) => props.theme.colors.primary};
    margin-top: 40px;
    text-align: center;
    @media (max-width: 720px) {
      font-size: 28px;
    }
  }

  & p {
    font-size: 20px;
    margin-top: 24px;
    line-height: 32px;
    @media (max-width: 720px) {
      font-size: 16px;
      margin-top: 0;
    }
  }
`;

export const LogoCiti = styled.img`
  width: 200px;
`;

export const LogoRocketComponent = styled.img`
  width: 135px;
  margin-top: 40px;
  /* justify-self: flex-end; */
`;

export const RocketWrapper = styled.div`
  width: 40%;
`;

export const BottomContainer = styled.div`
  height: 40%;
  background-color: ${(props) => props.theme.colors.green};
`;
