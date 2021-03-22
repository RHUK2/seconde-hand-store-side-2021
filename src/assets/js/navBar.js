const bars = document.getElementById('jsBars');
const sidebarTimes = document.getElementById('jsSidebarTimes');
const sidebar = document.getElementById('jsSidebar');
const blank = document.getElementById('jsBlank');
const searchTimes = document.getElementById('jsSearchTimes');
const headerSearch = document.getElementById('jsHeaderSearch');
const search = document.getElementById('jsSearch');

const openSidebar = () => {
  sidebar.classList.add('show-sidebar');
  blank.classList.add('show-blank');
};

const closeSidebar = () => {
  sidebar.classList.remove('show-sidebar');
  blank.classList.remove('show-blank');
};

const openSearchbar = () => {
  search.classList.add('show-search');
};
const closeSearchbar = () => {
  search.classList.remove('show-search');
};

const init = () => {
  bars.addEventListener('click', openSidebar);
  sidebarTimes.addEventListener('click', closeSidebar);
  blank.addEventListener('click', closeSidebar);
  headerSearch.addEventListener('click', openSearchbar);
  searchTimes.addEventListener('click', closeSearchbar);
};

if (bars) {
  init();
}
