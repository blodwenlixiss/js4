// 1. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს
//  და დააბრუნებს true -ს თუ რიცხვი  არის 3ის ჯერადი ,
// ხოლო თუ არაა მაშნ false-ს

// const randomNum = 9;

// const multipleNum = function (num) {
//   num % 3 === 0 ? console.log(true) : console.log(false);
// };
// multipleNum(randomNum);

// 2. დაწერეთ ფუნქცია, getCurrencySymbolFromCode
//  რომელიც პარამეტრად მიიღებს ვალუტის კოდს
//  (USD ან EUR ან GEL) სტრინგის სახით და დააბრუნებს
//  ამ კოდის შესაბამის სიმბოლოს ($, €, ლ) თუ ისეთი
// კოდს გადავცემ რომლის სიმბოლოც არ მაქვს დააბრუნოს კოდი.

// const currency = "5 EUR";
// let currencyArr = currency.split(" ");
// const getCurrencySymbolFromCode = function (currency) {
//   for (let i = 0; i < currencyArr.length; i++) {
//     switch (currency[i]) {
//       case "USD":
//         currencyArr[i] = "$";
//         break;
//       case "EUR":
//         currencyArr[i] = "€";
//         break;
//       case "GEL":
//         currencyArr[i] = "₾";
//         break;
//       default:
//         currency[i];
//     }
//   }
// };
// getCurrencySymbolFromCode(currencyArr);
// let finalCurrency = currencyArr.join("");
// console.log(finalCurrency);

// 3. დაწერეთ ფუნქცია, რომელიც მიიღებს lowerCase სტრინგს
//  მაგ (my name is joe) და დააბრუნებს UpperCase
//  (MY NAME IS JOE) სტრინგს.

// let str = "my name is joe";
// const getToUpperCase = function (str) {
//   console.log(str.toUpperCase());
// };
// getToUpperCase(str);

// 4.  დაწერეთ ფუნქცია, რომელიც არგუმენტად მიიღებს
//  გასაყიდ და ასაღებ ფასს, დათვლის მოგებას  და დააბრუნებს
//  გასაყიდი ფასის რა პროცენტს შეადგენს მოგება.

// const purchasePrice = 100;
// const sellPrice = 150;
// const pricePrecentage = function (purchasePrice, sellPrice) {
//   console.log((((sellPrice - purchasePrice) * 100) / 150).toFixed(2));
// };
// pricePrecentage(purchasePrice, sellPrice);

// 5. დაწერეთ ფუნქცია, რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს
//  გაფილტრულ მასივს .filter სადაც მხოლოდ ლუწი რიცხვები იქნება.

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const geOddNums = function (nums) {
//   console.log(nums.filter((el) => el % 2 === 0));
// };
// geOddNums(nums);

// 6. დაწერეთ ფუნქცია, რომელიც მიიღებს ობიექტების მასივს
//  (ობიექტს უნდა ქონდეს ველი name) და მეორე პარამეტრად მიიღებს
//  სტრინგს და ამ მასივში .find ით მოვძებნოთ ობიექტის
//  name === ფუნქციის მეორე პარამეტრს და დავაბრუნოთ ნაპოვნი ობიექტი.

// const objArr = [{ name: "nika" }, { name: "luka" }];
// const rame = function (arr, name) {
//   return arr.find((item) => item.name === name);
// };
// console.log(rame(objArr, "luka"));

// დამატებითი დავალება:

// დავალება 1
// შექმნით div;
// div ტეგის შიგნითაც დაამატეთ p ტეგი;
// p ტეგს დამაატეთ კლასი text;
// p ტეგის შიგნით დაამატეთ ტექსტი "hello world"
// საბოლოოდ  html-ში ასეთი სტრუქტურა უნდა მიიღოთ
// <div>
// <p class="text">hello world</p>
// </div>

// let div = document.createElement("div");
// let p = document.createElement("p");
// p.textContent = "Hello world";
// div.appendChild(p);
// document.body.appendChild(div);

// დავალება 2
// შექმენით 5 ელემენტიანი მასივი, რომელსაც ჯავასკრიპტით  li
// ტეგების შიგნით დაარენდერებთ:
// საბოლოოდ  html-ში ასეთი სტრუქტურა უნდა მიიღოთ
// <ul>
// <li>მასივის ელემენტი</li>
// <li>მასივის ელემენტი</li>
// <li>მასივის ელემენტი</li>
// <li>მასივის ელემენტი</li>
// <li>მასივის ელემენტი</li>
// </ul>

// let ulList = document.createElement("ul");
// const arr = [1, 2, 3, 4, 5];
// function createList(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let liList = document.createElement("li");
//     liList.append(arr[i]);
//     liList.style.listStyleType = "none";
//     ulList.appendChild(liList);
//   }
//   document.body.appendChild(ulList);
// }
// createList(arr);
