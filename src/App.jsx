import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Fakultasubg from './components/Listing';
import Sembako from './components/arrayject';
import Kondisi from './components/Perkondisian';
import Pesan from './components/button/pesan_button';
import TambahKurang from './components/button/state_hook';
import Multiplestate from './components/button/multiple_state_hook';
import TestForm from './components/button/isian';
import Ngelistgan from './components/mini/aplikasi_mini';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Welcome to the App!</h1>} />
        <Route path="/fakultas" element={<Fakultasubg />} />
        <Route path="/sembako" element={<Sembako />} />
        <Route path="/kondisi" element={<Kondisi />} />
        <Route path="/pesan" element={<Pesan />} />
        <Route path="/tambah-kurang" element={<TambahKurang />} />
        <Route path="/multiple-state" element={<Multiplestate />} />
        <Route path="/form" element={<TestForm />} />
        <Route path="/list-mini" element={<Ngelistgan />} />
      </Routes>
    </Router>
  );
}

export default App;
