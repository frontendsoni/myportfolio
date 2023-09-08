// ham toggler start here
let toggleBtn = document.getElementById('ham');
let showNav = document.getElementById('show-nav');

function toggleButton () {
  toggleBtn.classList.toggle("ham");
}

function showNavigation() {
  showNav.classList.toggle('show-navbar-menu');
}

toggleBtn.addEventListener('click', () => {
  toggleButton();
  showNavigation();
  
})