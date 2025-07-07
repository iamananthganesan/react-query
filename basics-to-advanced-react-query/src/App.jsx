import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import ReactQueryFetch from "./components/ReactQueryFetch";
import RegularFetch from "./components/RegularFetch";
import ReactQueryFetchByClick from "./components/ReactQueryFetchByClick";
import ReactQueryById from "./components/ReactQueryById";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/regularfetch" element={<RegularFetch />} />
          <Route path="/reactqueryfetch" element={<ReactQueryFetch />} />
          <Route
            path="/reactqueryfetchbyclick"
            element={<ReactQueryFetchByClick />}
          />
          <Route path="/reactquerybyid/:id" element={<ReactQueryById />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
