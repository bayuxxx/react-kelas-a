import { useState } from "react";
import "./Ngelistgan.css";

export default function Ngelistgan() {
  const [Aksi, Aturaksi] = useState([]);
  const [Tugas, AturTugas] = useState("");
  const [editId, setEditId] = useState(null); // State untuk menyimpan ID yang sedang diedit

  const TambahKerjaan = () => {
    if (Tugas.trim()) {
      if (editId) {
        // Jika ada ID yang sedang diedit, update tugas yang ada
        Aturaksi(Aksi.map((item) => (item.id === editId ? { ...item, text: Tugas } : item)));
        setEditId(null); // Reset editId setelah edit
      } else {
        // Tambah tugas baru
        Aturaksi([...Aksi, { text: Tugas, id: Date.now() }]);
      }
      AturTugas("");
    }
  };

  const Hapuskerjaan = (id) => {
    const Dikonfirmasi = window.confirm("Yakin ingin menghapus?");
    if (Dikonfirmasi) {
      Aturaksi(Aksi.filter((gasskn) => gasskn.id !== id));
    }
  };

  const EditKerjaan = (id, text) => {
    setEditId(id); // Set ID tugas yang akan diedit
    AturTugas(text); // Set nilai input dengan text tugas yang akan diedit
  };

  return (
    <div className="container">
      <h1>Daily Life of Kirito</h1>
      <input
        type="text"
        value={Tugas}
        onChange={(t) => AturTugas(t.target.value)}
      />
      <button onClick={TambahKerjaan}>{editId ? "Update" : "Masukkan"}</button>
      <ol>
        {Aksi.map((gasskn) => (
          <li key={gasskn.id}>
            {gasskn.text}
            <button onClick={() => EditKerjaan(gasskn.id, gasskn.text)}>Edit</button>
            <button onClick={() => Hapuskerjaan(gasskn.id)}>Hapus</button>
          </li>
        ))}
      </ol>
    </div>
  );
}
