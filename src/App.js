import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Services from './Component/Services';
import Contact from './Component/Contact';
import Policy from './Component/Policy';
import Error from './Component/Error';
import List from './Component/List';
import Footer from './Component/Footer';


function App () {
  return(
     
     <BrowserRouter>
     <List />
     <Routes>
      <Route exact path='/' element={ <Home />} />
       <Route path='/About' element={ <About />} />
       <Route path='/Services' element={ <Services />} />
       <Route path='/Contact' element={ <Contact />} />
       <Route path='/Policy' element={ <Policy />} />
     

       <Route path='*' element={ <Error />} />

     </Routes>
  
     <Footer />
     
     </BrowserRouter>

  )

}

export default App;