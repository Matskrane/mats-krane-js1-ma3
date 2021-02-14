// Question 2

const url ="https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const htmlPage = document.querySelector(".games");

async function firstEight() {
  try {
    const response = await fetch(url);
    const filteredList = await response.json();
    const games = filteredList.results;
    // console.log(filteredList);

    htmlPage.innerHTML = "";


    for (let i = 0; i <= games.length; i++) {
      if (i === 8) {
        break;
      }


      htmlPage.innerHTML += `<div class="spill"> <h2>${games[i].name}</h2> <br></br> <p>Rating:${games[i].rating}</p> <br></br> <p>Tag:${games[i].tags.length}</p> </div>`;
      
    }
  } catch (error) {
    htmlPage.innerHTML = error;
  }
}

firstEight();

