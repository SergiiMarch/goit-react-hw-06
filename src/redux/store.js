import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

// Конфігурація для збереження стану контактів
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["contacts"], // Вказуємо, що ми хочемо зберігати тільки contacts
};

// Створюємо персистований ред'юсер для контактів
const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

// Створюємо Redux store з персистованими контактами та фільтрами
const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Вимикаємо перевірки серіалізації для redux-persist
    }),
});

export const persistor = persistStore(store);
export default store; // Експортуємо store за замовчуванням
