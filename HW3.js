console.log('----------------------------------')
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
let blocks = [
    {words:'hello'},
    {words:'hi'},
    {words:'hello'},
    {words:'hello'},
    {words:'hello'},
    {words:'hello'},
    {words:'hello'},
    {words:'hello'},
    {words:'hello'},
    {words:'hello'},
]
for (const block of blocks) {
    document.write(`<div>${block.words}</div>`)

}
console.log('----------------------------------')
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом aвсередині




console.log('----------------------------------')
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let conteiner = [
    {lyrixs:'Lorem ipsum dolor sit.'},
    {lyrixs:'Lorem ipsum dolor sit.'},
    {lyrixs:'Lorem ipsum dolor sit.'},
    {lyrixs:'Lorem ipsum dolor sit.'},
    {lyrixs:'Lorem ipsum dolor sit.'},
    {lyrixs:'Lorem ipsum dolor sit.'},
    {lyrixs:'Lorem ipsum dolor sit.'},
    {lyrixs:'Lorem ipsum dolor sit.'},
    {lyrixs:'Lorem ipsum dolor sit.'},
    {lyrixs:'Lorem ipsum dolor sit.'},
    {lyrixs:'Lorem ipsum dolor sit.'},
    {lyrixs:'Lorem ipsum dolor sit.'},
    {lyrixs:'Lorem ipsum dolor sit.'},
    {lyrixs:'Lorem ipsum dolor sit.'},
    {lyrixs:'Lorem ipsum dolor sit.'},
    {lyrixs:'Lorem ipsum dolor sit.'},
    {lyrixs:'Lorem ipsum dolor sit.'},
    {lyrixs:'Lorem ipsum dolor sit.'},
    {lyrixs:'Lorem ipsum dolor sit.'},
    {lyrixs:'Lorem ipsum dolor sit.'},

]

let i ='0';
while (i < conteiner.length ){
    console.log(conteiner[i]);
    i++;
}




console.log('----------------------------------')
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.






console.log('----------------------------------')
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
 let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write('<ul>')
for (const listOfItem of listOfItems) {
    document.write('<li>html</li>')
    document.write('<li>css</li>')
    document.write('<li>javascript</li>')
    document.write('<li>mysql</li>')
    document.write('<li>mongodb</li>')
    document.write('<li>react</li>')
    document.write('<li>angular</li>')
    document.write('<li>node.js</li>')

}
document.write('</ul>')

//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//
// -----------------------------------------------







console.log('----------------------------------')
//
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (const product of products) {
    document.write(`<div class="milk">
<h3 class="product-milk">Milk.Price-22 </h3>
<img src="https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg" class="milk">
</div>`)
}
for (const product of products) {
    document.write(`<div class="juice">
<h3 class="product-juice">Juice.Price-27</h3>
<img src='https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg' class="juice">
</div>`)
}
for (const product of products) {
    document.write(`<div class="tomato">
<h3 class="product-tomato">Tomato.Price-47</h3>
<img src='https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74' class="tomato">
</div>`)
}


//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
//
//
// --------------------






console.log('----------------------------------')
//     є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

for (let i = 0 ; i < users.length; i++){
    const user =users[i];
    if (user.status === true){
        console.log(user);
    }
}

console.log('~~~~~~~~~~~~~')
for (let i = 0 ; i < users.length; i++){
    const user =users[i];
    if (user.status === false){
        console.log(user);
    }
    }

    console.log('~~~~~~~~~~~~~')
    for (let i = 0 ; i < users.length; i++) {
        const user = users[i];
        if (user.age > 30) {
            console.log(user);
        }
    }


// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років
