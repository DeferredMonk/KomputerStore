import { fetchPosts } from "../api/posts.js";
import { addToBankBalance, bankBalanceAmount } from "./bankUtils.js";

//Elements setup
const ImgElement = document.getElementById("laptopShowcaseImg");
const newTitleElement = document.createElement("h5");
const newDescriptionElement = document.createElement("p");
const newBuyNowButtonElement = document.createElement("button");
const newPriceElement = document.createElement("p");
const displayLaptopCardElement = document.getElementById(
  "displayLaptopCardContainer"
);
const laptopDescriptionBodyElement = document.getElementById(
  "laptopDescriptionBody"
);
const laptopPriceAndBuyContainerElement = document.getElementById(
  "laptopPriceAndBuyContainer"
);
const selectLaptopElement = document.getElementById("selectLaptopDropdown");
const posts = await fetchPosts(); //Holds laptops from api
const getImg = (id, format) => {
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

const showcaseLaptop = async (item) => {
  //Function display laptop info to card
  //Inserts item info to elements
  displayLaptopCardElement.className = "card d-flex flex-row";
  newBuyNowButtonElement.className = "btn btn-primary";
  newBuyNowButtonElement.id = "buyNowButton";
  newBuyNowButtonElement.innerText = "Buy now!";
  ImgElement.src = getImg(item.id, "png");
  ImgElement.onerror = () => {
    ImgElement.src = getImg(item.id, "jpg");
  };
  newTitleElement.innerText = item.title;
  newDescriptionElement.innerText = item.description;
  newPriceElement.innerText = item.price;

  console.log(await getImg(item.id));
  //Append new item info to dom elements
  laptopDescriptionBodyElement.appendChild(newTitleElement);
  laptopDescriptionBodyElement.appendChild(newDescriptionElement);
  laptopPriceAndBuyContainerElement.appendChild(newPriceElement);
  laptopPriceAndBuyContainerElement.appendChild(newBuyNowButtonElement);
};

//Laptop selection handler
selectLaptopElement.addEventListener("change", (e) => {
  //Finds the selected laptops info
  const chosenLaptop =
    e.target.value !== "Select a laptop" &&
    posts.filter((item) => +e.target.value === item.id)[0];
  //Gets features list element
  const featuresListElement = document.getElementById("featuresList");
  //Updates
  if (e.target.value === "Select a laptop") {
    //Handles features title
    featuresListElement.innerText = "";
    displayLaptopCardElement.className = "invisible";
  } else {
    //Handles features title
    featuresListElement.innerText = "Features";

    chosenLaptop.specs.map((item) => {
      //Updates features as list elements to select
      const newLiElement = document.createElement("li");
      newLiElement.innerText = item;
      featuresListElement.appendChild(newLiElement);
    });
    showcaseLaptop(chosenLaptop);
  }
});

newBuyNowButtonElement.addEventListener("click", () => {
  const price = +newPriceElement.innerText;
  if (bankBalanceAmount >= price) {
    addToBankBalance(-Math.abs(price));
    alert(`You now own a "${newTitleElement.innerText}". Congratulations!`);
  } else {
    alert(
      `You do not have enougn money to purchase a "${newTitleElement.innerText}". Go get a job!`
    );
  }
});
