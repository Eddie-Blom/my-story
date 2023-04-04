import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const LightContainer = styled.div`
  height: 100vh;
  overflow-y: auto;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
`;

const DarkContainer = styled.div`
  height: 100vh;
  overflow-y: auto;
  background-image: linear-gradient(
    35.2deg,
    rgba(0, 119, 182, 1) -18.7%,
    rgba(8, 24, 68, 1) 54.3%
  );
`;

export default function RootLayout() {
  const [themeMode, setThemeMode] = React.useState("dark");

  const toggleTheme = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  };

  const lightTheme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: "light",
        },
      }),
    []
  );

  const darkTheme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
        },
      }),
    []
  );

  return (
    <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
      <NavBar toggleTheme={toggleTheme} />
      {themeMode === "light" ? (
        <LightContainer>
          <main style={{ marginTop: "64px", marginBottom: "64px" }}>
            <Outlet />
          </main>
        </LightContainer>
      ) : (
        <DarkContainer>
          <main style={{ marginTop: "64px", marginBottom: "64px" }}>
            <Outlet />
          </main>
        </DarkContainer>
      )}
      <Footer />
    </ThemeProvider>
  );
}
