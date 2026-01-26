import { createRoot } from "react-dom/client";
import "./index.css";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Weather from "./components/Weather.jsx";
import Experience from "./components/Experience.jsx";


import "./styles/layout.css";
import "./styles/hero.css";
import "./styles/about.css";
import "./styles/projects.css";

function App() {
  return (
    <div className="layout">
      <aside className="layout__left">
        <div className="layout__leftInner">
          <Hero />
        </div>
      </aside>

      <main className="layout__right">
        <div className="layout__rightInner">
          <Weather />
          <About />
          <Experience />
          <Projects />
          <footer className="footer">Thankyou for visiting my website!</footer>
        </div>
      </main>
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App />);