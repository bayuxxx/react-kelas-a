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
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f0f4f8",
      fontFamily: "'Roboto', sans-serif",
    }}>
      <div style={{
        backgroundColor: "#fff",
        padding: "30px",
        borderRadius: "15px",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }}>
        <h1 style={{ fontSize: "2rem", color: "#333", marginBottom: "20px" }}>
          Ini State berbeda, perhitungan saat ini adalah: {hitung}
        </h1>
        <button
          onClick={Tambahklik}
          style={buttonStyle("#4CAF50")}
        >
          Ini fungsi tambah
        </button>
        <button
          onClick={Kurangklik}
          style={buttonStyle("#F44336")}
        >
          Ini fungsi kurang
        </button>
      </div>
      <h2 style={{ fontSize: "1.5rem", color: "#333", margin: "20px 0" }}>
        Kita tambahkan dengan jumlah yang ada di bawahnya: {dihitungdengan}
      </h2>
      <div style={{
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }}>
        <button
          onClick={Kliktambahan}
          style={buttonStyle("#4CAF50")}
        >
          Ini fungsi tambah
        </button>
        <button
          onClick={Klikkurang}
          style={buttonStyle("#F44336")}
        >
          Ini fungsi kurang
        </button>
      </div>
    </div>
  );
}

// Styling for buttons with hover effect
const buttonStyle = (backgroundColor) => ({
  padding: "12px 24px",
  margin: "10px",
  backgroundColor,
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "1rem",
  transition: "background-color 0.3s ease, transform 0.2s ease",
});

// Hover effect for buttons
const hoverEffect = (e, color) => {
  e.target.style.backgroundColor = color;
};
