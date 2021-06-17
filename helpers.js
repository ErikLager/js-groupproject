/**
 * This replaces blankspaces with '%20' for the fetch to be able to read it
 * @param {song} str wake me up
 * @returns wake%20me%20up
 */
function prepareQuery(str) {
    for (let i = 0; i < str.length; i++) {
        str = str.replace(" ", "%20");
    }
    return str;
}

/**
 * Replaces \n with <br> so the formating on the site is correct
 */
function formatResponse(resp) {
    for (let i = 0; i < resp.length; i++) {
        resp = resp.replace("\n", "<br>");
    }
    return resp;
}

function verifylen(event) {
    event.preventDefault(); //prevents the site from reloading when formbutton is clicked
    let checker = 0;        //A variable to check if everything is done correctly
    
    // If one of the fields are empty a error message is displayed and checker is increased by one
    if (artistfield.value == ""){
        document.getElementById("error1").style.display="block";
        checker++;
    }
    if (songfield.value == ""){
        document.getElementById("error2").style.display="block";
        checker++;
    }

    // If checker is equal to 0 means both fields have text in them
    // Then the error messages are removed and the method fetchsong() is called
    if (checker == 0){
        document.getElementById("error1").style.display="none";
        document.getElementById("error2").style.display="none";
        fetchsong();
    }
}