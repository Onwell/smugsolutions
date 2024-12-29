import { Route, Routes } from "react-router-dom";
import "./assets/css/style.css";
import "./assets/css/swap.css";
import "./assets/css/media_query.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import BlogTwo from "./components/Blog/Blog/BlogTwo";
import SingleBlog from "./components/Blog/SingleBlog/SingleBlog";
import SingleBlogTwo from "./components/Blog/SingleBlog/SingleBlogTwo";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog2" element={<BlogTwo />} />
        <Route path="/single_blog2" element={<SingleBlogTwo />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;