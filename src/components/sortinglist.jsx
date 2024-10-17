export default function ListSortingq({ nama, logo, harga }) {
  return (
    <>
      {harga > 10000 ? (
        <li>
          {" "}
          {nama} {harga} {logo}
        </li>
      ) : (
        ""
      )}
    </>
  );
}
