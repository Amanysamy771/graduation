import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Forget, Home, LoadingPage, Login, Phone, SignUp } from './pages';



const App = () => {
  return (
    

<div>
  

        <Routes>
          <Route path="/" element={<LoadingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/phone" element={<Phone />} />
        </Routes>


</div>        
  
  );
};

export default App;
