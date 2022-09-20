import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

// Components files
import SiteNavbar from './components/navbar';
import Categories from './components/categories';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SiteNavbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
