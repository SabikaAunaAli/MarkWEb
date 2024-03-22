import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/pages/Home';
import Ourcourses from './components/pages/Ourcourses';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';



function App() {
  return (
    <div>

      <Routes>

     <Route path='/' element={<Layout/>}>
     <Route index element={<Home/>}/>
     <Route path='course' element={<Ourcourses/>}/>
     <Route path='about' element={<AboutUs/>}/>
     <Route path='contact' element={<ContactUs/>}/>








     </Route>

      </Routes>
     
     
    
      
    </div>
  );
}

export default App;
