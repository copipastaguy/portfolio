import "./App.css";
import NavBar from "./component/NavBar/NavBar.js";
import Masthead from "./component/Masthead/Masthead";
import Sidebar from "./component/Sidebar/Sidebar";
import About from "./component/About/About";
import Footer from "./component/Footer/Footer";

// Routes
import Contact from "./component/Contact/Contact";
import Works from "./component/Works/Works";
import Cookie from "./component/Cookie/Cookie";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Masthead />
      {/* <Sidebar /> */}
      <Works />
      <Footer />
    </div>
  );
}

export default App;
