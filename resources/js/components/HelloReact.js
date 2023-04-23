// resources/js/components/HelloReact.js

import React from 'react';
import { createRoot } from "react-dom/client";

export default function HelloReact() {
    console.log("react render");
    return (
        <h1>Gerador de frases</h1>
    );
}

const rootElement = document.getElementById("hello-react");
const root = createRoot(rootElement);

if (document.getElementById('hello-react')) {
    root.render(<HelloReact />);
}