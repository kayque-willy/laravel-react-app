// resources/js/components/HelloReact.js

import React from 'react';
import ReactDOM from 'react-dom';

export default function HelloReact() {
    console.log("react render");
    return (
        <h1>Hello React!</h1>
    );
}

if (document.getElementById('hello-react')) {
    console.log("react render");
    ReactDOM.render(<HelloReact />, document.getElementById('hello-react'));
}