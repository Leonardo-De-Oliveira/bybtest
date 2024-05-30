import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyles } from './globalstyles';
import Home from './Containers/Home';
import Adress from './Containers/Adress';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DataProvider } from './Context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/adress" element={<Adress />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  </React.StrictMode>,
)
