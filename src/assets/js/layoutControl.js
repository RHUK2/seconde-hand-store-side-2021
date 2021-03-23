// Header
const headerBars = document.getElementById('jsHeaderBars');
const headerSearch = document.getElementById('jsHeaderSearch');
const mainSearch = document.getElementById('jsMainSearch');
// Nav
const nav = document.getElementById('jsNav');
const navTimes = document.getElementById('jsNavTimes');
const blank = document.getElementById('jsBlank');
// Search
const search = document.getElementById('jsSearch');
const searchTimes = document.getElementById('jsSearchTimes');

const openNav = () => {
  nav.classList.add('show-nav');
  blank.classList.add('show-blank');
};

const closeNav = () => {
  nav.classList.remove('show-nav');
  blank.classList.remove('show-blank');
};

const openSearch = () => {
  search.classList.add('show-search');
};

const closeSearch = () => {
  search.classList.remove('show-search');
};

const handleResize = () => {
  if (window.innerWidth > 1023) {
    nav.classList.remove('show-nav');
    blank.classList.remove('show-blank');
  }
};

const init = () => {
  headerBars.addEventListener('click', openNav);
  navTimes.addEventListener('click', closeNav);
  blank.addEventListener('click', closeNav);

  headerSearch.addEventListener('click', openSearch);
  mainSearch.addEventListener('click', openSearch);
  searchTimes.addEventListener('click', closeSearch);

  window.addEventListener('resize', handleResize);
};

init();
