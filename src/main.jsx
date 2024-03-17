import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./utils/theme";
import { CounterContextProvider } from './Contexts/CounterContext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ChakraProvider theme={customTheme}>
      <CounterContextProvider>   
        <App />
  </CounterContextProvider>
   

    </ChakraProvider>
  </React.StrictMode>
)
