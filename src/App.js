import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
