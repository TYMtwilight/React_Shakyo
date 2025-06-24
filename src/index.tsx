import React from 'react';
import { createRoot } from "react-dom/client";
import App from './shakyo-12/App';

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<App />);