import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#f4f4f4', display: 'flex', gap: '10px' }}>
      <Link to="/">Home</Link>
      <Link to="/fakultas">Fakultas</Link>
      <Link to="/sembako">Sembako</Link>
      <Link to="/kondisi">Kondisi</Link>
      <Link to="/pesan">Pesan</Link>
      <Link to="/tambah-kurang">TambahKurang</Link>
      <Link to="/multiple-state">MultiState</Link>
      <Link to="/form">Form</Link>
      <Link to="/list-mini">ListMini</Link>
    </nav>
  );
}

export default Navbar;
