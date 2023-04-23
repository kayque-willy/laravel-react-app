// resources/js/Counter.js

import axios from "axios";
import React, { useState } from "react";
import { createRoot } from "react-dom/client";

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
        postCount();
    };

    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
        postCount();
    };

    const postCount = () => {
        axios.post('/count', {
            message: 'Counter Updated!',
        })
    }

    return (
        <div className="counter">
            <h4>Me de {count} fatos!</h4>
            <button onClick={handleDecrement}> - </button>
            <button onClick={handleIncrement}> + </button>
        </div>
    );
}

const rootElement = document.getElementById("counter");
const root = createRoot(rootElement);

if (document.getElementById('counter')) {
    root.render(<Counter />);
}