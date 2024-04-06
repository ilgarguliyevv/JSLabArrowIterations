// let user = {
//     name: "Ilgar",
//     age: 20,
//     email: "ilgarguliyev2004@gmail.com",
//     address: {
//         city: "Baku",
//         country: "Azerbaijan",
//     },
// };

// elementleri array formada capa vern

// function getUser(user) {
//     let newuserData = user.forEach(user)
//     let userdata = user
// }
// console.log(user);

//Muellim

// let getUser = (user) => {
//     Object.entries(user).forEach(([key, value]) => {
//         if (typeof value === "object") {
//             console.log(`${key}:`);
//             Object.entries(value).forEach(([nestedKey, nestedValue]) => {
//                 console.log(`     ${nestedKey}  ${nestedValue}`);
//             });

//         } else {
//             console.log(`${key} ${value}`);
//         }
//     });
// };

// getUser(user);

// promptdan eded elave etdikde arraydakilardan necesinden kicikdir

// let array = [2, 5, 10, 20, 40, 50];

// let num = prompt("Eded daxil edin");

// function Numb(array) {
//     let count = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < num) {
//             count++;
//         }

//     }
//     console.log(count);

// };

// Numb(array)

// function Numbers(num) {
//     let count = 0;
//     // let result = array.filter(array[i] < num, 0)
//     array.forEach(element => {
//         if (element < num) {
//             count++;
//         }
//     });
//     return count;
// }
// Numbers(num)
// console.log(Numbers(num));

//Muellim ------------------------------------------

// let countNumber = (arr, num) => {
//     let countArr = arr.filter((elem) => elem > num);
//     console.log(countArr);
// };

// let num = Number(prompt("Enter number"));
// let arr = [4, 36, 48, 12, 72];
// countNumber(arr, num);

// Random reqemlerden ibaret array yaradirsiz. en boyuk en kicin reqem. ortalama reqem. cem . kvadratlari

// function RandomNumbers(length, min, max) {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.floor(Math.random() * (max - min + 1)) + min);
//     }
//     return array;
// }
// let length = 10
// let min = 0
// let max = 10
// let randomarray = RandomNumbers(length, min, max);
// console.log(randomarray);

// function NumMax(arr) {
//     return Math.max(...arr)
// }
// function NumMin(arr) {
//     return Math.min(...arr)
// }

// let maxElement = NumMax(randomarray);
// let minElement = NumMin(randomarray);

// console.log(maxElement);
// console.log(minElement);

// function Average(arr) {
//     let sum = arr.reduce((total, current) => total + current, 0)
//     return sum / arr.length
// }
// let average = Average(randomarray)
// console.log(average);

// function NumCem(arr) {
//     return arr.reduce((total, current) => total + current, 0)
// }
// let sum = NumCem(randomarray)
// console.log(sum);

// function Kvadrat(arr) {
//     return arr.map((num) => Math.pow(num, 2));
// }
// let num = Kvadrat(randomarray)
// console.log(num);

