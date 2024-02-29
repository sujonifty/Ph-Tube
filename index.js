const btnContainer = document.getElementById('btn-container');
const errorContainer = document.getElementById('error-element');

const fetchCategory = async() =>{
const url = `https://openapi.programming-hero.com/api/videos/categories`;
const response = await fetch(url);
const data = await response.json();
const categories = data.data;

// console.log(categories);
categories.forEach(card => {
    // console.log(card);
    const newButton = document.createElement('button');
    newButton.classList = 'btn category-btn btn-ghost bg-slate-700 text-white text-lg';
    newButton.innerText =card.category;
    newButton.addEventListener('click',()=>{
        handleButton(card.category_id);
        const allBtn = document.getElementsByClassName('category-btn');
        for(let btn of allBtn){
            btn.classList.remove('bg-red-400');
        }
        newButton.classList.add('bg-red-400');
    });
    btnContainer.appendChild(newButton);
});
}

const handleButton =async(categoryId) =>{
    const url = `  https://openapi.programming-hero.com/api/videos/category/${categoryId}`;
const response = await fetch(url);
const data = await response.json();
const categoryCards = data.data;
if(categoryCards.length === 0){
    errorContainer.classList.remove('hidden');
}
else{
    errorContainer.classList.add('hidden');
}
const cardContainer = document.getElementById('card-container');
cardContainer.innerHTML = '';

categoryCards.forEach(video => {
    // console.log(video);
    let verified =''
if(video.authors[0].verified){
verified = `<img class="w-6 h-6" src="./images/verify.png" alt=""></img>`
}
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
                                ${verified}
                            </div>
                            <p class="mt-3">${video.others.views}</p>
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