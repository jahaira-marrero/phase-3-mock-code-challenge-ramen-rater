// write your code here
const ramenMenu = document.querySelector("div#ramen-menu")
const ramenImg = document.querySelector('.detail-image')
//<h2 class="name">${ramen.name}</h2>
//<h3 class="restaurant">${ramen.restaurant}</h3>

// See all ramen images in the `div` with the id of `ramen-menu`. 
// When the page loads, request the data from the server to get all the ramen objects. 
// Then, display the image for each of the ramen using an an `img` tag inside the `#ramen-menu` div.


function renderRamen(ramen) {
    const div = document.createElement('div')
    div.innerHTML = `<img class="detail-image" src=${ramen.image} alt="Insert Name Here" />`

    ramenMenu.append(div)
}

function renderRamens(ramens) {
    ramens.forEach( function (ramen) {
        renderRamen(ramen)
    })

}

fetch(`http://localhost:3000/ramens`)
    .then(response => response.json())
    .then(ramens => renderRamens(ramens))

// Click on an image from the #ramen-menu div and 
// see all the info about that ramen displayed inside the #ramen-detail div, 
// as well as the current rating and 
// comment for the ramen displayed in the #ramen-rating form.





ramenMenu.addEventListener('click', function(event) {
    if (event.target.className === 'detail-image') {
        function renderRamenDiv(){
    const ramenDiv = createElement('div')
    div.dataset.id = ramen.id
    div.innerHTML = 
    `<img class="detail-image" src=${ramen.image} alt="Insert Name Here">
    <h2 class="name">${ramen.name}</h2>
    <h3 class="restaurant">${ramen.restaurant}</h3>
    <h3 class="rating">${ramen.rating}</h3>
    <h3 class="comment">${ramen.comment}</h3>`
    
    }
    }
})

fetch(`http://localhost:3000/ramens/id`)
    .then(response => response.json())
    .then(ramens => renderRamenDiv(ramens))