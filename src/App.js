import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/pages/Home';
import Ourcourses from './components/pages/Ourcourses';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import Python from './components/CoursesDetail/Python';
import Html from './components/CoursesDetail/Html';
import Fullstack from './components/CoursesDetail/Fullstack';



function App() {
  return (
    <div>

      <Routes>

     <Route path='/' element={<Layout/>}>
     <Route index element={<Home/>}/>
     <Route path='course' element={<Ourcourses/>}/>
     <Route path='python' element={<Python/>}/>
     <Route path='html' element={<Html/>}/>
     <Route path='fullstack' element={<Fullstack/>}/>
     <Route path='about' element={<AboutUs/>}/>
     <Route path='contact' element={<ContactUs/>}/>








     </Route>

      </Routes>
     
     
    
      
    </div>
  );
}

export default App;
