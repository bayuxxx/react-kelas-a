import ListSortingq from "./sortinglist";

export default function Sembako() {
  const Sembakonya = [
    { nama: "beras", harga: "15000", logo: "🌾" },
    { nama: "gula", harga: "12000", logo: "🍚" },
    { nama: "minyak", harga: "20000", logo: "🛢️" },
    { nama: "telur", harga: "22000", logo: "🥚" },
    { nama: "garam", harga: "5000", logo: "🧂" },
    { nama: "tepung", harga: "10000", logo: "🌾" },
    { nama: "bawang", harga: "30000", logo: "🧅" },
  ];

  return (
    <ol>
      {Sembakonya.map((persembako) => (
        <li key={persembako.nama}>
          <ListSortingq
            nama={persembako.nama}
            harga={persembako.harga}
            logo={persembako.logo}
          />
        </li>
      ))}
    </ol>
  );
}
