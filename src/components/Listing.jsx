function Fakultasubg() {
    const fakultas = ["teknik", "kesehatan", "ekonomi", "desain"];

    return (
        <>
            <ul>
                {fakultas.map((fakultas) => (
                    <li>{fakultas}</li>
                ))}
            </ul>        
        </>
    );
}

export default Fakultasubg;
