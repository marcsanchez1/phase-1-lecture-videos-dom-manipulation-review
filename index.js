// DOM render functions
function renderOneAnimal(animal) {
  // Build animal
  let card = document.createElement('li')
  card.className = 'card'
  card.innerHTML =  `
                      <img src="${animal.imageUrl}">
                      <div class="content">
                        <h4>${animal.name}</h4>
                        <p>$<span class="donation-amount">${animal.donations}</span> Donated</p>
                        <p>${animal.description}</p>
                      </div>
                      <div class="buttons">
                        <button>Donate $10</button>
                        <button>Set Free</button>
                      </div>
                    `
// Add animal card to DOM
document.querySelector('#animal-list').appendChild(card)
}

// Fetch Requests
// Get Fetch for all animal resources
function getAllAnimals() {
  fetch('http://localhost:3000/animalData')
  .then(res => res.json())
  .then(animalData => animalData.forEach(animal => renderOneAnimal(animal)))
  console.log('before fetch returns')
}

// Initial Render
  // Get data and render our animals to the DOM
function initialize() {
  getAllAnimals()
  console.log('after get all animals')
  // animalData.forEach(animal => renderOneAnimal(animal))
}
initialize()