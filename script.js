const div = document.createElement("DIV");
const rootElement = document.getElementById("root");
let array = [];

function mouseOver(matrixElementDiv) {
    matrixElementDiv.style.color = "white";
    console.log(matrixElementDiv.id);
}

function mouseOut(matrixElementDiv) {
    matrixElementDiv.style.color = "transparent";
}

function buildMatrix() {
    for (let i = 0; i <= 255; i = i + 10) {
        array.push(i);
    }
    return array;
}
buildMatrix();

array.forEach((blueColor) => {
    const matrixRow = document.createElement("div");
    array.forEach((greenColor, index) => {
        const randomId =
            Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15);
        const matrixElementDiv = document.createElement("div");
        const rgbContainerDiv = document.createElement("div");
        const rgbTextContainer = document.createElement("div");

        const redColorSpan = document.createElement("span");
        const blueColorSpan = document.createElement("span");
        const greenColorSpan = document.createElement("span");
        const rgbTextSpan = document.createElement("span");

        redColorSpan.textContent = `${0}, `;
        blueColorSpan.textContent = `${blueColor}, `;
        greenColorSpan.textContent = greenColor;
        rgbTextSpan.textContent = "RGB";

        rgbContainerDiv.appendChild(redColorSpan);
        rgbContainerDiv.appendChild(blueColorSpan);
        rgbContainerDiv.appendChild(greenColorSpan);
        rgbTextContainer.appendChild(rgbTextSpan);

        matrixElementDiv.style.backgroundColor = `rgb(0, ${blueColor}, ${greenColor})`;
        matrixRow.classList.add("matrixRow");
        matrixElementDiv.classList.add("matrixElement");
        matrixElementDiv.id = randomId;

        matrixElementDiv.addEventListener("mouseover", () =>
            mouseOver(matrixElementDiv)
        );
        matrixElementDiv.addEventListener("mouseout", () =>
            mouseOut(matrixElementDiv)
        );

        matrixElementDiv.appendChild(rgbTextContainer);
        matrixElementDiv.appendChild(rgbContainerDiv);
        matrixRow.appendChild(matrixElementDiv);
        rootElement.appendChild(matrixRow);
    });
    rootElement.appendChild(matrixRow);
});
