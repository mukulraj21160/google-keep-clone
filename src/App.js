import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import Home from "./Pages/Home";
import Theme from "./Theme/Theme";

export default function App() {
  return (
    <div>
      <ThemeProvider theme={Theme}>
        <Home />
      </ThemeProvider>
    </div>
  );
}
