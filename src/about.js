import Chicken from "./images/Chicken.png";
import Chicken2 from "./images/Chicken2.png";
import { createParagraph } from "./helper.js";


export default function createAbout() {
    const about = document.createElement("div");
    about.id = "about";

    const heading = document.createElement("h2");
    heading.textContent = "About";

    const subheading = document.createElement("h3");
    subheading.textContent = "The Popcorn Bucket";

    const story = document.createElement("div");
    story.id = "two-column";

    const storyText = document.createElement("div");
    storyText.append(
        createParagraph("The Popcorn Bucket started with a simple idea and a whole lot of hungry friends. Back in 2018, our founder, Chik Norris (yes, that’s really his name), combined his two greatest passions — crispy chicken and flavorful popcorn — to create a place where the ordinary becomes extraordinary."),
        createParagraph("What began as a small food truck parked outside local tennis courts quickly popped off (literally!). People couldn’t get enough of our one-of-a-kind popcorn creations, and soon, The Popcorn Bucket found a permanent home. Today, we’re proud to serve our community with bold flavors, cozy vibes, and a whole lot of character."),
        createParagraph("Our mission is simple: to bring people together over crazy-good popcorn and chicken, creating moments of joy, laughter, and a little bit of delicious chaos. Whether you’re here for a quick snack or a full meal, we believe food should be fun, memorable, and always worth sharing.")
    );

    const storyImage = document.createElement("div");
    const chickenImage = document.createElement("img");
    chickenImage.src = Chicken;
    chickenImage.alt = "Crispy chicken";
    storyImage.append(chickenImage);
    story.append(storyText, storyImage);

    const slogan = document.createElement("div");
    slogan.id = "two-column";
    slogan.classList.add("slogan");

    const sloganImageContainer = document.createElement("div");
    const chicken2Image = document.createElement("img");
    chicken2Image.src = Chicken2;
    chicken2Image.alt = "Popcorn chicken";
    sloganImageContainer.append(chicken2Image);

    const sloganText = document.createElement("div");
    sloganText.append(createParagraph("“Popcorn and chicken might sound like an odd pair. But one bite, and you’ll wonder why they weren’t together all along!”"));
    slogan.append(sloganImageContainer, sloganText);

    about.append(heading, subheading, story, slogan);
    return about;
}
