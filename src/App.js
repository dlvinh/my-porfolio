import "./App.css";
import AboutMe from "./Pages/AboutMe";
import Home from "./Pages/Home";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Layout/Layout";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";
import SideContent from "./Layout/SideContent";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialFirebaseApp } from "./Services/FirebaseService";

function App() {
  const dispatch = useDispatch();
  const {storage,app} = useSelector((state)=>{
    return state.FireStoreState
  });

  const location = useLocation();
  useEffect(() => {
    if(!storage){
      dispatch(initialFirebaseApp());
    }
  }, []);
  return (
    // <AnimatePresence>
    
    <Routes  location={location} key={location.pathname}>
      <Route basename="my-porfolio" element={<Layout ></Layout>}>
        <Route path="*" element={<Navigate to="/Home"></Navigate>}></Route>
        <Route path="/Home" element={ <Home></Home>}></Route>
        <Route element={<SideContent ></SideContent>}>
          <Route path="/AboutMe" element={<AboutMe></AboutMe>}></Route>
          <Route path="/Resume" element={<Resume></Resume>}></Route>
          <Route path="/Contact" element={<Contact></Contact>}></Route>
        </Route>
      </Route>
    </Routes>
    // {/* </AnimatePresence> */}
   
  );
}

export default App;
