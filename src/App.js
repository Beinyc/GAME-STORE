import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import { Provider } from 'react-redux';
import {useParams} from 'react-router-dom';
import { HomePage } from './components/home-page/home-page';
import { Header } from './components/header/header';
import { store } from './redux';
import { GamePage } from './components/GamePage/GamePage';
import { OrderPage } from './components/OrderPage/OrderPage';


export default function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Router>
        <Header/>
              <Routes>
                  <Route exact path="/" element={<HomePage />} />
              </Routes>
              <Routes>
                  <Route exact path="/app/:title" element={<GamePage />} />
              </Routes>
              <Routes>
                  <Route exact path="/order" element={<OrderPage />} />
              </Routes>
      </Router>
    </Provider>
    </div>
  );
}
