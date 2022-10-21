import "./App.css";
import Navbar from "./Components/Navbar";
import AboutMe from "./Pages/AboutMe";
import Home from "./Pages/Home";

import {Route, Routes} from 'react-router-dom'
import Layout from "./Layout/Layout";
import Education from "./Pages/Education";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Routes>
      <Route element={<Layout></Layout>}>
          <Route path="/*" element={<Home></Home>}></Route>
          <Route path="/AboutMe" element={<AboutMe></AboutMe>}></Route>
          <Route path="/Education" element={<Education></Education>}></Route>
          <Route path="/Resume" element = {<Resume></Resume>}></Route>
          <Route path="/Contact" element ={<Contact></Contact>}></Route>
      </Route>
    </Routes>
    // <section className="main">
    //   <Navbar></Navbar>
    //   <section className="main-content">
    //     <Home></Home>
    //     {/* <AboutMe></AboutMe> */}
    //   </section>
    // </section>
  );
}

export default App;
