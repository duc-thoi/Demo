import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import BlogDetailBlog from "./pages/BlogDetailBlog";
import Projects from "./pages/Projects";
import Newsletter from "./pages/Newsletter";
import LigthMode from "./pages/LightMode";
import DarkMode from "./pages/DarkMode";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/projects":
        title = "";
        metaDescription = "";
        break;
      case "/newsletter":
        title = "";
        metaDescription = "";
        break;
      case "/ligth-mode":
        title = "";
        metaDescription = "";
        break;
      case "/dark-mode":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<BlogDetailBlog />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/newsletter" element={<Newsletter />} />
      <Route path="/ligth-mode" element={<LigthMode />} />
      <Route path="/dark-mode" element={<DarkMode />} />
    </Routes>
  );
}
export default App;
