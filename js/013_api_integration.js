console.log("api integration in html");

const apiKey = "fd8d9cccc8b8444194fa5063b029bcee";
const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`;
const method = "GET";

// let date = new ;
// XTTP

let xhr = new XMLHttpRequest();

xhr.open(method, url);
xhr.onprogress = ()=>{
  console.log("loading...");
}
xhr.onload = () => {
console.log(xhr.responseText);
let response = JSON.parse(xhr.responseText);
console.log(response);
};

xhr.send();

// let obj = {
//   name : "SHahzad",
//   age : 12,
// }

// let obj = {
//   "name" : "Shahzad",
//   "age" : 234.
// }

// json => obj (JSON.parse())
// obj => json (JSON.stringify());