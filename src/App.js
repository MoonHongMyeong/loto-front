import React, { useContext, useEffect } from 'react';
import Main from './components/pages/Main';
import SignUp from './components/pages/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>  
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/signUp' element={<SignUp/>}/>       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
