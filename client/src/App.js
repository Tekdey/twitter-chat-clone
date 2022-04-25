import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Messages from "./pages/Messages/Messages";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex">
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/messages" element={<Messages />} />
        </Route>
        {/* <Route path="/test" element={<Test />} /> */}
      </Routes>
    </div>
  );
}

export default App;
