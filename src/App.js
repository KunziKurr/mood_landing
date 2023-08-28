import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
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
  return (
    <div className="mood_landing">
    <Router>
      <App />
    </Router>
    </div>
  );
}

export default  AppWrapper;