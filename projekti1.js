//ENSIMMÄINEN SIVU

//Validoidaan formi (oma nimi ja juuren nimi)

var nimetOk = false;
function tarkastus() {
    var nimi = document.getElementById("leipuri").value;
    var juuri = document.getElementById("juuri").value;
    if (nimi !== "" || juuri !== "") {
        nimetOk = true;
    } else {
        if(nimi == "") {
            document.getElementById("leipuri").style.border = "solid red";
        }
        if(juuri == "") {
            document.getElementById("juuri").style.border = "solid red";
        }
        alert("Kerro ensin nimesi ja leipäjuuresi nimi!");
       
    }
}

// Ensin Validointi-funktion hyödyntäminen, jos ok, tallennetaan leipurin ja juuren nimi sessionStoragea hyödyntäen

function tallennaTiedot() {
    tarkastus();    
    if(nimetOk == true) {
        var leipuri = document.getElementById("leipuri").value;
        var juuri = document.getElementById("juuri").value;

        sessionStorage.setItem("leipuri", leipuri);
        sessionStorage.setItem("juuri", juuri + "-juuri");

        document.getElementById("leipaValinta").style.display = "inline";
        document.getElementById("form").style.display = "none";

        document.getElementsByClassName("progress-bar")[0].style.width = "5%";

        vaihdaLeipuri();
        vaihdaJuuri();
    }
}
    

//Muuta kaikki dokumentin leipuri-sanat leipurin nimeksi, ja juuri-sanat juuren nimeksi

function vaihdaLeipuri() {
    document.body.innerHTML = document.body.innerHTML.replace(/LEIPURI/g, sessionStorage.getItem("leipuri"));
}

function vaihdaJuuri() {
    document.body.innerHTML = document.body.innerHTML.replace(/JUURI/g, sessionStorage.getItem("juuri"));
}

//Tallennetaan leipävalinta sessionStorageen, siirretään progress baria ja siirrytään seuraavaan näkymään

function tallennaValinta() {
    var leipa = document.getElementById("leivat").value;
    sessionStorage.setItem("leipa", leipa);

    document.getElementsByClassName("progress-bar")[0].style.width = "10%";


    document.getElementById("tervetulosivu").style.display ="none";
    document.getElementById("leipaValinta").style.display = "none";
    document.getElementById("aloitetaan").style.display = "inline";
}

// SIVUSTOLLA NÄKYVÄN KUVAN VAIHTAMINEN
//Hyödynnetään muissa funktioissa
//vaihdetaan kuva sen perusteella mikä leipä on valittu

var i = 1;
function naytaKuva() {
    if(sessionStorage.getItem("leipa") == "vehna" || sessionStorage.getItem("leipa") == null) {
        document.getElementById("image").src = vehnaImgArray[i].src;
        i++;
    } else {
        document.getElementById("image").src = sekaImgArray[i].src;
        i++;
    }
}

// TOINEN SIVU
// Nappi pois käytöstä, kuvien vaihto, seuraavan Divin näyttäminen ja olemassaolevan piilotus, progress-bar etenee

function ruokiJuuri() {
    document.getElementById("ruokiBtn").disabled=true;

    naytaKuva()
    setTimeout(function() {naytaKuva();}, 1000);
    setTimeout(function() {seuraava()}, 2000);

    function seuraava() {
        document.getElementById("aloitetaan").style.display = "none";
        document.getElementById("sekoitaTaikina").style.display = "inline";

    }
    document.getElementsByClassName("progress-bar")[0].style.width = "15%";
    setTimeout(function() {document.getElementsByClassName("progress-bar")[0].style.width = "20%";}, 1000);

}

//KOLMAS SIVU
// Nappi pois käytöstä, kuvien vaihto, seuraavan Divin näyttäminen ja olemassaolevan piilotus, progress-bar etenee

function sekoitaTaikina() {
    document.getElementById("sekoitaBtn").disabled=true;

    naytaKuva()
    setTimeout(function() {naytaKuva();}, 1000);
    setTimeout(function() {seuraava()}, 2000);

    function seuraava() {
        document.getElementById("sekoitaTaikina").style.display = "none";
        document.getElementById("autolyysi").style.display = "inline";
    }

    document.getElementsByClassName("progress-bar")[0].style.width = "25%";
    setTimeout(function() {document.getElementsByClassName("progress-bar")[0].style.width = "30%";}, 1000);

}

