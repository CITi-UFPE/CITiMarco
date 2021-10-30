/* eslint-disable no-alert */
import React from 'react';
import GoogleButton from 'react-google-button';

import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../../utils/refreshToken';

const clientId = process.env.REACT_APP_CLIENT_ID || '123';

const LoginAuth: React.FC = () => {
  const onSuccess = (res: any) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(`Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`);
    refreshTokenSetup(res);
  };

  const onFailure = (res: any) => {
    console.log('Login failed: res:', res);
    alert('Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz');
  };

  return (
    <>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy="single_host_origin"
        style={{ marginTop: '100px' }}
        isSignedIn
        render={(renderProps) => (
          <>
            <GoogleButton
              type="dark" // can be light or dark
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            />
          </>
        )}
      />
    </>
  );
};

export default LoginAuth;
