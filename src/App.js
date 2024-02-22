import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./utils/customTheme";
import Home from "./pages/Home";
import Game from "./pages/Game";
import AllComponents from "./pages/AllComponents";
import AppBarComponent from "./components/Appbar";
import "./App.css";
import { Typography } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <AppBarComponent />

          <div class="container">
            <div class="marquee">
              <Typography class="message">
                Note: Game Update " 9PM game starts at 10 Pm"
              </Typography>
            </div>
          </div>

          <div style={{ marginTop: "1px" }}>
            <Routes>
              <Route exact path="/homePage" element={<Home />} />
              <Route
                exact
                path="/components-demo"
                element={<AllComponents />}
              />
              <Route path="/game/:gameId" element={<Game />} />
              <Route path="*" element={<Navigate to="/homePage" />} />
            </Routes>
          </div>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
