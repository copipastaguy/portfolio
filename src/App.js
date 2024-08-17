import { Grid } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";

import Masthead from "./component/Masthead/Masthead";
import NavBar from "./component/NavBar/NavBar.js";
import Works from "./component/Works/Works";
import Footer from "./component/Footer/Footer";

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
      <Grid container width="95vw" sx={{ margin: "0 auto" }}>
        <div className="App">
          <div className="container"></div>
          <NavBar />
          <Masthead />
          <Works />
          {/* <About /> */}
          <Footer />
        </div>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
