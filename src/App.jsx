import React from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { Provider } from "react-redux"; // Важливо використовувати саме Provider
import store from "./redux/store"; // Правильний імпорт store
import { PersistGate } from "redux-persist/integration/react"; // Для забезпечення збереження стану
import { persistor } from "./redux/store"; // Імпортуйте persistor

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <h1>PhoneBook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </PersistGate>
    </Provider>
  );
};

export default App;
