function infoCard(){
    const info =          {
        num: "C2-92",
        razonS: "Duty Free Punta Cana, Inc. (DFA)",
        razonC: "DFA News",
        metraje: "52.43",
        ubicacion: "Muelle Norte",
    }
    return(
    <div class="card-info">
        <h1>Número: {info.num}</h1>
        <h1>Razón social: {info.razonS}</h1>
        <h1>Razón comercial: {info.razonS}</h1>
        <h1>Metraje: {info.metraje}</h1>
        <h1>Ubicación: {info.ubicacion}</h1>
    </div>
    );
}

export default infoCard;