const gallery = document.querySelector("#gallery");

function createImageUrl(label, backgroundColor) {
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="240" height="160" viewBox="0 0 240 160">
            <rect width="240" height="160" fill="${backgroundColor}" rx="16" />
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="24" font-family="Arial">
                ${label}
            </text>
        </svg>
    `;

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const imageUrls = [
    createImageUrl("Mountain", "#2563eb"),
    createImageUrl("Forest", "#15803d"),
    createImageUrl("Ocean", "#0f766e"),
];

imageUrls.forEach((imageUrl, index) => {
    const image = document.createElement("img");

    image.src = imageUrl;
    image.alt = `Gallery image ${index + 1}`;
    gallery.appendChild(image);
});