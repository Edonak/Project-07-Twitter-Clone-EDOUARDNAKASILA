import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import Layout from './components/layout';
import Profile from './pages/profile';
import './style/reset.css';
import './style/App.css';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:user" element={<Profile />} />
        </Routes>
      </Layout>
    </Router>
  );
}