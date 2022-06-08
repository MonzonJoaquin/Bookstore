import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Rutas
import {App} from './App';
import { Store } from './pages/Store';
import { PurchaseOrder } from './pages/PurchaseOrder';
import { User } from './pages/User';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<App/>}>
          <Route path='' element={<Store/>}></Route>
          <Route path='pedidos/:id' element={<PurchaseOrder/>}></Route>
          <Route path='sesion' element={<User/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
