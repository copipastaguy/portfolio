import "./App.css";
import NavBar from "./component/NavBar/NavBar.js";
import Masthead from "./component/Masthead/Masthead";
import Sidebar from "./component/Sidebar/Sidebar";
import About from "./component/About/About";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Sidebar />
      <Masthead />
      <About />
      <Footer />
    </div>
  );
}

export default App;
