import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Page from './components/page'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
  <BrowserRouter>
            <Routes>
                    <Route path='/' element={<App />}/>
                    <Route path='/product' element={<Page />}/>
            </Routes>
        </BrowserRouter>
  </React.StrictMode>
);
