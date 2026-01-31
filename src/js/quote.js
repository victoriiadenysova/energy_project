import fetchSportEnergy from './api/apiSport';
import { loader } from './loader/loader';

const refs = {
  quoteText: document.querySelector('.quote-text'),
  quoteAuthor: document.querySelector('.quote-author'),
};

document.addEventListener('DOMContentLoaded', loadQuote);

export async function loadQuote() {
  const locStorage = localStorage.getItem('quote');

  if (locStorage) {
    const currentDate = new Date().toDateString();

    const { date: localStorageDate, quote: localStorageQuote, author: localStorageAuthor } = JSON.parse(locStorage);

    if (currentDate !== localStorageDate) {
      fetchQuote();
    } else {
      refs.quoteText.innerHTML = localStorageQuote;
      refs.quoteAuthor.innerHTML = localStorageAuthor
    }
  } else {
    fetchQuote();
  }
}

async function fetchQuote() {
    loader.open();
    const fetchQuote = await fetchSportEnergy.getQuotes();
    loader.close()

  const { author, quote } = fetchQuote;

  const quoteObj = {
    author,
    quote,
    date: new Date().toDateString(),
  };

  localStorage.setItem('quote', JSON.stringify(quoteObj));

  refs.quoteText.innerHTML = quote;
  refs.quoteAuthor.innerHTML = author;
}
