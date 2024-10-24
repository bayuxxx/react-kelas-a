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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f0f4f8",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", color: "#333", marginBottom: "20px" }}>
          Nilai: {nilai}
        </h2>
        <button
          onClick={tambah}
          style={{
            padding: "12px 24px",
            marginRight: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "1rem",
            transition: "background-color 0.3s ease, transform 0.2s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        >
          Tambah
        </button>
        <button
          onClick={kurang}
          style={{
            padding: "12px 24px",
            backgroundColor: "#F44336",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "1rem",
            transition: "background-color 0.3s ease, transform 0.2s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#e53935")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#F44336")}
        >
          Kurang
        </button>
      </div>
    </div>
  );
}

export default TambahKurang;
