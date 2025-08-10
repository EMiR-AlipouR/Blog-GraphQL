// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import "./Styles/index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@emotion/react";
import theme from "./mui/theme.js";
import "./Styles/font.css";
import { BrowserRouter } from "react-router-dom";
const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHCMS_URI,
  cache: new InMemoryCache(),
});


// const client = new ApolloClient({
//   uri: import.meta.env.VITE_GRAPHCMS_URI,
//   cache: new InMemoryCache(),
//   headers: {
//     Authorization: `Bearer ${import.meta.env.VITE_GRAPHCMS_TOKEN}`
//   }
// });

createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </ApolloProvider>
);
