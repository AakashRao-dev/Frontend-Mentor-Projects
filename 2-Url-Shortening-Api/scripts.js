const copyBtns = document.querySelectorAll('.shorten-links .new-link + button');
const hamburger = document.querySelector('.hamburger');
const navOptionsMobile = document.querySelector('.nav-options.mobile');

copyBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.textContent = 'Copied!';
    btn.style.backgroundColor = 'hsl(257, 27%, 26%)';
  });
});

hamburger.addEventListener('click', function (e) {
  hamburger.classList.toggle('active');
  navOptionsMobile.classList.toggle('active');
});
