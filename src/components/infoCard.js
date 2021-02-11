function infoCard(){
    const info =         {
        num: "C2-39",
        razonS: "International Meal Company",
        razonC: "Viena",
        metraje: "34.30",
        ubicacion: "Satélite A",
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