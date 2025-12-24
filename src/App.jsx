import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Sermons from './pages/Sermons';
import Ministries from './pages/Ministries';
import Contact from './pages/Contact';
import Donation from './pages/Donation';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donation" element={<Donation />} />
      </Routes>
    </Layout>
  );
}

export default App;
