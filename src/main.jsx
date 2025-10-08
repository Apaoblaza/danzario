import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import LeadCapture from "./pages/LeadCapture.jsx";
import Checkout from "./pages/Checkout.jsx";
import NotFound from "./pages/NotFound.jsx";
import { Router, useRouter } from "./lib/router.jsx";
import "./index.css";

function AppRoutes() {
  const { path } = useRouter();

  switch (path) {
    case "/":
      return <App />;
    case "/interesados":
      return <LeadCapture />;
    case "/comprar":
      return <Checkout />;
    default:
      return <NotFound />;
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AppRoutes />
    </Router>
  </React.StrictMode>
);