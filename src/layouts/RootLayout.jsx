import { NavLink, Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <NavBar />
        </nav>
      </header>
      <main style={{ marginTop: "64px", marginBottom: "64px" }}>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
