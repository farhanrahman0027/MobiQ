import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Ensure this path is correct
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Blog from './pages/Blog';
import Footer from './components/Footer';
import Phones from './pages/Phones';
import ProductDetails from './pages/ProductDetails';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;



