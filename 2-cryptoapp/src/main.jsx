import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store/store.js";
import { Home, Coins, CoinDetails, Exhanges } from "./components/index.js";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="coins/:id" element={<Coins />} />
      <Route path="coins" element={<Coins />} />
      <Route path="exchanges" element={<Exhanges />} />
      <Route path="coindetails/:id" element={<CoinDetails />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <Provider store={store}>
      <App />
    </Provider>
  </RouterProvider>
);

export const server = `https://api.coingecko.com/api/v3`;
