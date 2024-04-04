import pokemonArray from "./data/pokemon";
import "./styles/style.scss";

// --- QUERY SELECTORS ---
const cardContainer = document.querySelector(".card-container");
console.log(cardContainer);
const searchInput = document.querySelector("#search-input");
const resultsPerPageInput = document.querySelector("#results-per-page");

// --- GUARD CLAUSES ---
if (!cardContainer || !searchInput || !resultsPerPageInput) {
  throw new Error("issue with selectors");
}

// --- FUNCTIONS ---
// function to render pokemon cards
const renderPokemonCards = (pokemonData: any) => {
  cardContainer.innerHTML = "";
  pokemonData.forEach((pokemon: any) => {
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

// --- EVENT HANDLERS ---

const handleRender = () => {
  renderPokemonCards(pokemonArray);
};

const handleFilteredRender = (event: Event) => {
  const filteredValue = (event.target as HTMLInputElement).value
    .trim()
    .toLowerCase();
  const filteredPokemon = pokemonArray.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(filteredValue)
  );
  renderPokemonCards(filteredPokemon);
};

const handleResultsPerPageChange = (event: Event) => {
  const resultsPerPage = parseInt((event.target as HTMLInputElement).value);
  // get a slice of the original pokemon array based in the results per page input
  const slicedPokemonArray = pokemonArray.slice(0, resultsPerPage);
  renderPokemonCards(slicedPokemonArray);
};

// --- EVENT LISTENERS ---
window.addEventListener("load", handleRender);
searchInput.addEventListener("input", handleFilteredRender);
resultsPerPageInput.addEventListener("change", handleResultsPerPageChange);
