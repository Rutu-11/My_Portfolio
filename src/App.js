import { useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';
import Aos from 'aos';

  
function App() {
  useEffect(()=>{
    Aos.init({
      offset:300,
      duration:1000,
    });
  },[])
  return (
    <>
     <Navbar/>
     <AllRoutes/>
    </>
  );
}

export default App;
