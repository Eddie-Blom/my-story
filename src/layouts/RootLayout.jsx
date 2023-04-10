import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  overflow-y: scroll;
  scrollbar-width: none; /* hide scrollbar on Firefox */
  -ms-overflow-style: none; /* hide scrollbar on IE 11 */
  &::-webkit-scrollbar {
    width: 0px; /* hide scrollbar on Chrome, Safari, and Opera */
    height: 0px;
  }
  ${({ themeMode }) =>
    themeMode === "light"
      ? `
          background-color: #0093e9;
          background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
        `
      : `
          background-image: linear-gradient(
            35.2deg,
            rgba(0, 119, 182, 1) -18.7%,
            rgba(8, 24, 68, 1) 54.3%
          );
        `}
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
      <Container themeMode={themeMode}>
        <main style={{ marginTop: "64px", marginBottom: "64px" }}>
          <Outlet />
        </main>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}