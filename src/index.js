import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Header } from './components/header';
import MainPage from './main-page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <MainPage />
  </React.StrictMode>
);