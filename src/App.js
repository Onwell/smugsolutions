import { Route, Routes } from "react-router-dom";
import "./assets/css/style.css";
import "./assets/css/swap.css";
import "./assets/css/media_query.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services/Services";
import ServicesPageTwo from "./components/Services/Services/ServicesPageTwo";
import ServicesPageThree from "./components/Services/Services/ServicesPageThree";
import ServicesPageFour from "./components/Services/Services/ServicesPageFour";
import ServicesPageFive from "./components/Services/Services/ServicesPageFive";
import SingleServices from "./components/Services/SingleServices/SingleServices";
import SingleServicesTwo from "./components/Services/SingleServices/SingleServicesTwo";
import SingleServicesThree from "./components/Services/SingleServices/SingleServicesThree";
import SingleServicesFour from "./components/Services/SingleServices/SingleServicesFour";
import SingleServicesFive from "./components/Services/SingleServices/SingleServicesFive";
import Portfolio from "./components/Portfolio/Portfolio/Portfolio";
import PortfolioPageTwo from "./components/Portfolio/Portfolio/PortfolioPageTwo";
import PortfolioPageThree from "./components/Portfolio/Portfolio/PortfolioPageThree";
import PortfolioPageFour from "./components/Portfolio/Portfolio/PortfolioPageFour";
import PortfolioPageFive from "./components/Portfolio/Portfolio/PortfolioPageFive";
import PortfolioPageSix from "./components/Portfolio/Portfolio/PortfolioPageSix";
import PortfolioPageSeven from "./components/Portfolio/Portfolio/PortfolioPageSeven";
import PortfolioPageEight from "./components/Portfolio/Portfolio/PortfolioPageEight";
import PortfolioPageNine from "./components/Portfolio/Portfolio/PortfolioPageNine";
import SinglePortfolio from "./components/Portfolio/SinglePortFolio/SinglePortfolio";
import SinglePortfolioTwo from "./components/Portfolio/SinglePortFolio/SinglePortfolioTwo";
import SinglePortfolioThree from "./components/Portfolio/SinglePortFolio/SinglePortfolioThree";
import SinglePortfolioFour from "./components/Portfolio/SinglePortFolio/SinglePortfolioFour";
import SinglePortfolioFive from "./components/Portfolio/SinglePortFolio/SinglePortfolioFive";
import SinglePortfolioSix from "./components/Portfolio/SinglePortFolio/SinglePortfolioSix";
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
        <Route path="/services" element={<Services />} />
        <Route path="/services2" element={<ServicesPageTwo />} />
        <Route path="/services3" element={<ServicesPageThree />} />
        <Route path="/services4" element={<ServicesPageFour />} />
        <Route path="/services5" element={<ServicesPageFive />} />
        <Route path="/single_services" element={<SingleServices />} />
        <Route path="/single_services2" element={<SingleServicesTwo />} />
        <Route path="/single_services3" element={<SingleServicesThree />} />
        <Route path="/single_services4" element={<SingleServicesFour />} />
        <Route path="/single_services5" element={<SingleServicesFive />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio2" element={<PortfolioPageTwo />} />
        <Route path="/portfolio3" element={<PortfolioPageThree />} />
        <Route path="/portfolio4" element={<PortfolioPageFour />} />
        <Route path="/portfolio5" element={<PortfolioPageFive />} />
        <Route path="/portfolio6" element={<PortfolioPageSix />} />
        <Route path="/portfolio7" element={<PortfolioPageSeven />} />
        <Route path="/portfolio8" element={<PortfolioPageEight />} />
        <Route path="/portfolio9" element={<PortfolioPageNine />} />
        <Route path="/single_portfolio" element={<SinglePortfolio />} />
        <Route path="/single_portfolio2" element={<SinglePortfolioTwo />} />
        <Route path="/single_portfolio3" element={<SinglePortfolioThree />} />
        <Route path="/single_portfolio4" element={<SinglePortfolioFour />} />
        <Route path="/single_portfolio5" element={<SinglePortfolioFive />} />
        <Route path="/single_portfolio6" element={<SinglePortfolioSix />} />
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