// NELJÄS SIVU
// Nappi pois käytöstä, kuvien vaihto, seuraavan Divin näyttäminen ja olemassaolevan piilotus, progress-bar etenee

function autolyysi() {
    document.getElementById("autolyysiBtn").disabled=true;

    naytaKuva()
    setTimeout(function() {seuraava()}, 1000);

    function seuraava() {
        document.getElementById("autolyysi").style.display = "none";
        document.getElementById("taittele").style.display = "inline";
    }

    document.getElementsByClassName("progress-bar")[0].style.width = "35%";
}

    
//VIIDES SIVU

// Nappi pois käytöstä, kuvien vaihto, toisen napin enablointi, progress-bar etenee

function suolaa() {
    document.getElementById("suolaaBtn").disabled=true;
    naytaKuva()
    setTimeout(function() {naytaKuva();}, 1000);
    setTimeout(function() {document.getElementById("taitteleBtn").disabled=false;}, 2000);
    document.getElementsByClassName("progress-bar")[0].style.width = "40%";

}

// tarkistetaan kuinka monta taittelua on takana ja taitellaan kaksi kertaa
// kerätään taitteluiden määrä (count), kahden jälkeen pitäisi siirtyä seuraavaan diviin. Tätä hyödynnetään myös progress barin etenemisessä.

var count = 0;
function taittele() {
    if(count < 2) {
        document.getElementById("taitteleBtn").disabled=true;
        naytaKuva()
        setTimeout(function() {naytaKuva();}, 1000);
        setTimeout(function() {naytaKuva();}, 2000);
        if(count < 1) {
            setTimeout(function() {document.getElementById("taitteleBtn").disabled=false;}, 2500);
            document.getElementsByClassName("progress-bar")[0].style.width = "45%";
            }
        }
        count+=1;
        if(count == 2) {
            setTimeout(function() {seuraava()}, 3000);
            document.getElementsByClassName("progress-bar")[0].style.width = "50%";

            function seuraava() {
                document.getElementById("taittele").style.display = "none";
                document.getElementById("kohota").style.display = "inline";
        }
    }
}

// KUUDES SIVU
// Nappi pois käytöstä, kuvien vaihto, seuraavan Divin näyttäminen ja olemassaolevan piilotus, progress-bar etenee

function kohota() {
    document.getElementById("kohotaBtn").disabled=true;

    naytaKuva()
    setTimeout(function() {seuraava()}, 1000);

    function seuraava() {
        document.getElementById("kohota").style.display = "none";
        document.getElementById("muotoile").style.display = "inline";
    }

    document.getElementsByClassName("progress-bar")[0].style.width = "55%";
}

// SEITSEMÄS SIVU
// Nappi pois käytöstä, kuvien vaihto, seuraavan Divin näyttäminen ja olemassaolevan piilotus, progress-bar etenee
    
function muotoile() {
    document.getElementById("muotoileBtn").disabled=true;

    naytaKuva()
    setTimeout(function() {naytaKuva();}, 1000);
    setTimeout(function() {naytaKuva();}, 2000);
    setTimeout(function() {seuraava()}, 3000);

    function seuraava() {
        document.getElementById("muotoile").style.display = "none";
        document.getElementById("kylmalepo").style.display = "inline";
    }

    document.getElementsByClassName("progress-bar")[0].style.width = "60%";
    setTimeout(function() {document.getElementsByClassName("progress-bar")[0].style.width = "65%";}, 1000);
    setTimeout(function() {document.getElementsByClassName("progress-bar")[0].style.width = "70%";}, 2000);
}
 
// KAHDEKSAS SIVU
// Nappi pois käytöstä, kuvien vaihto, seuraavan Divin näyttäminen ja olemassaolevan piilotus, progress-bar etenee

function kylmalepo() {
    document.getElementById("kylmalepoBtn").disabled=true;

    naytaKuva()
    setTimeout(function() {seuraava()}, 1000);

    function seuraava() {
        document.getElementById("kylmalepo").style.display = "none";
        document.getElementById("viilla").style.display = "inline";
    }

    document.getElementsByClassName("progress-bar")[0].style.width = "75%";
}


