import Abi from './components/kelasa';
import Mantan from './components/properti';
import Fakultasubg from './components/Listing';
import Sembako from './components/arrayject';
import Kondisi from './components/Perkondisian';
import Pesan from './components/button/pesan_button';
import TambahKurang from './components/button/state_hook';
import Multiplestate from './components/button/multiple_state_hook';
function App() {

  return (
    <>
      {/* <h1>Hanya ada di App.jsx</h1>
      <Abi />
      <Mantan nama = "Lutfi" kelas = "A" hobi = "Mabuk"/>
      <Mantan nama = "Apria" kelas = "A" hobi = "Mencintai Suci"/>
      <Mantan nama = "Pandu" kelas = "A" hobi = "Loving"/> */}
      <Fakultasubg />
      <Sembako />
      <Kondisi />
      <Pesan />
      <TambahKurang />
      <Multiplestate />
    </>
  );
}

export default App;
