require("dotenv").config();
let name = process.env.MY_NAME;
let city = process.env.MY_CITY;
let language = process.env.MY_LANGUAGE;

console.log(
  ` I am ${name} Wilder in ${city} and i love ${language} `
);


