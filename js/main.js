import { Data } from "./server.js";
//responsisve navbar/////////////////////
function toggleNavbar() {
  document.getElementById("navbar-responsive").classList.toggle("open");
}
document.getElementById("menu-btn").addEventListener("click", toggleNavbar);
// dynamic cards////////////////////////
const wrapper = document.querySelector(".d");
const createTable = (data) => {
  while (wrapper.firstChild) {
    wrapper.firstChild.remove();
  }
  data.forEach((user, index) => {
    let card = document.createElement("div");
    card.classList.add("d1");
    card.innerHTML = `
      ${user.image}
      <div class="d2">
        <div>
          <div class="d3">
            ${user.check}
            <p>В наличии</p>
          </div>
          <div class="d3">
            <img src="./images/gift.png" alt="" />
            <h4>Подарок</h4>
          </div>
        </div>
        <button>SALE</button>
      </div>
      <div class="d4">
        <img src="./images/rating.png" alt="" />
        <p>(12) отзывов</p>
      </div>
      <h1>${user.desription}</h1>
      <div class="d5">
        <h2>${user.price}</h2>
        <del>${user.discount}</del>
      </div>
      `;

    wrapper.appendChild(card);
  });
};
createTable(Data);
