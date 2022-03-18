import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'

import './index.css';
import GoogleAuthCallback from './components/GoogleAuthCallback'
import App from './App';
import Default from './layouts/Default'

import { store } from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Default><App /></Default>} />
          <Route path="/auth/google/callback" element={<GoogleAuthCallback />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
