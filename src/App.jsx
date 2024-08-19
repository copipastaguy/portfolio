import { Grid } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";

import Masthead from "./component/Masthead/Masthead";
import NavBar from "./component/NavBar/NavBar.jsx";
import Works from "./component/Works/Works";

// import Sidebar from "./component/Sidebar/Sidebar";
import About from "./component/About/About";
import Footer from "./component/Footer/Footer";
import Banner from "./component/Banner/Banner";

// Routes
// import Contact from "./component/Contact/Contact";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
    typography: {
      fontFamily: ["Montserrat", "Roboto", "monospace"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container width="100%" sx={{ margin: "0 auto" }}>
        <div className="App">
          <div className="container"></div>
          {/* <Banner /> */}
          <NavBar />
          <Masthead />

          {/* <Sidebar /> */}
          <Works />
          <About />
          {/* <Footer /> */}
        </div>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
