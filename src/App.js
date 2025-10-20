import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog.jsx";
import Header from "./components/common/header/Header.jsx";
import Product from "./pages/Product.jsx"
import About from "./pages/About.jsx";
import WishlistPage from "./pages/WishlistPage.jsx";
import Contact from "./pages/Contact.jsx";
import ShoppingCart from "./pages/ShoppingCart";
import CollectionPage from "./pages/CollectionPage.jsx";
import Shop from "./pages/Shop.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto px-3 md:px-6 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/collection/:id" element={<CollectionPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/shoppingcart" element={<ShoppingCart/>} />

        </Routes>
      </div>
    </div>
  );
}

export default App;

