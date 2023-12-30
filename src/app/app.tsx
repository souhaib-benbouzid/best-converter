import { createRoot } from "react-dom/client";
import Router from "./router";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { Provider } from "react-redux";
import { store } from "./store";

const root = createRoot(document.getElementById("app"));

root.render(
  <Provider store={store}>
    <Theme>
      <Router />
    </Theme>
  </Provider>
);
