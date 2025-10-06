import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog.jsx";
import Header from "./components/common/header/Header.jsx";
import Product from "./pages/Product.jsx"
import About from "./pages/About.jsx";

function App() {
  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto px-3 md:px-6 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Product />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

