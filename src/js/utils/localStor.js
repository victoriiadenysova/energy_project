import { deleteFavorites, updateFirestore } from "./firebase";

let favoriteCards = [];
const localStorFavorites = JSON.parse(localStorage.getItem('favorites'));
localStorFavorites?.length && favoriteCards.push(...localStorFavorites);

export function addLocalFavorites(card) {


    updateFirestore(card)


    favoriteCards.push(card);
    localStorage.setItem('favorites', JSON.stringify(favoriteCards));

}

export const deleteLocalFavorites = id => {

    deleteFavorites(id)

  favoriteCards = favoriteCards.filter(item => item._id !== id);

  localStorage.setItem(
    'favorites',
    JSON.stringify([...favoriteCards])
  );

};