"use strict";

const products = [
  {
    name: "Koenigsegg",
    type: "Sport",
    img: "./assets/Car.png",
    fuel: "90L",
    transmission: "Manual",
    capacity: "2 People",
    price: 99.0,
    oldPrice: null,
    per: "day",
    favorite: true,
  },
  {
    name: "Nissan GT-R",
    type: "Sport",
    img: "./assets/Car (2).png",
    fuel: "80L",
    transmission: "Manual",
    capacity: "2 People",
    price: 80.0,
    oldPrice: 100.0,
    per: "day",
    favorite: false,
  },
  {
    name: "Rolls-Royce",
    type: "Sedan",
    img: "./assets/Car (3).png",
    fuel: "70L",
    transmission: "Manual",
    capacity: "4 People",
    price: 96.0,
    oldPrice: null,
    per: "day",
    favorite: true,
  },
  {
    name: "Bugatti",
    type: "Sport",
    img: "./assets/Car (4).png",
    fuel: "100L",
    transmission: "Automatic",
    capacity: "2 People",
    price: 150.0,
    oldPrice: null,
    per: "day",
    favorite: false,
  },
];

const recommendCars = [
  {
    name: "All New Rush",
    type: "SUV",
    img: "./assets/Car (5).png",
    fuel: "70L",
    transmission: "Manual",
    capacity: "6 People",
    price: 72.0,
    oldPrice: 80.0,
    per: "day",
    favorite: false,
  },
  {
    name: "CR-V",
    type: "SUV",
    img: "./assets/Car (6).png",
    fuel: "80L",
    transmission: "Manual",
    capacity: "6 People",
    price: 80.0,
    oldPrice: null,
    per: "day",
    favorite: true,
  },
  {
    name: "All New Terios",
    type: "SUV",
    img: "./assets/Car (7).png",
    fuel: "90L",
    transmission: "Manual",
    capacity: "6 People",
    price: 74.0,
    oldPrice: 80.0,
    per: "day",
    favorite: false,
  },
  {
    name: "MG ZX Exclusive",
    type: "Hatchback",
    img: "./assets/Car (8).png",
    fuel: "70L",
    transmission: "Manual",
    capacity: "4 People",
    price: 76.0,
    oldPrice: 80.0,
    per: "day",
    favorite: true,
  },
  {
    name: "New MGZS",
    type: "SUV",
    img: "./assets/Car (9).png",
    fuel: "80L",
    transmission: "Manual",
    capacity: "6 People",
    price: 80.0,
    oldPrice: null,
    per: "day",
    favorite: true,
  },
  {
    name: "MG ZX Excite",
    type: "Hatchback",
    img: "./assets/Car (10).png",
    fuel: "90L",
    transmission: "Manual",
    capacity: "4 People",
    price: 74.0,
    oldPrice: 80.0,
    per: "day",
    favorite: false,
  },
  {
    name: "All New Rush",
    type: "SUV",
    img: "./assets/Car (5).png",
    fuel: "70L",
    transmission: "Manual",
    capacity: "6 People",
    price: 72.0,
    oldPrice: 80.0,
    per: "day",
    favorite: false,
  },
  {
    name: "CR-V",
    type: "SUV",
    img: "./assets/Car (6).png",
    fuel: "80L",
    transmission: "Manual",
    capacity: "6 People",
    price: 80.0,
    oldPrice: null,
    per: "day",
    favorite: "assets/Like.svg",
  },
];

function fetchCar(url, containerId) {
  const container = document.getElementById(containerId);
  url.forEach(function (singleCar) {
    const cardHTML = `<div class="card">
          <div class="about"><div class="carName"><h2>${singleCar.name}</h2>
          <span><p>${singleCar.type}</p></span></div>
      
          <button  class="favorite">    <img src="assets/Like.svg" alt="like" /></button></div>
  
          <img class="carImg" src="${singleCar.img}" alt="${singleCar.name}" class="car-img" />
          <div class="txt">
            <span><img src="assets/gas-station.svg" alt="gas" />${singleCar.fuel}</span>
            <span><img src="assets/middle.svg" alt="transmission" />${singleCar.transmission}</span>
            <span
              ><img src="assets/profile-2user.svg" alt="profile" />${singleCar.capacity}</span
            >
          </div>
          <div class="price-rent">
            <span class="price">${singleCar.price}$</span>
            <a href="#"><button class="rent">Rent Now</button></a>
          </div>`;

    container.innerHTML += cardHTML;
  });
}
fetchCar(products, "recommendedCars");
fetchCar(recommendCars, "cardContainer");
