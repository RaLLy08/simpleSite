import React from "react";
import AppRouter from "./components/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from "./store";

export const App = () => {
  
  return(
    <Provider store={store}> 
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
    </Provider>
  )
}