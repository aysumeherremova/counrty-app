const DATA = [];
const content = document.getElementById("content");
const inputt = document.querySelector(".input");

fetch("https://restcountries.com/v3.1/all")
  .then(res => res.json())
  .then(melumat => {
    DATA.push(...melumat);
    show();
  });

let count = 8;

function show() {
  content.innerHTML = "";
  DATA.slice(0, count).forEach(item => {
    content.innerHTML += `
      <article class="flex flex-col dark:bg-gray-50">
        <a href="#" data-country='${JSON.stringify(item)}' onclick="showDetails(event)">
          <img alt="${item.name.common}" class="object-cover w-full h-52 dark:bg-gray-500" src="${item.flags.svg}">
        </a>
        <div class="flex flex-col flex-1 p-6">
          <a class="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">${item.name.common}</a>
          <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
            <span>${item.capital}</span>
          </div>
        </div>
      </article>
    `;
  });
}

function showDetails(event) {
  const item = JSON.parse(event.target.getAttribute('data-country'));
  let countryName = encodeURIComponent(item.name.common);
  window.location.href = `details.html?country=${countryName}`;
}

function elaveEt() {
  count += 8;
  show();
}

const hiddenbars = document.querySelector(".hiddenbars");
const xmark = document.querySelector(".fa-xmark");
const bars = document.querySelector(".bars");
const inputaxtar = document.querySelector(".inputaxtar");
const container = document.querySelector(".container");
const flags = document.querySelector(".flagshere");
const boxs = document.querySelector(".boxs");
const addBtn = document.querySelector(".addBtn");
const main = document.querySelector("main");
const randomelem = document.querySelector("#randomelem");

function darkMode() {
  let elements = document.querySelectorAll(".navbar, .footer, body");
  elements.forEach((element) => {
    element.classList.toggle("dark-mode");
  });
}

let flag = false;

function OpenBars() {
  if (flag == false) {
    hiddenbars.style.display = "block";
    bars.style.display = "none";
    xmark.style.display = "block";
    flag = true;
  } else {
    hiddenbars.style.display = "none";
    bars.style.display = "block";
    xmark.style.display = "none";
    flag = false;
  }
}

function Inputla() {
  if (inputt.style.display == "flex") {
    inputt.style.display = "none";
  } else {
    inputt.style.display = "flex";
  }
  inputaxtar.focus();
}

let data;

fetch("https://raw.githubusercontent.com/TheOksigen/purfect_data/main/country.json")
  .then((res) => res.json())
  .then((resJson) => {
    data = resJson;
    randomla();
    showBoxs();
    console.log(data);
  });

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomla() {
  let obj = data[rand(0, 249)];
  let neighbors = obj.borders ? obj.borders.map(code => `<span class="neighbor">${code}</span>`).join(" ") : "Yoxdur";

  let content = `
    <div class="rand-card">
      <div class="card-img w-100 h-50">
        <img src="${obj.flags.png}" alt="${obj.name}">
      </div>
      <div class="card-text">
        <h1>${obj.name}</h1>
        <p>Paytaxt: ${obj.capital}</p>
        <p>Yerleşdiyi qitə: ${obj.region}</p>
        <p>${obj.name}-in əhalisi: ${obj.population}</p>
        <p>Onun qonşuları:</p>
        <div class="neighbors">${neighbors}</div>
      </div>
    </div>
  `;

  randomelem.innerHTML = content;
}

function show() {
    content.innerHTML = "";
    DATA.slice(0, count).forEach(item => {
        content.innerHTML += `
            <article class="flex flex-col dark:bg-gray-50">
                <a href="details.html?country=${encodeURIComponent(item.name.common)}" >
                    <img alt="${item.name.common}" class="object-cover w-full h-52 dark:bg-gray-500" src="${item.flags.svg}">
                </a>
                <div class="flex flex-col flex-1 p-6">
                    <a class="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">${item.name.common}</a>
                    <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                        <span>${item.capital}</span>
                    </div>
                </div>
            </article>
        `;
    });
}