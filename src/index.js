import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Music from './Music';
import Books from './Books';
import Shop from './Shop';
import Prod from './Prod';
import { Route } from 'react-router-dom';
import { BrowserRouter, Routes, Link } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
            <Route index element={<h1>Select something</h1>}/>
            <Route path="/music" element={<Music />}/>
            <Route path="/books" element={<Books />}/>
            <Route path="/shop" element={<Shop />}>
                <Route index element = {<h1>Welcome!</h1>}/>
                <Route path= ":prodid" element = {<Prod/>}/>
            </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
