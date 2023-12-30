import { createRoot } from "react-dom/client";
import Router from "./router";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const root = createRoot(document.getElementById("app"));

root.render(
  <Theme>
    <Router />
  </Theme>
);
