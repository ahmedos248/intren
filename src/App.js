import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
<<<<<<< HEAD
import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPage";
import About from "./components/About";
=======
import Blog from "./pages/Blog.jsx";
import Products from "./pages/Products.jsx";
import Header from "./components/common/header/Header.jsx";

>>>>>>> 6568761cd9ce879c3216239c7e79cc3d6df49f88

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
<<<<<<< HEAD
      <ProductPage/>
      <About/>
=======
>>>>>>> 6568761cd9ce879c3216239c7e79cc3d6df49f88
    </div>
  );
}

export default App;

