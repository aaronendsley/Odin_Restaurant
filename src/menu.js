import Buttery from './images/original.png';
import Caramel from './images/Caramel.png';
import ChedderChicken from './images/ChedderChicken.png';
import Zesty from './images/ZestyRanch.png';
import { createParagraph } from "./helper.js";

function createMenuItem(header, paragraph, image) {
    const MenuItem = document.createElement('div');
    MenuItem.className = "menu-item";

    const Header = document.createElement("h4")
    Header.textContent = header;
    MenuItem.appendChild(Header);

    const MenuItemContent = document.createElement('div');
    MenuItemContent.className = "menu-item-content";
    MenuItemContent.appendChild(createParagraph(paragraph));

    const ImageContainer = document.createElement('div');
    const Image = document.createElement('img')
    Image.src = image;
    ImageContainer.appendChild(Image);
    MenuItemContent.appendChild(ImageContainer);
    MenuItem.appendChild(MenuItemContent);

    return MenuItem;

}

export default function createMenu() {
    const Menu = document.createElement('div');
    Menu.id = "menu";

    const heading = document.createElement("h2");
    heading.textContent = "Menu";
    Menu.appendChild(heading);

    const subheading = document.createElement("h3");
    subheading.textContent = "POPPIN’ FLAVORS FOR EVERY CRAVING";
    Menu.appendChild(subheading);

    Menu.appendChild(createMenuItem('Classic Butter', 'A timeless favorite. Light, buttery, and perfectly popped.', Buttery));

    Menu.appendChild(createMenuItem('Caramel Crunch', 'Sweet, rich, and irresistibly crunchy. A crowd-pleaser for a reason.', Caramel));

    Menu.appendChild(createMenuItem('Popcorn Chicken Cheddar', 'Crispy, golden-brown bites of popcorn chicken tossed in bold, savory cheddar popcorn seasoning.Crunchy on the outside, juicy on the inside, and bursting with cheesy goodness. A delicious twist on two classic favorites!', ChedderChicken));

    Menu.appendChild(createMenuItem('Zesty Ranch', 'Cool, tangy, and packed with flavor. The perfect balance to keep you coming back for more.', Zesty));

    return Menu;

}