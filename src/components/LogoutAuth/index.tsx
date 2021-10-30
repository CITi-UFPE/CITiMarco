/* eslint-disable no-alert */
import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = process.env.REACT_APP_CLIENT_ID || '123';

const LogoutAuth: React.FC = () => {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
};

export default LogoutAuth;
