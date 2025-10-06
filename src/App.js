import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog.jsx";
import Products from "./pages/Products.jsx";
import Header from "./components/common/header/Header.jsx";


function App() {
  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto px-3 md:px-6 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Products />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

