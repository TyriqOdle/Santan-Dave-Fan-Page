
export async function loadLyric(){

    try{
        const response = await fetch("./scripts/lyrics.json");
        const lyrics = await response.json();
        renderLyric(lyrics);
    }catch(error){
        console.error(error)
    }


    function renderLyric(lyrics){
        const quoteContainer = document.getElementById("songLyrics");
        let quote = document.createElement("blockquote");
        let citation = document.createElement("figcaption")
        const randomInt = Math.floor(Math.random() * 10); 

        //Set Classes
        quote.classList.add("blockquote");
        citation.classList.add("blockquote-footer")

        quote.innerHTML = `<p class="quotetext">${lyrics[randomInt].lyric}</p>`

        let album = lyrics[randomInt].album;

        if (album == "Single"){
            citation.innerHTML = `From ${lyrics[randomInt].song} `
        }else{
            citation.innerHTML = `From ${lyrics[randomInt].song} on ${lyrics[randomInt].album}`
        }

        

        quoteContainer.appendChild(quote)
        quoteContainer.appendChild(citation)
    }
}