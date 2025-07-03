import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import ReactQueryFetch from "./components/ReactQueryFetch";
import RegularFetch from "./components/RegularFetch";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/regularfetch" element={<RegularFetch />} />
          <Route path="reactqueryfetch" element={<ReactQueryFetch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
