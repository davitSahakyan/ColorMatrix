const div = document.createElement("DIV");
const rootElement = document.getElementById("root");

function mouseOver(matrixElementDiv) {
    matrixElementDiv.style.color = "white";
}

function mouseOut(matrixElementDiv) {
    matrixElementDiv.style.color = "transparent";
}

function buildMatrix() {
    for (let blueColor = 0; blueColor <= 255; blueColor++) {
        const matrixRow = document.createElement("div");
        for (let greenColor = 0; greenColor <= 255; greenColor++) {
            const matrixElementDiv = document.createElement("div");
            const rgbContainerDiv = document.createElement("div");
            const rgbTextContainer = document.createElement("div");
            const indexSpan = document.createElement("span");
            indexSpan.textContent = `M(${blueColor} ${greenColor})`;

            rgbContainerDiv.textContent = `(${0} ${blueColor} ${greenColor})`;
            rgbTextContainer.textContent = "RGB";

            matrixElementDiv.style.backgroundColor = `rgb(0, ${blueColor}, ${greenColor})`;
            matrixRow.classList.add("matrixRow");
            matrixElementDiv.classList.add("matrixElement");
            matrixElementDiv.id = `M(${blueColor} ${greenColor})`;

            matrixElementDiv.addEventListener("mouseover", () =>
                mouseOver(matrixElementDiv)
            );
            matrixElementDiv.addEventListener("mouseout", () =>
                mouseOut(matrixElementDiv)
            );

            matrixElementDiv.appendChild(rgbTextContainer);
            matrixElementDiv.appendChild(rgbContainerDiv);
            matrixElementDiv.appendChild(indexSpan);
            matrixRow.appendChild(matrixElementDiv);
            rootElement.appendChild(matrixRow);
        }
        rootElement.appendChild(matrixRow);
    }
}
buildMatrix();
