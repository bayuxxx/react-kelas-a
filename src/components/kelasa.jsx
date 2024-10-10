import Rae from "/src/assets/rae.jpg";

const nama = "saya variabel bernama pandu"

function Inifunction() {
    return "Luffy adalah sanz"
}

function Abi() {
    return (
        <div>
            ("")
            <h2>Panggil dari firstcomponent</h2>
            <h1>{nama}</h1>
            <h3>{Inifunction()}</h3>
            <img src={Rae} alt="Gambar" />
        </div>
    )
}

export default Abi;
