import React from 'react';
import { Container, LogoCiti, LogoRocketComponent } from './style';
import { Logo, LogoRocket } from '../../assets';
import { LoginAuth } from '../../components';

const Home: React.FC = () => (
  <>
    <Container>
      <LogoCiti src={Logo} alt="" />
      <div>
        <LoginAuth />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <LogoRocketComponent src={LogoRocket} alt="" />
        </div>
      </div>
    </Container>
  </>
);

export default Home;
