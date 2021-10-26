//ENSIMMÄINEN SIVU

// Tallennetaan leipurin ja juuren nimi sessionStoragea hyödyntäen
function tallennaTiedot() {
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

//Muuta kaikki dokumentin leipuri-sanat leipurin nimeksi, ja juuri-sanat juuren nimeksi

function vaihdaLeipuri() {
    document.body.innerHTML = document.body.innerHTML.replace(/LEIPURI/g, sessionStorage.getItem("leipuri"));
}

function vaihdaJuuri() {
    document.body.innerHTML = document.body.innerHTML.replace(/JUURI/g, sessionStorage.getItem("juuri"));
}

//Funktio, valinnantallennusnappiin, jolla siirrytään myös seuraavaan näkymään

function tallennaValinta() {
    var leipa = document.getElementById("leivat").value;
    sessionStorage.setItem("leipa", leipa);
    console.log("Leivän nimi: " + sessionStorage.getItem("leipa"));

    document.getElementsByClassName("progress-bar")[0].style.width = "10%";


    document.getElementById("tervetulosivu").style.display ="none";
    document.getElementById("leipaValinta").style.display = "none";
    document.getElementById("aloitetaan").style.display = "inline";
}

//Tällä vaihdetaan sivustolla näytettävä kuva, hyödynnetään muissa funktioissa
//vaihdetaan kuva sen perusteella mikä leipä on valittu

function naytaKuva(i) {
    console.log(sessionStorage.getItem("leipa"));
    console.log(sessionStorage.getItem("juuri"));
    if(sessionStorage.getItem("leipa") == "vehna" || sessionStorage.getItem("leipa") == null) {
        document.getElementById("image").src = vehnaImgArray[i].src;
    } else {
        document.getElementById("image").src = sekaImgArray[i].src;
    }
}

// TOINEN SIVU

function ruokiJuuri() {
    document.getElementById("ruokiBtn").disabled=true;

    naytaKuva(1)
    setTimeout(function() {naytaKuva(2);}, 1000);
    setTimeout(function() {seuraava()}, 2000);

    function seuraava() {
        document.getElementById("aloitetaan").style.display = "none";
        document.getElementById("sekoitaTaikina").style.display = "inline";

    }
    document.getElementsByClassName("progress-bar")[0].style.width = "15%";
    setTimeout(function() {document.getElementsByClassName("progress-bar")[0].style.width = "20%";}, 1000);

}

//KOLMAS SIVU

function sekoitaTaikina() {
    document.getElementById("sekoitaBtn").disabled=true;

    naytaKuva(3)
    setTimeout(function() {naytaKuva(4);}, 1000);
    setTimeout(function() {seuraava()}, 2000);

    function seuraava() {
        document.getElementById("sekoitaTaikina").style.display = "none";
        document.getElementById("autolyysi").style.display = "inline";
    }

    document.getElementsByClassName("progress-bar")[0].style.width = "25%";
    setTimeout(function() {document.getElementsByClassName("progress-bar")[0].style.width = "30%";}, 1000);

}

// NELJÄS SIVU

function autolyysi() {
    document.getElementById("autolyysiBtn").disabled=true;

    naytaKuva(5)
    setTimeout(function() {seuraava()}, 1000);

    function seuraava() {
        document.getElementById("autolyysi").style.display = "none";
        document.getElementById("taittele").style.display = "inline";
    }

    document.getElementsByClassName("progress-bar")[0].style.width = "35%";

}

    
//VIIDES SIVU

function suolaa() {
    document.getElementById("suolaaBtn").disabled=true;
    naytaKuva(6)
    setTimeout(function() {naytaKuva(7);}, 1000);
    setTimeout(function() {document.getElementById("taitteleBtn").disabled=false;}, 2000);
    document.getElementsByClassName("progress-bar")[0].style.width = "40%";

}

// tarkistetaan kuinka monta taittelua on takana ja taitellaan kaksi kertaa
// kerätään taitteluiden määrä (count), kahden jälkeen pitäisi siirtyä seuraavaan

var count = 0;
function taittele() {
    if(count < 2) {
        document.getElementById("taitteleBtn").disabled=true;
        naytaKuva(8)
        setTimeout(function() {naytaKuva(9);}, 1000);
        setTimeout(function() {naytaKuva(10);}, 2000);
        if(count < 1) {
            setTimeout(function() {document.getElementById("taitteleBtn").disabled=false;}, 2000);
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

function kohota() {
    document.getElementById("kohotaBtn").disabled=true;

    naytaKuva(11)
    setTimeout(function() {seuraava()}, 1000);

    function seuraava() {
        document.getElementById("kohota").style.display = "none";
        document.getElementById("muotoile").style.display = "inline";
    }

    document.getElementsByClassName("progress-bar")[0].style.width = "55%";
}

// SEITSEMÄS SIVU
    
function muotoile() {
    document.getElementById("muotoileBtn").disabled=true;

    naytaKuva(12)
    setTimeout(function() {naytaKuva(13);}, 1000);
    setTimeout(function() {naytaKuva(14);}, 2000);
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

function kylmalepo() {
    document.getElementById("kylmalepoBtn").disabled=true;

    naytaKuva(15)
    setTimeout(function() {seuraava()}, 1000);

    function seuraava() {
        document.getElementById("kylmalepo").style.display = "none";
        document.getElementById("viilla").style.display = "inline";
    }

    document.getElementsByClassName("progress-bar")[0].style.width = "75%";
}


// YHDEKSÄS SIVU

function viilla() {
    document.getElementById("viillaBtn").disabled=true;

    naytaKuva(16)
    setTimeout(function() {naytaKuva(17);}, 1000);
    setTimeout(function() {naytaKuva(18);}, 2000);
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

function paista() {
    document.getElementById("paistaBtn").disabled=true;

    naytaKuva(19)
    setTimeout(function() {naytaKuva(20);}, 1000);
    setTimeout(function() {naytaKuva(21);}, 2000);
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
// Kun leipä on valmis, tallennetaan leipien määrä local storageen, josta niiden määrä voidaan hakea.

function tallennaLeipa() {
    document.getElementById("tallennaBtn").disabled=true;

    if(sessionStorage.getItem("leipa") == "vehna") {
        if(localStorage.getItem("vehnät") == null) {
            localStorage.setItem("vehnät", "1");
        } else {
            var uusVehnat = parseInt(localStorage.getItem("vehnät")) + 1;
            console.log(uusVehnat);
            localStorage.setItem("vehnät", uusVehnat);
        }
    } else if(sessionStorage.getItem("leipa") == "seka") {
        if(localStorage.getItem("sekat") == null) {
            localStorage.setItem("sekat", "1");
        } else {
            var uusSekat = parseInt(localStorage.getItem("sekat")) + 1;
            console.log(uusVehnat);
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

    console.log("Vehnäleipiä: " + localStorage.getItem("vehnät"));
    console.log("Sekaleipiä: " + localStorage.getItem("sekat"));

    document.getElementById("vehnaleivat").innerHTML = localStorage.getItem("vehnät");
    document.getElementById("sekaleivat").innerHTML = localStorage.getItem("sekat");

    
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
vehnaImgArray[11].src = "images/21.JPG";
vehnaImgArray[12] = new Image();
vehnaImgArray[12].src = "images/23.JPG";
vehnaImgArray[13] = new Image();
vehnaImgArray[13].src = "images/24.JPG";
vehnaImgArray[14] = new Image();
vehnaImgArray[14].src = "images/25.JPG";
vehnaImgArray[15] = new Image();
vehnaImgArray[15].src = "images/27.JPG";
vehnaImgArray[16] = new Image();
vehnaImgArray[16].src = "images/28.JPG";
vehnaImgArray[17] = new Image();
vehnaImgArray[17].src = "images/29.JPG";
vehnaImgArray[18] = new Image();
vehnaImgArray[18].src = "images/30.JPG";
vehnaImgArray[19] = new Image();
vehnaImgArray[19].src = "images/31.JPG";
vehnaImgArray[20] = new Image();
vehnaImgArray[20].src = "images/32.JPG";
vehnaImgArray[21] = new Image();
vehnaImgArray[21].src = "images/33.JPG";


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
sekaImgArray[11].src = "images/22.JPG";
sekaImgArray[12] = new Image();
sekaImgArray[12].src = "images/26.JPG";
sekaImgArray[13] = new Image();
sekaImgArray[13].src = "images/24.JPG";
sekaImgArray[14] = new Image();
sekaImgArray[14].src = "images/25.JPG";
sekaImgArray[15] = new Image();
sekaImgArray[15].src = "images/27.JPG";
sekaImgArray[16] = new Image();
sekaImgArray[16].src = "images/28.JPG";
sekaImgArray[17] = new Image();
sekaImgArray[17].src = "images/29.JPG";
sekaImgArray[18] = new Image();
sekaImgArray[18].src = "images/30.JPG";
sekaImgArray[19] = new Image();
sekaImgArray[19].src = "images/31.JPG";
sekaImgArray[20] = new Image();
sekaImgArray[20].src = "images/32.JPG";
sekaImgArray[21] = new Image();
sekaImgArray[21].src = "images/33.JPG";
    
