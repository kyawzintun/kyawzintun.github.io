const header = document.getElementById("header");
const sticky = header.offsetTop;
const toggleMenu = document.querySelector(".navigation button");
const menu = document.querySelector(".navigation ul");
const navLists = document.querySelectorAll("#menu li");
const navChilds = document.querySelectorAll('#menu li a');

const showHideMenu = () => {
  const open = JSON.parse(toggleMenu.getAttribute("aria-expanded"));
  toggleMenu.setAttribute("aria-expanded", !open);
  menu.hidden = !menu.hidden;
}

toggleMenu.addEventListener("click",showHideMenu);

const toggleActive = e => {
  navChilds.forEach(a => a.classList.remove("active"));
  e.target.classList.add("active");
};

navLists.forEach(nav => {
  nav.addEventListener("click", function(e) {
    toggleActive(e);
    showHideMenu();
  });
});

function detectScroll() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function onScroll() {
  const scrollPos = window.scrollY;
  const navLinks = document.querySelectorAll('#menu a');
  navLinks.forEach(link => {
    const attrValue = link.getAttribute("href");
    const { offsetTop, offsetHeight } = document.querySelector(attrValue);
    if (
      (offsetTop <= scrollPos) &&
      (offsetTop + offsetHeight > scrollPos)
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

window.onscroll = function() {
  detectScroll();
  onScroll();
};
