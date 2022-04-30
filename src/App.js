import "./App.css";
import NavBar from "./component/NavBar/NavBar.js";
import Masthead from "./component/Masthead/Masthead";
import Sidebar from "./component/Sidebar/Sidebar";
import About from "./component/About/About";
import Footer from "./component/Footer/Footer";

// Routes
import Contact from "./component/Contact/Contact";
import Works from "./component/Works/Works";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Sidebar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Masthead /> <About />
                <Footer />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
