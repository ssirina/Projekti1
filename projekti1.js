

//Tällä vaihdetaan sivustolla näytettävä kuva, hyödynnetään muissa funktioissa


//ENSIMMÄINEN SIVU

    function tallennaTiedot() {
        var leipuri = document.getElementById("leipuri").value;
        var juuri = document.getElementById("juuri").value;

        sessionStorage.setItem("leipuri", leipuri);
        sessionStorage.setItem("juuri", juuri);

        document.getElementById("leipaValinta").style.display = "inline";
        document.getElementById("form").style.display = "none";

        //Tänne vielä leipurin ja juuren nimen lisääminen kaikkialle?
    }

    
    //TÄMÄ SAATTAA OLLA TURHA`???
    function tulostaTiedot() {
        console.log("Leipurin nimi: " + sessionStorage.getItem("leipuri"));
        console.log("Juuren nimi: " + sessionStorage.getItem("juuri"));
}

    //Funktio, valinnantallennusnappiin, jolla siirrytään myös seuraavaan näkymään
    function tallennaValinta() {
        var leipa = document.getElementById("leivat").value;
        sessionStorage.setItem("leipa", leipa);
        console.log("Leivän nimi: " + sessionStorage.getItem("leipä"));


        document.getElementById("tervetulosivu").style.display ="none";
        document.getElementById("leipaValinta").style.display = "none";
        document.getElementById("aloitetaan").style.display = "inline";
    }

    //vaihdetaan kuva sen perusteella mikä leipä on valittu
    function naytaKuva(i) {
        console.log(sessionStorage.getItem("leipa"));
        console.log(sessionStorage.getItem("juuri"));
        if(sessionStorage.getItem("leipa") == "vehna" || sessionStorage.getItem("leipä") == null) {
            document.getElementById("image").src = vehnaImgArray[i].src;
        } else {
            document.getElementById("image").src = sekaImgArray[i].src;
        }
    }

// TOINEN SIVU
    // Funktio juuren ruokintanappiin
    function ruokiJuuri() {
    
        naytaKuva(1)
        setTimeout(function() {naytaKuva(2);}, 2000);
        setTimeout(function() {seuraava()}, 3500);

        function seuraava() {
            document.getElementById("aloitetaan").style.display = "none";
            document.getElementById("sekoitaTaikina").style.display = "inline";
        }
    }

//KOLMAS SIVU
    function sekoitaTaikina() {
        
            naytaKuva(3)
            setTimeout(function() {naytaKuva(4);}, 2000);
            setTimeout(function() {seuraava()}, 3500);

        function seuraava() {
            document.getElementById("sekoitaTaikina").style.display = "none";
            document.getElementById("autolyysi").style.display = "inline";
        }
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
vehnaImgArray[11].src = "images/16.JPG";
vehnaImgArray[12] = new Image();
vehnaImgArray[12].src = "images/18.JPG";
vehnaImgArray[13] = new Image();
vehnaImgArray[13].src = "images/21.JPG";
vehnaImgArray[14] = new Image();
vehnaImgArray[14].src = "images/23.JPG";
vehnaImgArray[15] = new Image();
vehnaImgArray[15].src = "images/24.JPG";
vehnaImgArray[16] = new Image();
vehnaImgArray[16].src = "images/25.JPG";
vehnaImgArray[17] = new Image();
vehnaImgArray[17].src = "images/27.JPG";
vehnaImgArray[18] = new Image();
vehnaImgArray[18].src = "images/28.JPG";
vehnaImgArray[19] = new Image();
vehnaImgArray[19].src = "images/29.JPG";
vehnaImgArray[20] = new Image();
vehnaImgArray[20].src = "images/30.JPG";
vehnaImgArray[21] = new Image();
vehnaImgArray[21].src = "images/31.JPG";
vehnaImgArray[22] = new Image();
vehnaImgArray[22].src = "images/32.JPG";
vehnaImgArray[23] = new Image();
vehnaImgArray[23].src = "images/33.JPG";


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
sekaImgArray[11].src = "images/19.JPG";
sekaImgArray[12] = new Image();
sekaImgArray[12].src = "images/20.JPG";
sekaImgArray[13] = new Image();
sekaImgArray[13].src = "images/22.JPG";
sekaImgArray[14] = new Image();
sekaImgArray[14].src = "images/26.JPG";
sekaImgArray[15] = new Image();
sekaImgArray[15].src = "images/24.JPG";
sekaImgArray[16] = new Image();
sekaImgArray[16].src = "images/25.JPG";
sekaImgArray[17] = new Image();
sekaImgArray[17].src = "images/27.JPG";
sekaImgArray[18] = new Image();
sekaImgArray[18].src = "images/28.JPG";
sekaImgArray[19] = new Image();
sekaImgArray[19].src = "images/29.JPG";
sekaImgArray[20] = new Image();
sekaImgArray[20].src = "images/30.JPG";
sekaImgArray[21] = new Image();
sekaImgArray[21].src = "images/31.JPG";
sekaImgArray[22] = new Image();
sekaImgArray[22].src = "images/32.JPG";
sekaImgArray[23] = new Image();
sekaImgArray[23].src = "images/33.JPG";
    
