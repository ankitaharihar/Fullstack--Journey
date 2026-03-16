let count = 0;
const countValue = document.querySelector("#countValue");

function increaseCount() {
    count++;
    countValue.innerText = count;
}
