const fontSlider = document.querySelector("#fontSlider");
const fontSizeValue = document.querySelector("#fontSizeValue");
const previewText = document.querySelector("#previewText");

function updateFontSize() {
    const selectedSize = `${fontSlider.value}px`;

    previewText.style.fontSize = selectedSize;
    fontSizeValue.textContent = selectedSize;
}

fontSlider.addEventListener("input", updateFontSize);
updateFontSize();