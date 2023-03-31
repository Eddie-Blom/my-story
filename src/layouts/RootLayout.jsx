import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  const [themeMode, setThemeMode] = React.useState("dark");

  const toggleTheme = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  };

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode === "light" ? "light" : "dark",
        },
      }),
    [themeMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="root-layout">
        <header>
          <nav>
            <NavBar toggleTheme={toggleTheme} />
          </nav>
        </header>
        <main style={{ marginTop: "64px", marginBottom: "64px" }}>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </ThemeProvider>
  );
}