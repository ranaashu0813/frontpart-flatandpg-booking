import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterProvider from './Store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<FilterProvider>
    <App />

</FilterProvider>
);

