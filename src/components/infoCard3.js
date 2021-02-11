function infoCard(){
    const info =          {
        num: "C2-46",
        razonS: "Kedef, S.A. (TQUENDAMA)",
        razonC: "Crocs",
        metraje: "20.67",
        ubicacion: "Zonita Libre",
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