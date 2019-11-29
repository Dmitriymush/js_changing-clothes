import React from 'react';
import ClothBasket from "./components/clothBasket";
import  { store } from "./store/index";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <ClothBasket/>
    </Provider>
  );
}

export default App;
