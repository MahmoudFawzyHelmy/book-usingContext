import { createRoot } from "react-dom/client";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.js";
import { Provider } from "./context/books.js";

createRoot(document.getElementById("root")).render(
  <Provider>
    <App />
  </Provider>
);
