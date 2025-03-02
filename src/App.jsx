import React from "react";
import { store } from "../src/app/store";

import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
