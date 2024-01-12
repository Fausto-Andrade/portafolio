const cursor = document.querySelector(".cursor");
const navbar = document.querySelector('.navbar');
const menu = document.querySelector('.navbar-links');
const links = document.querySelectorAll('.list-link')
document.addEventListener("mousemove", (e) => {
    cursor.setAttribute('style', 'top: '+e.pageY+'px; let: '+e.pageX+'px;')
    let x = e.pageX;
    let y = e.pagey;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
});

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

navbar.addEventListener('click', function (e) {
  if (e.target.closest('.list-link')){
    for (const link of links){
      link.parentElement.classList.remove('active')
    }
    e.target.parentElement.classList.add('active')
  }
})
