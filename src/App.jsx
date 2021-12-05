import './app.scss';
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portofolio from "./components/portofolio/Portofolio";
import Works from "./components/work/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="app">
      <Topbar/>
    <div className="sections">
        <Intro/>
        <Portofolio/>
        <Works/>
        <Testimonials/>
        <Contact/>
    </div>
    </div>
  );
}

export default App;
