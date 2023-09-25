import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import { useEffect, useState } from 'react';

import Landing from './app/sects/_landing'
import Header from './app/commons/_header';
import UrbanLux from './app/sects/_urban_lux';
import Services from './app/sects/_services';
import ServicesDesc from './app/sects/service_desc';
import About from "./app/sects/_about_us";
import Contact from "./app/sects/_contact_us";


const App = () => {
  let routes = useRoutes([
    { path: "/landing", element: <Landing /> },
    { path: "urban", element: <UrbanLux /> },
    { path: "/", element: <Services /> },
    { path: "about-us", element: <About /> },
    { path: "serve", element: <ServicesDesc /> },
    { path: "contact-us", element: <Contact /> },
    // ...
  ]);
  return routes;
}
  


const AppWrapper = () => {
     //navbar scroll when active state
     const [navbar, setNavbar] = useState(false)
     useEffect(() =>{
       debugger;
         changeBackground()
         // adding the event when scroll change background
         window.addEventListener("scroll", changeBackground)
     })
       const changeBackground = () => {
     console.log(window.scrollY)
     if (window.scrollY >= 20) {
       setNavbar(true)
     } else {
       setNavbar(false)
     }
   }
  return (
    <div className={navbar ? "mood_landing active" :"mood_landing" }>
    <Router>
      <App />
    </Router>
    </div>
  );
}

export default  AppWrapper;