// YHDEKSÄS SIVU
// Nappi pois käytöstä, kuvien vaihto, seuraavan Divin näyttäminen ja olemassaolevan piilotus, progress-bar etenee

function viilla() {
    document.getElementById("viillaBtn").disabled=true;

    naytaKuva()
    setTimeout(function() {naytaKuva();}, 1000);
    setTimeout(function() {naytaKuva();}, 2000);
    setTimeout(function() {seuraava()}, 3000);
    

    function seuraava() {
        document.getElementById("viilla").style.display = "none";
        document.getElementById("paista").style.display = "inline";
    }

    document.getElementsByClassName("progress-bar")[0].style.width = "80%";
    setTimeout(function() {document.getElementsByClassName("progress-bar")[0].style.width = "85%";}, 1000);
    setTimeout(function() {document.getElementsByClassName("progress-bar")[0].style.width = "90%";}, 2000);
}


// KYMMENES SIVU
// Nappi pois käytöstä, kuvien vaihto, seuraavan Divin näyttäminen ja olemassaolevan piilotus, progress-bar etenee

function paista() {
    document.getElementById("paistaBtn").disabled=true;

    naytaKuva(19)
    setTimeout(function() {naytaKuva();}, 1000);
    setTimeout(function() {naytaKuva();}, 2000);
    setTimeout(function() {seuraava()}, 3000);
    

    function seuraava() {
        document.getElementById("paista").style.display = "none";
        document.getElementById("valmis").style.display = "inline";
    }

    document.getElementsByClassName("progress-bar")[0].style.width = "93%";
    setTimeout(function() {document.getElementsByClassName("progress-bar")[0].style.width = "96%";}, 1000);
    setTimeout(function() {document.getElementsByClassName("progress-bar")[0].style.width = "100%";}, 2000);
}



// YHDESTOISTA SIVU
// Kun leipä on valmis, tallennetaan leipien määrä local storageen, josta niiden määrä voidaan hakea taulukkoon

function tallennaLeipa() {
    document.getElementById("tallennaBtn").disabled=true;

    if(sessionStorage.getItem("leipa") == "vehna") {
        if(localStorage.getItem("vehnät") == null) {
            localStorage.setItem("vehnät", "1");
        } else {
            var uusVehnat = parseInt(localStorage.getItem("vehnät")) + 1;
            localStorage.setItem("vehnät", uusVehnat);
        }
    } else if(sessionStorage.getItem("leipa") == "seka") {
        if(localStorage.getItem("sekat") == null) {
            localStorage.setItem("sekat", "1");
        } else {
            var uusSekat = parseInt(localStorage.getItem("sekat")) + 1;
            localStorage.setItem("sekat", uusSekat);
        }
    }

    //asetetaan "0", jos yhtään leipää ei ole leivottu (muuten näkyisi tulostettaessa "null")

    if(localStorage.getItem("vehnät") == null) {
        localStorage.setItem("vehnät", "0");
    }
    if(localStorage.getItem("sekat") == null) {
        localStorage.setItem("sekat", "0");
    }
}

// näytetään tehtyjen leipien määrä taulukossa:
function tulostaLeivat() {
    document.getElementById("tulostaulukkoDIV").style.display = "inline";

    document.getElementById("vehnaleivat").innerHTML = localStorage.getItem("vehnät");
    document.getElementById("sekaleivat").innerHTML = localStorage.getItem("sekat");
    
    if(document.getElementById("tallennaBtn").disabled == true) {
        document.getElementById("tulostaBtn").disabled = true;
    }
}

function alkuun() {
    location.reload();
}
    


//KUVA-ARRAYT

