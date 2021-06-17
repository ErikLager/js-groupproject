// The main method, it sends a request to the api with the artist and song
async function fetchsong() {

    // Writes out on site 'searching...' to make it more dynamic
    textarea.innerHTML = "Searching... This might take a while";

    // Reads what the users has written in the fields and saves the value
    artist = prepareQuery(artistfield.value);
    song = prepareQuery(songfield.value);

    // The url variable with the values in it
    let url = `http://ianertson.com:3500/${artist}/${song}`;
    await fetch(url).then(function (response) {             //Sends a request to the api 
        if (response.ok){                                   //Checks if the api is online
            response.json().then(function (data) {          //Converts the response to json
                textarea.innerHTML = "";                    //Clear the textarea
                if (data == ""){                            //If the response is empty, the song doesn't exist/typo
                    textarea.innerHTML = 
                    `<h1>You made a typo haha</h1>
                    <p>or the song doesn't exist in the api</p>`
                }else{
                    textarea.innerHTML = formatResponse(data[0].lyrics); //Calls on formatResponse and inserts the return value in textarea
                } 
            }) 
        } 
    }).catch(rejected => {              //If the fetch failed, status code == 4xx/5xx (error)
            textarea.innerHTML = `${rejected}
        Failed to fetch data. Try again later
        the api might be down for maintinance
        if you want, check the console for more info (anvanced users only)`
        })
}



/* declars the textfields, searchbutton & the <div class="content"> as variables for the js-code to read */
let songfield = document.getElementById("song");
let artistfield = document.getElementById("artist");
let search = document.getElementById("search");
let content = document.querySelector(".content");



let textarea = document.createElement("div");   //Creates the textarea under the form
textarea.classList.add("lyric");                //Add the class lyric to <div class="lyric">
content.appendChild(textarea);                  //textarea is now a child of <div class="content">
textarea.innerHTML =                            //Sets default text to the textfield
`
<h1>What is this site?</h1>
<p>
    This site is called TextDataBase and allows you to search for lyrics for songs<br><br>
    Just type an artist or a groupe name in the artist field and one of their songs in the 
    field under to search for it. Eg. Avicii Levels<br><br>
    To see this text again just refresh the site
</p>
`

search.addEventListener("click", verifylen);    //Adds a event listener to the button, making searching possible