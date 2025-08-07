import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layour from "./Layour";
import Home from "./Pages/Home";
import Insert from "./Pages/Insert";
import Dashboard from "./Pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layour />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
        </Route>

        <Route path="dashboard" element={<Dashboard />}>
          <Route path="insert" element={<Insert />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
