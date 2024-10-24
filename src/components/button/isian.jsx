import React, { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert

function TestForm() {
  // State untuk menyimpan input nama dan wakil presiden
  const [nama, setNama] = useState("");
  const [wakilPresiden, setWakilPresiden] = useState("");

  // Function untuk menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Menampilkan hasil input menggunakan SweetAlert
    Swal.fire({
      title: "Hasil Input!",
      html: `<strong>Nama Presiden:</strong> ${nama} <br/><strong>Wakil Presiden:</strong> ${wakilPresiden}`,
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Form Presiden dan Wakil Presiden</h2>

      <form onSubmit={handleSubmit}>
        {/* Input untuk Nama Presiden */}
        <div>
          <label>Nama Presiden: </label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            style={{ padding: "5px", margin: "10px" }}
          />
        </div>

        {/* Input untuk Wakil Presiden */}
        <div>
          <label>Nama Wakil Presiden: </label>
          <input
            type="text"
            value={wakilPresiden}
            onChange={(e) => setWakilPresiden(e.target.value)}
            style={{ padding: "5px", margin: "10px" }}
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#6200EA",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default TestForm;
