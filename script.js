//Varibale declearing area

const dogDiv = document.getElementById("dog");
const GetNew = document.getElementById("btn");

//declearing dog showing function

const showDog = () =>
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      dogDiv.innerHTML = `<img style="height: 500px; width: 500px" src="${data.message}" />`;
    });

// event Handling Area
showDog();
GetNew.addEventListener("click", showDog);
