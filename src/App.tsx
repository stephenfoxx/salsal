
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "./Components/navbar"
import HomePage from "./Components/home"
import AboutUs from "./Components/aboutUs"
import Footer from "./Components/footer";
import OurWork from "./Components/ourWork";
import ContactUs from "./Components/contactus";



export function App() {
return ( 
  <Router>
    <NavBar/>
    <Routes>

  
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutUs/>}/>
      <Route path="/ourwork" element={<OurWork/>} />
      <Route path="/contact" element={<ContactUs/>} />
    </Routes>
    <Footer/>
  </Router>

)
}

export default App;

