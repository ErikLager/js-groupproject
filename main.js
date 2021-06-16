let songfield = document.getElementById("song");
let artistfield = document.getElementById("artist");
let search = document.getElementById("search");
let content = document.querySelector(".content")

async function fetchsong() {
    textarea.innerHTML = "Searching... This might take a while";
    artist = prepareQuery(artistfield.value);
    song = prepareQuery(songfield.value);

    let url = `http://ianertson.com:3500/${artist}/${song}`;
    await fetch(url).then(function (response) {
        if (response.ok){ 
            response.json().then(function (data) {
                textarea.innerHTML = ""; 
                if (data == ""){
                    textarea.innerHTML = 
                    `<h1>You made a typo haha</h1>
                    <p>or the song doesn't exist in the api</p>`
                }else{
                    textarea.innerHTML = formatResponse(data[0].lyrics); 
                } 
            }) 
        } 
    }).catch(rejected => {
            textarea.innerHTML = `${rejected}
        Failed to fetch data. Try again later
        the api might be down for maintinance 
        or you misstyped the artist or the song
        but if you want, check the console for more info (anvanced users only)`
        })
}

let textarea = document.createElement("div");
textarea.classList.add("lyric")
content.appendChild(textarea);
textarea.innerHTML =
`
<h1>What is this site?</h1>
<p>
    This site is called TextDataBase and allows you to search for lyrics for songs<br><br>
    Just type an artist or a groupe name in the artist field and one of their songs in the 
    field under to search for it. Eg. Avicii Levels<br><br>
    To see this text again just refresh the site
</p>
`

search.addEventListener("click", verifylen);