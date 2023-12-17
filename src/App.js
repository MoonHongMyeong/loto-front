import React from 'react';
import Main from './components/pages/Main';
import SignUp from './components/pages/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Expedition from './components/pages/Expedition';

function App() {
  return (
    <BrowserRouter>  
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/signUp' element={<SignUp/>}/>       
        <Route path='/expedition' element={<Expedition/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
