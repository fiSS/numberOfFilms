//caLLback 
// function learnJs(lang, callback) {
//     console.log(`i learn ${lang}`);
//     callback();
// }

// function callback() {
//     console.log('урок пройден');
// }

// learnJs('JS', callback);

//objects, деструктуризация
// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     color: {
//         border: 'black',
//         bg: 'red'
//     }   
// };

//console.log(Object.keys(options).length);

// let counter = 0;
// for(let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`свойство ${key}, имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`свойство ${key}, имеет значение ${options[key]}`);
//         counter++;
//     }
    
// }
// console.log(counter);

//деструктуризация, objects
// let cars = {
//     toyota: "2000000 R",
//     BMV: "3000000 R",
//     mers: "4000000 R",
//     audi: {
//         color: 'black',
//         price: "3500000 R",

//     },
//     bentley: {
//         price: "10000000 R",
//         engine: "500 hP"
//     },
//     makeTest: function() {
//         console.log(cars);
//     }
// };
// const {toyota, BMV, audi} = cars;


// for (let key in cars) {
//     if(typeof(cars[key]) === "object") {
//         for(let i in cars[key]) {
//             console.log(`свойство ${key} иммеет значение ${cars[key][i]}`);
//         }
//     } else {
//         console.log(`свойство ${key} имеет значение ${cars[key]}`);
//     }
// }


//const {price, engine} = cars.bentley;
//const {color, price} = cars.audi;
//console.log(price, engine);

// console.log(cars);
// console.log(Object.keys(cars));



// let arr = ['вася', 'petr', 'ara', 'Kat', 'mouse'];

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }



// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });


// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join("; "));

// let array = ["vas", "petya", "Kolyan", " Mahno"];
// console.log(array.join('; '));

// let Obj = {
//     a: 29,
//     b: 44
// }
// let copyr = Obj; //ссылка это ссылка на существующий объект Obj
// console.log(copyr.a + copyr.b);


//1 спосб с циклами
function copy(mainObj) {
    let objCopy = {};

    let key;
    for(key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
}

const newNumbers = copy(numbers);
newNumbers.c.y = 33;
// console.log(newNumbers);
// console.log(numbers);

const add = {
    d: 30,
    y: 99
};


//console.log(Object.assign(numbers, add));
const clone = Object.assign({}, add);
clone.d = 1;

// console.log(add);
// console.log(clone);

const oldArray = ['q', 'w', 'e'];
const newArray = oldArray.slice();

newArray[1] = 'WWW';
console.log(oldArray);
console.log(newArray);

const video = ['youtube', 'rutube', 'pornohub'],
      blogs = ['worldpress', 'livejornal', 'blogers'],
      internet = [...video, ...blogs, 'vk', 'facebook' ]; //чтобы клонмровались что имеются и добавлялись какие то новые
      console.log(internet);


const array = ['a', 'b'];
const newArrayy = [...array];
console.log(newArrayy)

const q = {
    a: 30,
    b: 40
};

const newObj ={...q};
console.log(newObj);