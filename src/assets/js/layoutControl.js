const body = document.querySelector('body');
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
// Enter
const enterAvatar = document.getElementById('jsEnterAvatar');
const enterListUser = document.getElementById('jsEnterListUser');

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

const toggleListUser = () => {
  enterListUser.classList.toggle('show-list-user');
};

const handleBody = event => {
  if (!enterAvatar) return;
  if (event.target !== enterAvatar) {
    const arrs = enterListUser.className.split(' ');
    arrs.forEach(arr => {
      if (arr === 'show-list-user') {
        enterListUser.classList.remove('show-list-user');
      }
    });
  }
};

const init = () => {
  headerBars.addEventListener('click', openNav);
  navTimes.addEventListener('click', closeNav);
  blank.addEventListener('click', closeNav);

  headerSearch.addEventListener('click', openSearch);
  mainSearch.addEventListener('click', openSearch);
  searchTimes.addEventListener('click', closeSearch);

  if (enterAvatar) {
    enterAvatar.addEventListener('click', toggleListUser);
    body.addEventListener('click', handleBody);
  }

  window.addEventListener('resize', handleResize);
};

init();
