console.log("api integration in html");

const apiKey = "fd8d9cccc8b8444194fa5063b029bcee";
const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`;
const method = "GET";

// let date = new ;
// XTTP

let xhr = new XMLHttpRequest();

xhr.open(method, url);
xhr.onprogress = () => {
  console.log("loading...");
};
xhr.onload = () => {
  let response = JSON.parse(xhr.responseText);
  console.log(response);
  let resArray = response.articles;

  let cardHolder = document.querySelector("#cardsHolder");

  let index = 0;
  while (index < resArray.length) {
    let element = resArray[index];
    let cardString = `
      <div class="card m-2" style="width: 18rem">
            <img src="${element.urlToImage}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text">
                ${element.description}
              </p>
              <a href="${element.url}" class="btn btn-primary">Read More</a>
            </div>
          </div>`;
    cardHolder.innerHTML += cardString;
    index++;
  }
};

xhr.send();