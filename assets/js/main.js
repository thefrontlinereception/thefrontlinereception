
function toggleNav(){
  const nav = document.querySelector('.nav');
  nav.classList.toggle('open');
}
function activeLink(){
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a=>{
    const to = a.getAttribute('href');
    if(here === to) a.classList.add('active');
  });
}
document.addEventListener('DOMContentLoaded', activeLink);
