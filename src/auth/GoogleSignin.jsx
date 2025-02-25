import React, { useEffect } from 'react';
import { gapi } from 'gapi-script';

const GoogleAuth = () => {
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: 'https://www.googleapis.com/auth/blogger'
      }).then(() => {
        console.log('GAPI client initialized');
      }).catch(error => {
        console.error('Error initializing GAPI client', error);
      });
    };

    gapi.load('client:auth2', initClient);
  }, []);

  const handleSignIn = () => {
    const authInstance = gapi.auth2.getAuthInstance();
    if (authInstance) {
      authInstance.signIn().then(() => {
        console.log('User signed in');
      }).catch(error => {
        console.error('Error during sign-in', error);
      });
    } else {
      console.error('GAPI auth instance not initialized');
    }
  };

  const handleSignOut = () => {
    const authInstance = gapi.auth2.getAuthInstance();
    if (authInstance) {
      authInstance.signOut().then(() => {
        console.log('User signed out');
      }).catch(error => {
        console.error('Error during sign-out', error);
      });
    } else {
      console.error('GAPI auth instance not initialized');
    }
  };

  return (
    <div>
      <button onClick={handleSignIn}>Sign in with Google</button>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
};

export default GoogleAuth;
