export function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

export function changeTab(pageFunction, clearUI) {
    clearUI.innerHTML = "";
    clearUI.append(pageFunction());
}