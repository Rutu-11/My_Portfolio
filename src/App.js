import { useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';
import AOS from 'aos';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact.jsx'
import 'aos/dist/aos.css'; 
  
function App() {
  useEffect(()=>{
    AOS.init({
      offset: 350,
      duration: 1000,
    });
    AOS.refreshHard();
  },[])
  return (
    <>
     <Navbar/>
     {/* <AllRoutes/> */}
    
     <Home/>
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>
    </>
  );
}

export default App;
