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
import Booking from "./app/sects/_booking";
import Contact from "./app/sects/_contact_us";
import EntrLanding from "./app/sects/_entry_landing";
import Men from "./app/sects/men/";
import Ladies from "./app/sects/ladies";

import { NavLink } from 'react-router-dom';


const App = () => {
  let routes = useRoutes([
    { path: "/landing", element: <Landing /> },
    { path: "urban", element: <UrbanLux /> },
    { path: "/", element: <EntrLanding /> },
    { path: "about-us", element: <About /> },
    { path: "serve", element: <ServicesDesc /> },
    { path: "contact-us", element: <Contact /> },
    { path: "booking", element: <Booking /> },
    { path: "welcome", element: <EntrLanding /> },
    { path: "ladies", element: <Ladies /> },
    { path: "gentlemen", element: <Men /> },
    // ...
  ]);
  return routes;
}
  


const AppWrapper = () => {
     //navbar scroll when active state
     const [navbar, setNavbar] = useState(false)
     useEffect(() =>{
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
    <Router>
    <div className={navbar ? "mood_landing active" :"mood_landing" }>
      <App />

{/*       
      <button className="book_now">
      <NavLink  to="/booking">
      <span>BOOK</span>
      <span>NOW</span>
      </NavLink>
      </button> */}

    </div>

    </Router>
  );
}

export default  AppWrapper;