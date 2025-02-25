import React, { useEffect } from 'react';
import { gapi } from 'gapi-script';

const GoogleAuth = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID, //clientId
        scope: 'https://www.googleapis.com/auth/blogger',
      });
    }
    gapi.load('client:auth2', start);
  }, []);

  const handleAuthClick = () => {
    gapi.auth2.getAuthInstance().signIn();
  };

  const handleSignOutClick = () => {
    gapi.auth2.getAuthInstance().signOut();
  };

  return (
    <div>
      <button onClick={handleAuthClick}>Sign in with Google</button>
      <button onClick={handleSignOutClick}>Sign out</button>
    </div>
  );
};

export default GoogleAuth;
