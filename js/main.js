const nav = document.querySelector('nav');
const navHeight = nav.offsetHeight;

function animateNav() {
  if (window.pageYOffset > navHeight) { return nav.classList.add('black', 'lighten-3', 'shadow') }
  else nav.classList.remove('black', 'lighten-3', 'shadow')
}

window.addEventListener('scroll', () => {
  animateNav()
})