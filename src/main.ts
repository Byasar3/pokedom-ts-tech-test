import pokemonArray from "./data/pokemon";
import "./styles/style.scss";

const cardContainer = document.querySelector(".card-container");
console.log(cardContainer);

if (!cardContainer) {
  throw new Error("issue with selectors");
}

// need to run through the array, assign each pokemon to html values
const handleRender = () => {
  cardContainer.innerHTML = "";
  pokemonArray.forEach((pokemon) => {
    cardContainer.innerHTML += `
		<div class="card">
    	<img src="${pokemon.sprite}"class="card__image"/>
			<div class="card__content">
				<h1 class="card__heading">${pokemon.name}</h1>
				<p class="card__text">${pokemon.types.join(", ")}</P>
			 </div>
		</div>`;
  });
};

// EVENT LISTENER
window.addEventListener("load", handleRender);
