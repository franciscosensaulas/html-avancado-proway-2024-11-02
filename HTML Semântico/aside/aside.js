function toggle(elementoId) {
    let elemento = document.getElementById(elementoId);
    if (elemento.style.display === "none" || elemento.style.display === "") {
        elemento.style.display = "block";
    } else {
        elemento.style.display = "none";
    }
}