/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

  //Here I will create an array of objects of the cards, 

  let animallog = [

  // Animal Card 1
  {
    title: "lion",
    scientificName: "Panthera leo",
    imageURL: "",
    habitat: "savannah",
    diet: "carnivore",
    status: "Vulnerable",
  },

  // Animal Card 2
  {
    title: "tiger",
    scientificName: "Panthera tigris",
    imageURL: "",
    habitat: "forest",
    diet: "carnivore",
    status: "Endangered",
  },

  // Animal Card 3
  {
    title: "african elephant",
    scientificName: "Loxodonta africana",
    imageURL: "",
    habitat: "savannah",
    diet: "herbivore",
    status: "Endangered",
  },

  // Animal Card 4
  {
    title: "giraffe",
    scientificName: "Giraffa camelopardalis",
    imageURL: "",
    habitat: "savannah",
    diet: "herbivore",
    status: "Vulnerable",
  },

  // Animal Card 5
  {
    title: "plains zebra",
    scientificName: "Equus quagga",
    imageURL: "",
    habitat: "savannah",
    diet: "herbivore",
    status: "Near Threatened",
  },

  // Animal Card 6
  {
    title: "red panda",
    scientificName: "Ailurus fulgens",
    imageURL: "",
    habitat: "forest",
    diet: "omnivore",
    status: "Endangered",
  },

  // Animal Card 7
  {
    title: "giant panda",
    scientificName: "Ailuropoda melanoleuca",
    imageURL: "",
    habitat: "forest",
    diet: "herbivore",
    status: "Vulnerable",
  },

  // Animal Card 8
  {
    title: "snow leopard",
    scientificName: "Panthera uncia",
    imageURL: "",
    habitat: "mountains",
    diet: "carnivore",
    status: "Vulnerable",
  },

  // Animal Card 9
  {
    title: "blue whale",
    scientificName: "Balaenoptera musculus",
    imageURL: "",
    habitat: "ocean",
    diet: "carnivore",
    status: "Endangered",
  },

  // Animal Card 10
  {
    title: "hawksbill sea turtle",
    scientificName: "Eretmochelys imbricata",
    imageURL: "",
    habitat: "ocean",
    diet: "omnivore",
    status: "Critically Endangered",
  },

  // Animal Card 11
  {
    title: "amur leopard",
    scientificName: "Panthera pardus orientalis",
    imageURL: "",
    habitat: "forest",
    diet: "carnivore",
    status: "Critically Endangered",
  },

  // Animal Card 12
  {
    title: "vaquita",
    scientificName: "Phocoena sinus",
    imageURL: "",
    habitat: "ocean",
    diet: "carnivore",
    status: "Critically Endangered",
  },

  // Animal Card 13
  {
    title: "black rhinoceros",
    scientificName: "Diceros bicornis",
    imageURL: "",
    habitat: "savannah",
    diet: "herbivore",
    status: "Critically Endangered",
  },

  // Animal Card 14
  {
    title: "golden lion tamarin",
    scientificName: "Leontopithecus rosalia",
    imageURL: "",
    habitat: "forest",
    diet: "omnivore",
    status: "Endangered",
  },

  // Animal Card 15
  {
    title: "california condor",
    scientificName: "Gymnogyps californianus",
    imageURL: "",
    habitat: "mountains",
    diet: "carnivore",
    status: "Extinct in the Wild",
  },

  // Animal Card 16
  {
    title: "dodo",
    scientificName: "Raphus cucullatus",
    imageURL: "",
    habitat: "island",
    diet: "herbivore",
    status: "Extinct",
  },

  // Animal Card 17
  {
    title: "cheetah",
    scientificName: "Acinonyx jubatus",
    imageURL: "",
    habitat: "savannah",
    diet: "carnivore",
    status: "Vulnerable",
  },

  // Animal Card 18
  {
    title: "gray wolf",
    scientificName: "Canis lupus",
    imageURL: "",
    habitat: "forest",
    diet: "carnivore",
    status: "Least Concern",
  },

  // Animal Card 19
  {
    title: "giant otter",
    scientificName: "Pteronura brasiliensis",
    imageURL: "",
    habitat: "river",
    diet: "carnivore",
    status: "Endangered",

  },

  // Animal Card 20
  {
    title: "orangutan",
    scientificName: "Pongo pygmaeus",
    imageURL: "",
    habitat: "forest",
    diet: "omnivore",
    status: "Critically Endangered",
  }
  ]; 
  //end of the array

//I will pass the array data
function displayAnimals(data) {

// This line of code will point to the containers I want to fill
const boxes = document.querySelectorAll(".expbox");

for( let i = 0; i < data.length; i++) {

  // This will represent a individual card in the array, so I can access the properties of each card
  let exp = data[i];

if(boxes[i]) {

  boxes[i].innerHTML = `
  <img src="${exp.imageURL}" alt="${exp.title}" loading="lazy">
  <h2>${exp.title}</h2>
  <p><strong>Scientific Name:</strong> ${exp.scientificName}</p>
  <p><strong>Habitat:</strong> ${exp.habitat}</p>
  <p><strong>Diet:</strong> ${exp.diet}</p>
  <p><strong>Conservation Status:</strong> ${exp.status}</p>
  `;
}
}
}
//This will display the cards on the page
displayAnimals(animallog);

 





























































