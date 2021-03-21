const bars = document.getElementById('jsBars');
const times = document.getElementById('jsTimes');
const sidebar = document.getElementById('jsSidebar');
const sidebarBlank = document.getElementById('jsSidebarBlank');

const openSidebar = () => {
  sidebar.classList.add('show');
};

const closeSidebar = () => {
  sidebar.classList.remove('show');
};

const init = () => {
  bars.addEventListener('click', openSidebar);
  times.addEventListener('click', closeSidebar);
  sidebarBlank.addEventListener('click', closeSidebar);
};

if (bars) {
  init();
}
