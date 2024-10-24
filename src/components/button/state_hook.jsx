import React, { useState } from "react";

function TambahKurang() {
  // State untuk menyimpan nilai
  const [nilai, setNilai] = useState(0);

  // Function untuk menambah nilai
  const tambah = () => {
    setNilai(nilai + 1);
  };

  // Function untuk mengurangi nilai
  const kurang = () => {
    if (nilai > 0) {
      setNilai(nilai - 1);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Nilai: {nilai}</h2>
      <button
        onClick={tambah}
        style={{
          padding: "10px",
          marginRight: "10px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Tambah
      </button>
      <button
        onClick={kurang}
        style={{
          padding: "10px",
          backgroundColor: "#F44336",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Kurang
      </button>
    </div>
  );
}

export default TambahKurang;
