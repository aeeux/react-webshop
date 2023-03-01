import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";

//pages
import Home from "./pages/Home";
import LoremIpsum from "./pages/LoremIpsum";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="/lorem" element={<LoremIpsum />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
