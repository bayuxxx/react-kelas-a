import { useState } from "react";
export default function Multiplestate() {
  const [hitung, penghitung] = useState(0);
  const [dihitungdengan, aturdidihitungdengan] = useState(1);
  function Tambahklik() {
    penghitung(hitung + dihitungdengan);
  }
  function Kurangklik() {
    penghitung(hitung - dihitungdengan);
  }

  function Kliktambahan() {
    aturdidihitungdengan(dihitungdengan + 1);
  }
  function Klikkurang() {
    aturdidihitungdengan(dihitungdengan - 1);
  }
  return (
    <>
      <div>
        <h1> ini State berbeda pperhitungan saat ini adalah:{hitung}</h1>
        <button onClick={Tambahklik}>ini fungsi tambah</button>
        <button onClick={Kurangklik}>ini fungsi kurang</button>
      </div>
      <h2>Kita tambahkan dengan jumlah yang ada di bawahnya: {dihitungdengan}</h2>
      <button onClick={Kliktambahan}>ini fungsi tambah</button>
      <button onClick={Klikkurang}>ini funsgi kurang</button>
    </>
  );
}
