import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 <GoogleOAuthProvider clientId="986852061472-9cgdim6dnk8gl8icptp73uaaophdoe0h.apps.googleusercontent.com">
             <App />
     </GoogleOAuthProvider>,
)
