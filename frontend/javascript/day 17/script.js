// fetch this api using function https://emojihub.yurace.pro/api/random





function getEmoji(){
  const res = fetch("https://emojihub.yurace.pro/api/random")
        .then((response) => response.json())
        .then((data) => {
            const getEmojiolement = document.getElementById("emoji");
            getEmojiolement.innerText = data.emoji;
            console.log(data)})
        .catch((error) => console.error("Error fetching emoji:", error));
}




// const promise = fetch("https://random.dog/woof.json");
// console.log(promise);

// promise
//     .then((data) =>data.json())
//     .then((ActualData) => {console.log(ActualData)})
//     .catch((error) => console.log(error));
    