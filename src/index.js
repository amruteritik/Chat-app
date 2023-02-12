import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/authcontext";
import { ChatContextProvider } from "./context/chatcontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <AuthContextProvider>
    <ChatContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChatContextProvider>
  </AuthContextProvider>
  
);