import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import { HomePage } from './components/home-page/home-page';
import { Header } from './components/header/header';


export default function App() {
  return (
    <Router>
      <div className='App'>
      <Header/>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Header</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}
