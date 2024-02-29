const btnContainer = document.getElementById('btn-container');
const fetchCategory = async() =>{
const url = `https://openapi.programming-hero.com/api/videos/categories`;
const response = await fetch(url);
const data = await response.json();
const categories = data.data;
// console.log(categories);
categories.forEach(card => {
    // console.log(card);
    const newButton = document.createElement('button');
    newButton.classList = 'btn  btn-ghost bg-slate-700 text-white text-lg';
    newButton.innerText =card.category;
    newButton.addEventListener('click',()=>handleButton(card.category_id));
    btnContainer.appendChild(newButton);
});
}

const handleButton =async(categoryId) =>{
    const url = `  https://openapi.programming-hero.com/api/videos/category/${categoryId}`;
const response = await fetch(url);
const data = await response.json();
const categoryCards = data.data;

const cardContainer = document.getElementById('card-container');
cardContainer.innerHTML = '';
categoryCards.forEach(video => {
    // console.log(video);
    const newDiv = document.createElement('div');

    newDiv.innerHTML = `
    <div class="card w-full bg-base-100 shadow-xl">
                <figure class="overflow-hidden h-72">
                    <img class="w-full" src="${video.thumbnail}" alt="Shoes" />
                    <h6 class="absolute bottom-[40%] right-12">0 hr</h6>
                </figure>
                <div class="card-body">
                    <div class="flex space-x-4 justify-start items-start">
                        <div>
                            <img class="w-12 h-12 rounded-full" src="${video.authors[0].profile_picture}" alt="Shoes" />
                        </div>
                        <div>
                            <h2 class="card-title">${video.title}</h2>
                            <div class="flex mt-3">
                                <p class="">${video.authors[0].profile_name}</p>
                                <img class="w-6 h-6" src="./images/verify.png" alt="">
                            </div>
                            <p class="mt-3">100k Views</p>
                        </div>
                    </div>
                </div>
            </div>
    `
    cardContainer.appendChild(newDiv);
})

    console.log(categoryCards)

}

fetchCategory()