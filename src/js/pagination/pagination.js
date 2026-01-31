import fetchSportEnergy from '../api/apiSport';
import * as filterBtn from '../filter';
import { makeMarkupCards } from '../exercises';
import { loader } from '../loader/loader';


const paginationNumbers = document.querySelector('.pagination-numbers');
const musclesList = document.querySelector('.muscles-list');

let currentPage = 1; //

try {
  paginationNumbers.addEventListener('click', handleClick);
  paginationNumbers.addEventListener('click', handlePageNumberClick);
} catch (error) {
  console.log(error);
}

let dataRequest;
let totalPages;

async function handleClick(e) {
  const dataFilter = {
    ...dataRequest,
    page: e.target.textContent,
  };
  if (e.target.nodeName !== 'BUTTON') return;
  if (dataFilter.page === currentPage) {
    return;
  }
    if (dataFilter.filter) {
      loader.open()
    const filter = await fetchSportEnergy.getByFilterName(dataFilter);
    loader.close();
        const filteredResult = filter.results;
    musclesList.innerHTML = filterBtn.makeMarkupMuscles(filteredResult);
    } else {
        loader.open();
    const exercises = await fetchSportEnergy.getByFilterCategory(dataFilter);
    loader.close();
        makeMarkupCards(exercises);
  }


  currentPage = dataFilter.page;
  handlePageNumberClick();
}

const appendPageNumber = index => {
  const pageNumber = document.createElement('button');
  pageNumber.className = 'pagination-number';
  pageNumber.innerHTML = index;
  pageNumber.setAttribute('page-index', index);
  pageNumber.setAttribute('aria-label', 'Page ' + index);
  paginationNumbers.appendChild(pageNumber);
};

export function getPaginationNumbers(pages, data) {
  totalPages = pages;
  dataRequest = data;
  if (pages === 1) return;
  for (let i = 1; i <= pages; i++) {
    appendPageNumber(i);
  }
}

function handlePageNumberClick() {

  document.querySelectorAll('.pagination-number').forEach(button => {
    const pageIndex = Number(button.getAttribute('page-index'));
    if (pageIndex) {
      button.addEventListener('click', () => {
        setCurrentPage(pageIndex);
      });
    }
  });
}

export function setCurrentPage(pageNum) {
  currentPage = pageNum;

  handlePageNumberClick();

  document.querySelectorAll('.pagination-number').forEach(button => {
    button.classList.remove('active');

    const pageIndex = Number(button.getAttribute('page-index'));
    if (pageIndex === currentPage) {
      button.classList.add('active');
    }
  });
}


