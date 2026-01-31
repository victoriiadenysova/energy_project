import { myModal } from './modal-window/modal';
import { getExerciseModal, getRatingModal } from './modal-window/generation-to-modal';
import { createInteractiveRating } from './raiting.js';
import fetchSportEnergy from '../js/api/apiSport';
import { addLocalFavorites, deleteLocalFavorites } from './utils/localStor';
import { message } from './toasts/message';
import sprite from '../img/svg/sprite.svg';
import { addContent } from './favorite/favorite.js'
import { loader } from './loader/loader';


const listExercises = document.querySelector('.filter-list-js');
let id = '';
const validNodeNames = ['BUTTON', 'svg', 'use', 'P'];
let addRatingButton;
let addFavoriteButton;
let sendRatingForm;

async function sendRatingHandler(event) {
  event.preventDefault();
  const exerciseID = document.querySelector('.modal-get-raiting').dataset.id;
  const ratingContainer = document.querySelector('.rating-container-js');
  const ratingFromUser = ratingContainer.dataset.rating;
  const email = document.querySelector('.raiting-form-field-input').value;
  const review = document.querySelector('.raiting-form-field-comment').value;
  const request = {
    rate: Number(ratingFromUser),
    email,
    review,
    };
    loader.open()
  const response = await fetchSportEnergy.addExercisesRate(exerciseID, request);
  loader.close()
    if (response.message) {
    message.error(`${response.message}`);
  } else {
    message.success(`Thank you for your mark - ${request.rate} for ${response.name}`);
    myModal.close();
  }
}

async function getRatingHandler() {
  const exerciseID = document.querySelector('.modal-info').dataset.id;
  myModal.close();
  myModal.open(getRatingModal(exerciseID));
  createInteractiveRating();
  sendRatingForm = document.querySelector('.raiting-form');
  sendRatingForm.addEventListener('submit', sendRatingHandler);
}

async function addFavoriteHandler(e) {
  const favoriteButton = document.querySelector('.refresh-button-js');
  const cardId = document.querySelector('.modal-info').dataset.id;
  const currentUrl = window.location.href.toString();
  let part = currentUrl.slice(-14)
  if (favoriteButton.dataset.favorite === 'false') {
    favoriteButton.innerHTML = `<button class="add-favorite-js" type="button">
                                        <span class="remote-favorites">Remove from favorites</span>
                                        <svg class="trash-icon-img" width="18" height="18" aria-label="trash-icon">
                                            <use href="${sprite}#icon-trash"></use>
                                        </svg>
                                    </button>`;
      favoriteButton.dataset.favorite = 'true';
      loader.open();
      let data = await fetchSportEnergy.getOneExercises(cardId);
      loader.close();
    addLocalFavorites(data);
    if (part === 'favorites.html') {
      addContent()
    }
  } else {
    favoriteButton.innerHTML = `<button class="add-favorite-js" type="button">
                                        <span>Add to favorites</span>
                                        <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
                                            <use href="${sprite}#icon-heart"></use>
                                        </svg>
                                    </button>`;
    favoriteButton.dataset.favorite = 'false';
    deleteLocalFavorites(cardId);
    if (part === 'favorites.html') {
      addContent()
    }
  }
}

function getStartHandler({ target }) {
  if (validNodeNames.includes(target.nodeName) && target.classList[0] !== 'favourites_btn_trash_icon' && target.classList[0] !== 'favourites_btn_workout') {
    id = target.dataset.id;
    return (oneCard(id));
  } else if (target.classList[0] === 'favourites_btn_trash_icon') {
    const cardId = target.dataset.id;
    deleteLocalFavorites(cardId);
    addContent()
  }
}

listExercises.addEventListener('click', getStartHandler);

const oneCard = async id => {
    loader.open();
    let data = await fetchSportEnergy.getOneExercises(id);
    loader.close()
  const favoriteData = localStorage.getItem('favorites');
  if (favoriteData !== null) {
    const favoriteObject = JSON.parse(favoriteData);
    const objectLocal = favoriteObject.find(({ _id }) => _id === id);
    if (objectLocal) {
      data.favorite = true;
    } else {
      data.favorite = false;
    }
  } else {
    data.favorite = false;
  }
  myModal.open(getExerciseModal(data));
  addFavoriteButton = document.querySelector('.refresh-button-js');
  addRatingButton = document.querySelector('.add-rating');
  addRatingButton.addEventListener('click', getRatingHandler);
  addFavoriteButton.addEventListener('click', addFavoriteHandler);
};
