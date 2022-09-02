import store from "./Redux/redux-store";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import React from "react";
import { CookiesProvider } from "react-cookie";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <CookiesProvider>
      <Provider store={store}>
        <App store={store} dispatch={store.dispatch.bind(store)} />
      </Provider>
    </CookiesProvider>
  </React.StrictMode>
);
