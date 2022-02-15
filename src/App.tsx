import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar';

//Components

const App = () => {
  return (
    <>
     <Navbar />
     <Outlet />
    </>
  )
}
export default App;
