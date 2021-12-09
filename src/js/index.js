import { DOMSelectors } from "./Dom";
import { menu, inStockItems, vegetarianOptions, saleMenu } from "./Menu";
const date = new Date();
const day = date.getDay();

const normalDay = function () {
  const displayItems = menu.forEach((item) =>
    DOMSelectors.displayContainer.insertAdjacentHTML(
      "afterbegin",
      `<ul class="item-list">
      <li class="item-name item-value">${item.name}</li>
      <li class="item-price item-value"> $${item.price}</li>
      <li class="item-vegetarian item-value">Vegetarian: ${item.vegetarian}</li>
      <li class="item-image">
        <img
          class="item-image"
          src="${item.img}"
          alt=""
        />
      </li>
      <li class="item-in-stock item-value">In Stock: ${item.inStock}</li>
    </ul>`
    )
  );
  DOMSelectors.fullMenuButton.addEventListener("click", function (e) {
    DOMSelectors.displayContainer.innerHTML = "";
    menu.forEach((item) => {
      DOMSelectors.displayContainer.insertAdjacentHTML(
        "afterbegin",
        `<ul class="item-list">
      <li class="item-name item-value">${item.name}</li>
      <li class="item-price item-value"> $${item.price}</li>
      <li class="item-vegetarian item-value">Vegetarian: ${item.vegetarian}</li>
      <li class="item-image">
        <img
          class="item-image"
          src="${item.img}"
          alt=""
        />
      </li>
      <li class="item-in-stock item-value">In Stock: ${item.inStock}</li>
    </ul>`
      );
    });
  });
  DOMSelectors.resetButton.addEventListener("click", function (e) {
    DOMSelectors.displayContainer.innerHTML = "";
    console.log("clear content works");
  });
  DOMSelectors.vegetarianButton.addEventListener("click", function () {
    DOMSelectors.displayContainer.innerHTML = "";
    vegetarianOptions.forEach((item) => {
      DOMSelectors.displayContainer.insertAdjacentHTML(
        "afterbegin",
        `<ul class="item-list">
      <li class="item-name item-value">${item.name}</li>
      <li class="item-price item-value"> $${item.price}</li>
      <li class="item-vegetarian item-value">Vegetarian: ${item.vegetarian}</li>
      <li class="item-image">
        <img
          class="item-image"
          src="${item.img}"
          alt=""
        />
      </li>
      <li class="item-in-stock item-value">In Stock: ${item.inStock}</li>
    </ul>`
      );
    });
  });
};

const saleDay = function () {
  const displayItems = saleMenu.forEach((item) =>
    DOMSelectors.displayContainer.insertAdjacentHTML(
      "afterbegin",
      `<ul class="item-list">
      <li class="item-name item-value">${item.name}</li>
      <li class="item-price item-value"> $${item.price}</li>
      <li class="item-vegetarian item-value">Vegetarian: ${item.vegetarian}</li>
      <li class="item-image">
        <img
          class="item-image"
          src="${item.img}"
          alt=""
        />
      </li>
      <li class="item-in-stock item-value">In Stock: ${item.inStock}</li>
    </ul>`
    )
  );
};
const init = function () {
  switch (day) {
    case 1:
      normalDay();
      break;
    case 2:
      normalDay();
      break;
    case 3:
      normalDay();
      break;
    case 4:
      normalDay();
      break;
    case 5:
      saleDay();
      break;
    case 6:
      saleDay();
      break;
    case 7:
      saleDay();
      break;
  }
};
init();
