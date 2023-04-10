import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Cart from "./pages/Cart";


// Layouts
import RootLayout from "./layouts/RootLayout";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return ( 
    <RouterProvider router={router} />
  )
}

export default App;
