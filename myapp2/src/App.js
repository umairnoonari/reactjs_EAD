import './App.css';
import Navbar from './Navbar';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Catogories from './component/Catogories';
import Kid from './component/Kid';
import Mother from './component/Mother';
import Notfound from './component/Notfound';
import Products from './component/Products';
import Product from './component/Product';
import Refe from './component/Refe';
import UseReducer from './component/UseReducer';
import Formik1 from './component/Formik1';
import HOC from './component/HOC'
import Click from './component/Click';
import Computed from './component/Computed';
import UseEffectHook from './component/UseEffectHook';

function App() {
  return (
    <>
    
    <Router>
      <Click />
       <Navbar />
       <Routes>
        {/* <Route index element={<About />}></Route> */}
       <Route path="/" element={<Home />}></Route>
       <Route path="/about" element={<About />}></Route>
       <Route path="/contact" element={<Contact />}></Route>
       <Route path='/products' element={<Products />}></Route>
       <Route path='/product/:id' element={<Product />}></Route>
       <Route path='/refe' element={<Refe />}></Route>
       <Route path='/usereducer' element={<UseReducer />}></Route>
       <Route path='/formik' element={<Formik1 />}></Route>
       <Route path='/computed' element={<Computed />}></Route>
       <Route path='/useeffecthook' element={<UseEffectHook />}></Route>
       <Route path='/categories' element={<Catogories />}>
         <Route index  element={<Mother/>}></Route>
         <Route path='kid' element={<Kid />}></Route>
         <Route path='mother' element={<Mother />}></Route>
       </Route>
       <Route path="*" element={<Notfound />}></Route>
       </Routes>
    </Router>
    </>
  );
}

export default App;
