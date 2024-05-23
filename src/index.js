import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './index.css'
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import store, {persister } from './components/redux/Store';
import { Korzina } from './components/Korzina/Korzina';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store} >
<BrowserRouter>
<PersistGate  loading={null} persistor={persister} >
    <App />
</PersistGate>
 </BrowserRouter>
 </Provider>
);
