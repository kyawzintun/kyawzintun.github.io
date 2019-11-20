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
  [...navChilds].forEach(a => a.classList.remove("active"));
  e.target.classList.add("active");
};

[...navLists].forEach(nav => {
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
  const scrollPos = $(document).scrollTop();
  $("#menu a").each(function() {
    const currLink = $(this);
    const refElement = $(currLink.attr("href"));
    if (
      refElement.position().top <= scrollPos &&
      refElement.position().top + refElement.height() > scrollPos
    ) {
      $("#menu ul li a").removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}

window.onscroll = function() {
  detectScroll();
  onScroll();
};
