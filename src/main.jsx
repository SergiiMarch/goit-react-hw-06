import React from "react";
import ReactDOM from "react-dom/client"; // Переконайтесь, що імпорт правильний
import App from "./App";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root")); // Переконайтесь, що createRoot викликаний правильно
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
