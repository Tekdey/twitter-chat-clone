import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import "./App.css";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
        {/* <Route path="/test" element={<Test />} /> */}
      </Routes>
    </div>
  );
}

export default App;
