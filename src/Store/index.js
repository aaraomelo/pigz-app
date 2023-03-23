import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { getPersistConfig } from "redux-deep-persist";
import storage from "redux-persist/lib/storage";
import { Provider } from "react-redux";
import formReducer from "./form/reducer";

const reducer = combineReducers({
    form: formReducer,
});

const persistConfig = getPersistConfig({
    key: "root",
    storage,
    blacklist: [],
    rootReducer: reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,
});

const persistor = persistStore(store);

export default function Store({ children }) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
};
