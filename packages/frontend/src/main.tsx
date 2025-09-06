import { StrictMode } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import App from './App.tsx'
import { Amplify } from "aws-amplify";
import config from "./config.ts";

Amplify.configure({
  API: {
    endpoints: [
      {
        name: "crm",
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION,
      },
    ],
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
)
