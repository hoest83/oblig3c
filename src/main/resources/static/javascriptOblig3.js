
function slettalle(){
    $.get( "/slettAlle");
    location.reload()
}

$(function (){                                                           <!--Autokjør når siden lastes-->
    hentAlle();
})








function output(){

    let Fornavn = document.getElementById("Fornavn").value;        <!-- variabler input -->
    let FornavnK = "";                                                     <!-- variabler input, kjørt gjennom en kontroll(K) -->

    let Etternavn = document.getElementById("Etternavn").value;
    let EtternavnK = "";

    let Telefonnummer = document.getElementById("Telefonnummer").value;
    let TelefonnummerK = 0;

    let Epost = document.getElementById("Epost").value;
    let EpostK = "";

    let Antall = document.getElementById("Antall").value;
    let AntallK = "";

    let film = document.getElementById("filmer").value;

    let ok = 0;

    if(""== (Fornavn)){
        document.getElementById("Fornavnut").style.color = "#ff0000";       <!-- feilmelding hvis feil input -->
        document.getElementById("Fornavnut").innerHTML= "Må skrive inn noe i fornavnet";
    } else {
        FornavnK = Fornavn;
        ok++;
        document.getElementById("Fornavnut").innerHTML= "";
    }

    if(""== (Etternavn)){
        document.getElementById("Etternavnut").style.color = "#ff0000";
        document.getElementById("Etternavnut").innerHTML= "Må skrive inn noe i etternavnet";
    } else {
        EtternavnK = Etternavn;
        ok++;
        document.getElementById("Etternavnut").innerHTML= "";
    }

    if(""== (Telefonnummer)){
        document.getElementById("Telefonnummerut").style.color = "#ff0000";
        document.getElementById("Telefonnummerut").innerHTML= "Må skrive inn noe i tlfnummeret";
    } else {
        TelefonnummerK = Telefonnummer;
        ok++;
        document.getElementById("Telefonnummerut").innerHTML= "";
    }

    if(""== (Epost)){
        document.getElementById("Epostut").style.color = "#ff0000";
        document.getElementById("Epostut").innerHTML= "Må skrive inn noe i epost";
    } else {
        EpostK = Epost;
        ok++;
        document.getElementById("Epostut").innerHTML= "";
    }

    if(""== (Antall)){
        document.getElementById("Antallut").style.color = "#ff0000";
        document.getElementById("Antallut").innerHTML= "Må skrive inn noe i antall";
    } else {
        AntallK = Antall;
        ok++;
        document.getElementById("Antallut").innerHTML= "";
    }
    if(""== (film)){
        document.getElementById("filmerut").style.color = "#ff0000";
        document.getElementById("filmerut").innerHTML= "Må velge noe i film";
    } else if("Ingen film valgt"== (film)){
        document.getElementById("filmerut").style.color = "#ff0000";
        document.getElementById("filmerut").innerHTML= "Må velge noe i film";
    } else {
        film = filmer;
        ok++;
        document.getElementById("filmerut").innerHTML= "";
    }


    if(ok === 6){
        const billett = {
            fornavn : $("#Fornavn").val(),
            etternavn : $("#Etternavn").val(),
            telefonnummer : $("#Telefonnummer").val(),
            epost : $("#Epost").val(),
            antall : $("#Antall").val(),
            filmer : $("#filmer").val()
        }


        $.get("/lagre", billett, function(){                         <!-- Kaller /lagre fra server postmapping til oblig3 -->
            hentAlle();
        });
        $("#Fornavn").val("");         //tøm input-feltene
        $("#Etternavn").val("");
        $("#Telefonnummer").val("");
        $("#Epost").val("");
        $("#Antall").val("");
        $("#filmer").val("Velg film");
    };


}

function hentAlle() {
    $.get( "/hentAlleBilletter2", function( data ) {                           <!--Kaller hentAlle hentAlleBilletter fra server-->
        formaterData(data);
    });
}

function formaterData(billetter){
    $("#fornavn").text("OY")
    let ut = "<table class='table table-striped table-hover'>" +
        "<tr>" +
        "<th>Fornavn</th>" +
        "<th>Etternavn</th>" +
        "<th>Telefonnummer</th>" +
        "<th>Epost</th>" +
        "<th>Antall</th>" +
        "<th>Film</th>" +
        "</tr>";

    for(let i in billetter){
        ut+="<tr><td>"+billetter[i].fornavn+"</td>" +
            "<td>"+billetter[i].etternavn+"</td>" +
            "<td>"+billetter[i].telefonnummer+"</td>" +
            "<td>"+billetter[i].epost+"</td>" +
            "<td>"+billetter[i].antall+"</td>" +
            "<td>"+billetter[i].filmer+"</td>" +
            "</tr>"
    }
    $("#billetter").html(ut);
}