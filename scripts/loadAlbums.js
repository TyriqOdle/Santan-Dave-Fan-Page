
export async function loadAlbums(){
    const albumContainer = document.getElementById("albums");

    //Get the JSON Data
    try {
        const response = await fetch('./scripts/albums.json');
        const albumList = await response.json();
        renderAlbums(albumList);
        console.log(albumList)
        return albumList;
      } catch (error) {
        console.error('Failed to load albums:', error);
        }
        

    function renderAlbums(albums){
        albums.forEach(element => {
            let col = document.createElement("div");
            let card = document.createElement("div");
            let img = document.createElement("img");
            let cardBody = document.createElement("div");
            let viewBtn = document.createElement("a");

            img.src = element.image

                //Adding Classes
                col.classList.add("col")

                card.classList.add("card", "text-bg-dark")
                card.style.width ="16rem"

                img.classList.add("card-img-top", "albumcover")

                cardBody.classList.add("card-body")
                viewBtn.classList.add("btn", "btn-outline")

            cardBody.innerHTML = `<h5 class="card-title albumname">${element.name}</h5>
                <p class="card-text">${element.number_of_songs} Songs ⋅ ${element.year_of_release
                }</p>
                <p class="card-text">Top song: ${element.top_song}</p>`;

                cardBody.appendChild(viewBtn);
                card.appendChild(img);
                card.appendChild(cardBody);
                col.appendChild(card);
                albumContainer.appendChild(col)
        });
    }

    
}