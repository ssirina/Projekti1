
function tallennaTiedot() {
    var leipuri = document.getElementById("leipuri").value;
    var juuri = document.getElementById("juuri").value;

    sessionStorage.setItem("leipuri", leipuri);
    sessionStorage.setItem("juuri", juuri);
}

function tulostaTiedot() {
    console.log("Leipurin nimi: " + sessionStorage.getItem("leipuri"));
    console.log("Juuren nimi: " + sessionStorage.getItem("juuri"));
}

function ruokiJuuri() {
    console.log("Juuren ruokkiminen");
    // Oikeasti tämän pitäisi ensin vaihtaa sivulla näkyvä kuva,sitten vaihtaa seuraavaan näkymään
}