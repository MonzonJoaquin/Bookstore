import { Outlet } from 'react-router-dom';

import { Nav } from './components/Nav';
import { Footer } from './components/Footer';

import './App.css';

export function App() {
  return (
    <div className='App'>
      <Nav></Nav>
      <div className="Outleet">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

