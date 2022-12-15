import { createRoot } from "react-dom/client"
import App from "./App"
import { createGlobalStyle } from "styled-components"
import React from "react"

const GlobalStyle = createGlobalStyle`
*{
    margin:  0;
    padding: 0;
}  

body {
    
    font-family: 'Poppins', sans-serif;
    background-color: #f2f2f2;
  }

`

const root = createRoot (document.querySelector("#root"))

root.render(
    <React.StrictMode>
            <App />
            <GlobalStyle> </GlobalStyle>
    </React.StrictMode>
)