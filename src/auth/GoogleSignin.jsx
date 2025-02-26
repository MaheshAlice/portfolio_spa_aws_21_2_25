import React, { useEffect } from 'react';
//import { gapi } from 'gapi-script';

 const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID; // Use Vite env format

const GoogleAuth = () => {
 /* useEffect(() => {
    const initializeGapi = async () => {
      try {
        gapi.load("client:auth2", () => {
          gapi.client
            .init({
              clientId: clientId,
              scope: "profile email",
            })
            .then(() => {
              console.log("GAPI client initialized successfully!");
            })
            .catch((error) =>
              console.error("Error initializing GAPI:", error)
            );
        });
      } catch (error) {
        console.error("GAPI initialization failed:", error);
      }
    };

    initializeGapi();
  }, []); */

  return <div>Google Sign-In Component</div>;
};

export default GoogleAuth;
