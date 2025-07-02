import React from "react";
import { createRoot } from "react-dom/client";
import App from "./shakyo-20/App";

const container = document.getElementById("root")!; // '!'は null でないことを保証
const root = createRoot(container);
root.render(<App />); // Appコンポーネントをレンダリング
