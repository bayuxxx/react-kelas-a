export default function ListSortingq({ nama, logo, harga }) {
  return (
    <>
      {harga > 10000 ? (
        <>
          {nama} {harga} {logo}
        </>
      ) : (
        ""
      )}
    </>
  );
}
