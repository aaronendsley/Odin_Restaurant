import "./index.css";
import createAbout from "./about.js";
import createMenu from './menu.js';
import { changeTab } from "./helper.js";

const content = document.querySelector("#content");
const aboutButton = document.getElementById("about-button");
const menuButton = document.getElementById("menu-button");
const locationButton = document.getElementById("location-button");
aboutButton.style.cursor = "pointer";
menuButton.style.cursor = "pointer";
locationButton.style.cursor = "pointer";
content.append(createAbout());

aboutButton.addEventListener('click', function (event) {
    event.preventDefault();
    changeTab(createAbout, content);
})

menuButton.addEventListener('click', function (event) {
    event.preventDefault();
    changeTab(createMenu, content);
})

locationButton.addEventListener('click', function (event) {
    event.preventDefault();
})








