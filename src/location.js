import { createParagraph } from "./helper.js";
import LocationMap from './images/Map.png';


export default function createLocation() {
    const Location = document.createElement("div");
    Location.id = "location";

    const Heading = document.createElement('h2');
    Heading.textContent = "Location";
    Location.appendChild(Heading);

    const LocationContent = document.createElement('div');
    LocationContent.id = "location-content";

    const LocationAddress = document.createElement('div');
    LocationAddress.id = "location-address";
    LocationAddress.appendChild(createParagraph("The Popcorn Bucket"))
    LocationAddress.appendChild(createParagraph("1234 Popcorn Chicken Lane"));
    LocationAddress.appendChild(createParagraph("Kernelville, PC 56789-POPC"));
    LocationAddress.appendChild(createParagraph("Right off Popcorn Blvd, between Chicken Wing Way and Tasty Trail. Look for the big bucket!"));
    LocationContent.appendChild(LocationAddress);

    const LocationImageMap = document.createElement('div');
    LocationImageMap.id = "location-map";

    const ImgMap = document.createElement('img');
    ImgMap.src = LocationMap;
    ImgMap.alt = "Location of the popcorn Bucket";
    LocationImageMap.appendChild(ImgMap);

    LocationContent.appendChild(LocationImageMap);

    Location.appendChild(LocationContent);

    return Location;
}