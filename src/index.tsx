import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AgentAdaAgent } from "./screens/AgentAdaAgent";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <AgentAdaAgent />
  </StrictMode>,
);
