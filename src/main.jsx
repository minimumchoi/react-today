import { createRoot } from "react-dom/client";
import Main from "./pages/Main/Main";

const container = document.getElementById("root");
createRoot(container).render(
  <>
    <Main />
  </>
);
