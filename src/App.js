import { Route, Routes } from "react-router-dom";
import "./assets/css/style.css";
import "./assets/css/swap.css";
import "./assets/css/media_query.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog/Blog";
import BlogTwo from "./components/Blog/Blog/BlogTwo";
import BlogThree from "./components/Blog/Blog/BlogThree";
import BlogFour from "./components/Blog/Blog/BlogFour";
import BlogFive from "./components/Blog/Blog/BlogFive";
import BlogSix from "./components/Blog/Blog/BlogSix";
import BlogSeven from "./components/Blog/Blog/BlogSeven";
import BlogEight from "./components/Blog/Blog/BlogEight";
import SingleBlog from "./components/Blog/SingleBlog/SingleBlog";
import SingleBlogTwo from "./components/Blog/SingleBlog/SingleBlogTwo";
import SingleBlogThree from "./components/Blog/SingleBlog/SingleBlogThree";
import SingleBlogFour from "./components/Blog/SingleBlog/SingleBlogFour";
import SingleBlogFive from "./components/Blog/SingleBlog/SingleBlogFive";
import SingleBlogSix from "./components/Blog/SingleBlog/SingleBlogSix";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog2" element={<BlogTwo />} />
        <Route path="/blog3" element={<BlogThree />} />
        <Route path="/blog4" element={<BlogFour />} />
        <Route path="/blog5" element={<BlogFive />} />
        <Route path="/blog6" element={<BlogSix />} />
        <Route path="/blog7" element={<BlogSeven />} />
        <Route path="/blog8" element={<BlogEight />} />
        <Route path="/single_blog" element={<SingleBlog />} />
        <Route path="/single_blog2" element={<SingleBlogTwo />} />
        <Route path="/single_blog3" element={<SingleBlogThree />} />
        <Route path="/single_blog4" element={<SingleBlogFour />} />
        <Route path="/single_blog5" element={<SingleBlogFive />} />
        <Route path="/single_blog6" element={<SingleBlogSix />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
