const btnContainer = document.getElementById('btn-container');
const fetchCategory = async() =>{
const url = `https://openapi.programming-hero.com/api/videos/categories`;
const response = await fetch(url);
const data = await response.json();
const categories = data.data;
// console.log(categories);
displayCards(categories);
}

const displayCards = (cards) =>{
    cards.forEach(card => {
        console.log(card);
        const newButton = document.createElement('button');
        newButton.classList = 'btn  btn-ghost bg-slate-700 text-white text-lg';
        newButton.innerText =card.category;
        newButton.addEventListener('click',()=>handleButton(card.category_id));
        btnContainer.appendChild(newButton);
    });
}
const handleButton = (categoryId) =>{
    console.log(categoryId)
}

fetchCategory()