const getId = (id) => document.getElementById(id);
const projectSelector = document.querySelectorAll(".filter");
const contactForm = getId("contact-form");

const apps = [
  {
    name: "Book Trading Club",
    image: "book_trading_app",
    link: "https://kyawzintun.github.io/book-club/",
    type: "fullstack",
  },
  {
    name: "Pinterest Clone",
    image: "pinterest_clone_app",
    link: "https://kyawzintun.github.io/pinterest-clone/",
    type: "fullstack",
  },
  {
    name: "Real Time Stock Market",
    image: "stock_market_app",
    link: "https://kzt-stock-market.herokuapp.com/",
    type: "fullstack",
  },
  {
    name: "Night Life",
    image: "night_life_app",
    link: "https://kyawzintun.github.io/night-life/",
    type: "fullstack",
  },
  {
    name: "Voting App",
    image: "voting_app",
    link: "https://kyawzintun.github.io/voting-app/",
    type: "fullstack",
  },
  {
    name: "Simon Game",
    image: "simon_game_app",
    link: "https://kyawzintun.github.io/simon/",
    type: "frontend",
  },
  {
    name: "Tic Tac Toe",
    image: "tic_tac_toe_app",
    link: "https://kyawzintun.github.io/tic-tac-toe/",
    type: "frontend",
  },
  {
    name: "Pomarado Clock",
    image: "pomarado_app",
    link: "https://codepen.io/kyawzintun/full/ZKvxyz/",
    type: "frontend",
  },
  {
    name: "Calculator",
    image: "calculator_app",
    link: "https://codepen.io/kyawzintun/full/oWwKMb/",
    type: "frontend",
  },
  {
    name: "Random Quote Machine",
    image: "random_quote_machine",
    link: "https://codepen.io/kyawzintun/full/dvQVGq/",
    type: "frontend",
  },
  {
    name: "Markdown Viewer",
    image: "markdown_viewer",
    link: "https://kyawzintun.github.io/markdown/",
    type: "frontend",
  },
  {
    name: "Wikipedia Viewer",
    image: "wikipedia_viewer",
    link: "https://codepen.io/kyawzintun/full/BWvZBK/",
    type: "frontend",
  },
  {
    name: "Recipe Box",
    image: "recipe_box",
    link: "https://kyawzintun.github.io/cocktail-list/",
    type: "frontend",
  },
  {
    name: "TWITCH STREAMERS",
    image: "twitch_tv",
    link: "https://codepen.io/kyawzintun/full/xqmPKy/",
    type: "frontend",
  },
  {
    name: "Map Data Across the Globe",
    image: "meteorites_landed_map",
    link: "https://kyawzintun.github.io/meteorites-landed-map/",
    type: "visualization",
  },
  {
    name: "National Contiguity",
    image: "force_directed_graph",
    link: "https://kyawzintun.github.io/force-directed-grpah/",
    type: "visualization",
  },
  {
    name: "Doping in Professional Bicycle Racing",
    image: "scatterplot",
    link: "https://kyawzintun.github.io/scatterplot/",
    type: "visualization",
  },
  {
    name: "Monthly Global Land-Surface Temperature",
    image: "heat_map",
    link: "https://kyawzintun.github.io/heat-map/",
    type: "visualization",
  },
  {
    name: "Gross Domestic Product",
    image: "barchart",
    link: "https://kyawzintun.github.io/barchart/",
    type: "visualization",
  },
];

const createListWithTemplate = (projects) => {
  const div = getId("gallery");
  const template = getId("project-list");
  projects.forEach(({ name, image, link }) => {
    const column = document.importNode(template.content, true);
    const webpImg = column.querySelector(".webp");
    const finalImg = column.querySelector(".final-img");
    const projectTitle = column.querySelector(".project-title");
    const aTag = column.querySelector(".visit-btn");
    webpImg.srcset = `./img/projects/${image}.webp`;
    finalImg.src = `./img/projects/${image}.png`;
    finalImg.alt = name;
    projectTitle.textContent = name;
    aTag.href = link;
    div.appendChild(column);
  });
};

const filterProjectById = (id, projects) => {
  const apps =
    id === "all" ? [...projects] : projects.filter((app) => app.type === id);
  createListWithTemplate(apps);
};

const removeProjectList = () => {
  getId("gallery").innerHTML = "";
};

const moveSelector = ({ offsetLeft, clientWidth }) => {
  const selector = document.querySelector(".selector");
  selector.style.left = `${offsetLeft}px`;
  selector.style.width = `${clientWidth}px`;
};

const addActiveClass = (id) => {
  const activeItem = getId(id);
  activeItem.classList.add("active");
  moveSelector(activeItem);
};

const removeActiveClass = () => {
  const filterBtns = document.querySelectorAll(".filter");
  filterBtns.forEach((btn) => btn.classList.remove("active"));
};

const changeTab = (id) => {
  removeActiveClass();
  addActiveClass(id);
  removeProjectList();
  filterProjectById(id, apps);
};

projectSelector.forEach((ele) => {
  const id = ele.getAttribute("id");
  ele.addEventListener("click", function () {
    changeTab(id);
  });
});

const sendEmail = (e) => {
  e.preventDefault();
  const infoMsg = getId("info");
  infoMsg.style.display = "block";
};

contactForm.addEventListener("submit", sendEmail);

const preloadImage = () => {
  apps.forEach((app) => {
    let preloadLink = document.createElement("link");
    preloadLink.href = `./img/projects/${app.image}.webp`;
    preloadLink.rel = "preload";
    preloadLink.as = "image";
    document.head.appendChild(preloadLink);
  });
};

const setCurrYear = () => {
  const year = new Date().getFullYear();
  getId("date").innerHTML = year;
};

const init = () => {
  preloadImage();
  filterProjectById("fullstack", apps);
  moveSelector(getId("fullstack"));
  setCurrYear();
};

init();
