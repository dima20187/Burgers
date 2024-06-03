import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import store, {persister } from './store/Store'


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
