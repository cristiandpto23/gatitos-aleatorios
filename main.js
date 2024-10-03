console.log('Hello, world');

const URL = 'https://api.thecatapi.com/v1/images/search';


// fetch(URL)
//     .then(response => response.json())
//     .then(data => {
//         const img = document.querySelector('img');
//         img.src = data[0].url;
//     });

async function myCat() {
    const response = await fetch(URL);
    const data = await response.json();
    const img = document.querySelector('img');
    img.src = data[0].url;
}

myCat();
const myButton = document.querySelector('button');
myButton.onclick = myCat;