var vehnaImgArray = new Array();
vehnaImgArray[0] = new Image();
vehnaImgArray[0].src = "images/1.JPG";
vehnaImgArray[1] = new Image();
vehnaImgArray[1].src = "images/2.JPG";
vehnaImgArray[2] = new Image();
vehnaImgArray[2].src = "images/3.JPG";
vehnaImgArray[3] = new Image();
vehnaImgArray[3].src = "images/7.JPG";
vehnaImgArray[4] = new Image();
vehnaImgArray[4].src = "images/8.JPG";
vehnaImgArray[5] = new Image();
vehnaImgArray[5].src = "images/9.JPG";
vehnaImgArray[6] = new Image();
vehnaImgArray[6].src = "images/11.JPG";
vehnaImgArray[7] = new Image();
vehnaImgArray[7].src = "images/14.JPG";
vehnaImgArray[8] = new Image();
vehnaImgArray[8].src = "images/15.JPG";
vehnaImgArray[9] = new Image();
vehnaImgArray[9].src = "images/16.JPG";
vehnaImgArray[10] = new Image();
vehnaImgArray[10].src = "images/18.JPG";
vehnaImgArray[11] = new Image();
vehnaImgArray[11].src = "images/15.JPG";
vehnaImgArray[12] = new Image();
vehnaImgArray[12].src = "images/16.JPG";
vehnaImgArray[13] = new Image();
vehnaImgArray[13].src = "images/18.JPG";
vehnaImgArray[14] = new Image();
vehnaImgArray[14].src = "images/21.JPG";
vehnaImgArray[15] = new Image();
vehnaImgArray[15].src = "images/23.JPG";
vehnaImgArray[16] = new Image();
vehnaImgArray[16].src = "images/24.JPG";
vehnaImgArray[17] = new Image();
vehnaImgArray[17].src = "images/25.JPG";
vehnaImgArray[18] = new Image();
vehnaImgArray[18].src = "images/27.JPG";
vehnaImgArray[19] = new Image();
vehnaImgArray[19].src = "images/28.JPG";
vehnaImgArray[20] = new Image();
vehnaImgArray[20].src = "images/29.JPG";
vehnaImgArray[21] = new Image();
vehnaImgArray[21].src = "images/30.JPG";
vehnaImgArray[22] = new Image();
vehnaImgArray[22].src = "images/31.JPG";
vehnaImgArray[23] = new Image();
vehnaImgArray[23].src = "images/32.JPG";
vehnaImgArray[24] = new Image();
vehnaImgArray[24].src = "images/33.JPG";


var sekaImgArray = new Array();
sekaImgArray[0] = new Image();
sekaImgArray[0].src = "images/1.JPG";
sekaImgArray[1] = new Image();
sekaImgArray[1].src = "images/2.JPG";
sekaImgArray[2] = new Image();
sekaImgArray[2].src = "images/3.JPG";
sekaImgArray[3] = new Image();
sekaImgArray[3].src = "images/5.JPG";
sekaImgArray[4] = new Image();
sekaImgArray[4].src = "images/6.JPG";
sekaImgArray[5] = new Image();
sekaImgArray[5].src = "images/10.JPG";
sekaImgArray[6] = new Image();
sekaImgArray[6].src = "images/11.JPG";
sekaImgArray[7] = new Image();
sekaImgArray[7].src = "images/12.JPG";
sekaImgArray[8] = new Image();
sekaImgArray[8].src = "images/13.JPG";
sekaImgArray[9] = new Image();
sekaImgArray[9].src = "images/19.JPG";
sekaImgArray[10] = new Image();
sekaImgArray[10].src = "images/20.JPG";
sekaImgArray[11] = new Image();
sekaImgArray[11].src = "images/13.JPG";
sekaImgArray[12] = new Image();
sekaImgArray[12].src = "images/19.JPG";
sekaImgArray[13] = new Image();
sekaImgArray[13].src = "images/20.JPG";
sekaImgArray[14] = new Image();
sekaImgArray[14].src = "images/22.JPG";
sekaImgArray[15] = new Image();
sekaImgArray[15].src = "images/26.JPG";
sekaImgArray[16] = new Image();
sekaImgArray[16].src = "images/24.JPG";
sekaImgArray[17] = new Image();
sekaImgArray[17].src = "images/25.JPG";
sekaImgArray[18] = new Image();
sekaImgArray[18].src = "images/27.JPG";
sekaImgArray[19] = new Image();
sekaImgArray[19].src = "images/28.JPG";
sekaImgArray[20] = new Image();
sekaImgArray[20].src = "images/29.JPG";
sekaImgArray[21] = new Image();
sekaImgArray[21].src = "images/30.JPG";
sekaImgArray[22] = new Image();
sekaImgArray[22].src = "images/31.JPG";
sekaImgArray[23] = new Image();
sekaImgArray[23].src = "images/32.JPG";
sekaImgArray[24] = new Image();
sekaImgArray[24].src = "images/33.JPG";
    
