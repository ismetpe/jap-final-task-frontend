
import './App.css';
import Header from '../src/components/Header/Header';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';
import React, { Fragment, useEffect } from 'react';

function App() {
  return (
    <div className="App">
        <Header/>
        <BrowserRouter>
          <Fragment>
            <Routes />
          </Fragment>
        </BrowserRouter>
    </div>
  );
}

export default App;
