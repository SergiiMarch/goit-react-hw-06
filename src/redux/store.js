import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

// Конфігурація для збереження контактів
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["contacts"], // Переконайтесь, що ви зберігаєте тільки потрібні частини стану
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Ігнорування перевірок серіалізації для `redux-persist`
    }),
});

export const persistor = persistStore(store);
export default store;
