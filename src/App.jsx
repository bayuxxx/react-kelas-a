import Abi from './components/kelasa';
import Mantan from './components/properti';
import Fakultasubg from './components/Listing';

function App() {

  return (
    <>
      <h1>Hanya ada di App.jsx</h1>
      <Abi />
      <Mantan nama = "Lutfi" kelas = "A" hobi = "Mabuk"/>
      <Mantan nama = "Apria" kelas = "A" hobi = "Mencintai Suci"/>
      <Mantan nama = "Pandu" kelas = "A" hobi = "Loving"/>
      <Fakultasubg />
    </>
  );
}

export default App;
