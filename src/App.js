
import Header from "./components/Header";
import Filter from "./components/Filter";
import Layout from "./components/Layout";
import Country from "./components/Country";
import Countries from "./components/Countries";
import {
  RouterProvider,
  createHashRouter,
  Routes,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

function App() {
  const routes = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Countries />} />
        <Route path="/countries/:name" element={<Country />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={routes} />

    </>
  );
}

export default App;
