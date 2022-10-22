import "./App.css";
import AboutMe from "./Pages/AboutMe";
import Home from "./Pages/Home";

import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Education from "./Pages/Education";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";
import SideContent from "./Layout/SideContent";

function App() {
  return (
    <Routes>
      <Route element={<Layout></Layout>}>
        <Route path="*" element={<Navigate to="/home"></Navigate>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route element={<SideContent></SideContent>}>
          <Route path="/AboutMe" element={<AboutMe></AboutMe>}></Route>
          <Route path="/Education" element={<Education></Education>}></Route>
          <Route path="/Resume" element={<Resume></Resume>}></Route>
          <Route path="/Contact" element={<Contact></Contact>}></Route>
        </Route>
        {/* <Route path="/AboutMe" element={<AboutMe></AboutMe>}></Route>
        <Route path="/Education" element={<Education></Education>}></Route>
        <Route path="/Resume" element={<Resume></Resume>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route> */}
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
