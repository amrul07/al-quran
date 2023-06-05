import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Surah from "./pages/surah";
import Fav from "./pages/fav";
// import Coba from "./pages/Coba";

// import Surah

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="surah/:nomor" element={<Surah />} />
        <Route path="fav/:nomor" element={<Fav />} />
        {/* <Route path="coba" element={<Coba />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
