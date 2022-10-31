import "./App.css";
import AboutMe from "./Pages/AboutMe";
import Home from "./Pages/Home";

import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";
import SideContent from "./Layout/SideContent";
import { initializeApp } from 'firebase/app';
import { getStorage,ref,getDownloadURL } from "firebase/storage";
function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyAOibuMGy20qP4YuX8zhJXC8xLYGwQc5Lc",
    authDomain: "my-porfolio-3de9c.firebaseapp.com",
    projectId: "my-porfolio-3de9c",
    storageBucket: "my-porfolio-3de9c.appspot.com",
    messagingSenderId: "1077779278949",
    appId: "1:1077779278949:web:1f164df0b4a6c0e2796a8c"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const storage = getStorage(app,firebaseConfig.storageBucket);

    
  

  return (
    <Routes>
      <Route element={<Layout firebaseApp={app} storage={storage} ></Layout>}>
        <Route path="*" element={<Navigate to="/home"></Navigate>}></Route>
        <Route path="/Home" element={<Home firebaseApp={app} storage={storage} ></Home>}></Route>
        <Route element={<SideContent firebaseApp={app} storage={storage}   ></SideContent>}>
          <Route path="/AboutMe" element={<AboutMe></AboutMe>}></Route>
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
