import styled from 'styled-components';

export const Container = styled.div`
height: 370px;
width: 249px;
display: flex;
padding: 10px;
flex-direction: column;
border-radius: 18px;
`;

export const TitleContainer = styled.div`
height: 48px;
background-color: #58CBFB;
text-align: center;
border-top-right-radius: 18px;
border-top-left-radius: 18px;
display: flex;
align-items: center;
`;

export const Text = styled.text`
font-family: Barlow;
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: 14px;
letter-spacing: 0em;
color: #292929;
margin: 0 auto;
`;

export const ContentContainer = styled.div`
background-color: white;
border-bottom-right-radius: 18px;
border-bottom-left-radius: 18px;
height: 100%;
`;
