
function Pesan() {
  function PengurusKlik() {
    alert("tombol terklik")
  }
  return (
    <>
      <button onClick={PengurusKlik}>Kirim Pesan</button>
    </>
  );
}

export default Pesan;
