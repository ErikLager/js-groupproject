function prepareQuery(str) {
    for (let i = 0; i < str.length; i++) {
        str = str.replace(" ", "%20");
    }
    return str;
}

function formatResponse(resp) {
    for (let i = 0; i < resp.length; i++) {
        resp = resp.replace("\n", "<br>");
    }
    return resp;
}

function verifylen(event) {
    event.preventDefault();
    let checker = 0;
    if (artistfield.value == ""){
        document.getElementById("error1").style.display="block";
        checker++;
    }
    if (songfield.value == ""){
        document.getElementById("error2").style.display="block";
        checker++;
    }
    if (checker == 0){
        document.getElementById("error1").style.display="none";
        document.getElementById("error2").style.display="none";
        fetchsong();
    }
}