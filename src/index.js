import "./index.css";
import createAbout from "./about.js";
import { changeTab } from "./helper.js";

const content = document.querySelector("#content");
const aboutButton = document.getElementById("about-button");
aboutButton.style.cursor = "pointer";
content.append(createAbout());

aboutButton.addEventListener('click', function (event) {
    event.preventDefault();
    changeTab(createAbout, content);
})








