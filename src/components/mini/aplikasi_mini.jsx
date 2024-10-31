import { useState } from "react";
import "./Ngelistgan.css";

export default function Ngelistgan() {
  const [Aksi, Aturaksi] = useState([]);
  const [Tugas, AturTugas] = useState("");

  const TambahKerjaan = () => {
    if (Tugas.trim()) {
      Aturaksi([...Aksi, { text: Tugas, id: Date.now() }]);
      AturTugas("");
    }
  };

  const Hapuskerjaan = (id) => {
    const Dikonfirmasi = window.confirm("Yakin ingin menghapus?");
    if (Dikonfirmasi) {
      Aturaksi(Aksi.filter((gasskn) => gasskn.id !== id));
    }
  };

  return (
    <div className="container">
      <h1>Daily Life of Kirito</h1>
      <input
        type="text"
        value={Tugas}
        onChange={(t) => AturTugas(t.target.value)}
      />
      <button onClick={TambahKerjaan}>Masukkan</button>
      <ol>
        {Aksi.map((gasskn) => (
          <li key={gasskn.id}>
            {gasskn.text}
            <button onClick={() => Hapuskerjaan(gasskn.id)}>Hapus</button>
          </li>
        ))}
      </ol>
    </div>
  );
}
