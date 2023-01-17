import { fetchPosts } from "../api/posts.js";
import { addToBankBalance, bankBalanceAmount } from "./bankUtils.js";
import {
  addElementToDom,
  elementVisible,
  getElementById,
  addElementToDomOnce,
  updateInnerText,
} from "./utilsHelper.js";

//Elements setup
const featureLiTemplate = (item) =>
  //Template for li elements
  `
    <li>${item}</li>
  `;
const laptopImgElement = getElementById("laptopShowcaseImg");
const buyButtonElement = getElementById("buyNowButton");
const laptopTitleElement = getElementById("laptopTitle");
const laptopPriceElement = getElementById("price");
const laptopDescElement = getElementById("laptopDescription");
const displayLaptopCardElement = document.getElementById(
  "displayLaptopCardContainer"
);
const selectLaptopElement = document.getElementById("selectLaptopDropdown");
const posts = await fetchPosts(); //Holds laptops from api

//functions
const getImg = (id, format) => {
  //returns image url
  const url = `https://hickory-quilled-actress.glitch.me/assets/images/${id}.`;

  return url + format;
};

export const populateLaptopList = () => {
  //Populates laptop select list
  posts.map((laptop) => {
    //New element
    const createNewOptionElement = document.createElement("option");
    //Sets computer id as value
    createNewOptionElement.value = laptop.id;
    //Adds computer title to show as option
    createNewOptionElement.innerText = laptop.title;
    //Appends new element
    selectLaptopElement.appendChild(createNewOptionElement);
  });
};

const showcaseLaptop = (item) => {
  //Function display laptop info to card
  //Inserts item info to elements

  elementVisible(displayLaptopCardElement, true); //displays laptop info

  //Adds laptops info to dom
  updateInnerText(laptopTitleElement, item.title);
  updateInnerText(laptopDescElement, item.description);
  updateInnerText(laptopPriceElement, item.price);
  laptopImgElement.src = getImg(item.id, "png");
  //Img source and failsafe
  laptopImgElement.onerror = () => {
    laptopImgElement.src = getImg(item.id, "jpg");
  };
};

function onBuy() {
  //Handles buying machine

  const price = +laptopPriceElement.innerText; //Sets laptop price to variable

  if (bankBalanceAmount >= price) {
    //If buyer has enough money
    addToBankBalance(-Math.abs(price)); //deduct price from bank balance
    alert(`You now own a "${laptopTitleElement.innerText}". Congratulations!`); //Notification to user
  } else {
    //Not enougn money notification
    alert(
      `You do not have enougn money to purchase a "${laptopTitleElement.innerText}". Go get a job!`
    );
  }
}

selectLaptopElement.addEventListener("change", (e) => {
  //Laptop selection handler

  const chosenLaptop = //Finds the selected laptop info
    e.target.value !== "Select a laptop" &&
    posts.filter((item) => +e.target.value === item.id)[0];

  const featuresListElement = getElementById("featuresList"); //Gets features list element
  //Updates
  if (e.target.value === "Select a laptop") {
    //Handles features title
    featuresListElement.innerText = "";
    elementVisible(displayLaptopCardElement, false);
  } else {
    //Handles features title
    featuresListElement.innerText = "Features";

    chosenLaptop.specs.map((item) => {
      //Updates features as li elements of selected laptop
      addElementToDom(featuresListElement, featureLiTemplate(item));
    });
    showcaseLaptop(chosenLaptop);
  }
});

buyButtonElement.addEventListener("click", () => {
  //Buy now event hadler
  onBuy();
});
