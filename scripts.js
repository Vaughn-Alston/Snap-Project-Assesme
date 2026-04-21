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

  let experience = [

    {
      title: "Beach Cleanup Volunteer",
      organization: "Ocean Conservancy",
      location: "Coastal Areas",
      type: "Volunteer Opportunity",
      environment: "Ocean",
      effort: "Low",
      impact: "Removes plastic waste that harms marine animals",
      description: "Join local beach cleanups to remove trash and protect ocean wildlife.",
      link: "https://oceanconservancy.org"
    },
  
    {
      title: "Wildlife Rescue Assistant",
      organization: "Local Wildlife Rescue Centers",
      location: "Local",
      type: "Volunteer Opportunity",
      environment: "Land",
      effort: "Medium",
      impact: "Helps injured and displaced animals recover",
      description: "Assist with feeding, cleaning, and caring for rescued animals.",
      link: "https://www.humanesociety.org"
    },
  
    {
      title: "Tree Planting Volunteer",
      organization: "The Nature Conservancy",
      location: "Various Locations",
      type: "Volunteer Opportunity",
      environment: "Land",
      effort: "Medium",
      impact: "Restores habitats for endangered species",
      description: "Participate in tree planting events to rebuild natural ecosystems.",
      link: "https://www.nature.org"
    },
  
    {
      title: "Citizen Science Wildlife Tracking",
      organization: "iNaturalist",
      location: "Anywhere",
      type: "Volunteer Opportunity",
      environment: "General",
      effort: "Low",
      impact: "Helps scientists track species and biodiversity",
      description: "Record and upload wildlife observations to support conservation research.",
      link: "https://www.inaturalist.org"
    }












  ]; // end of the array























  //Here I will create an array of objects of the cards, 

  let animallog = [
  {
    title: "lion",
    scientificName: "Panthera leo",
    imageURL: "assets/images/lion-1_0.webp",
    habitat: "savannah",
    diet: "carnivore",
    status: "Vulnerable",
    conservationLocation: "San Diego Zoo Safari Park"
  },

  {
    title: "tiger",
    scientificName: "Panthera tigris",
    imageURL: "assets/images/tigerww.webp",
    habitat: "forest",
    diet: "carnivore",
    status: "Endangered",
    conservationLocation: "Smithsonian National Zoo"
  },

  {
    title: "african elephant",
    scientificName: "Loxodonta africana",
    imageURL: "assets/images/African-elephant-Kenya.webp",
    habitat: "savannah",
    diet: "herbivore",
    status: "Endangered",
    conservationLocation: "San Diego Zoo Safari Park"
  },

  {
    title: "giraffe",
    scientificName: "Giraffa camelopardalis",
    imageURL: "assets/images/Girraf.webp",
    habitat: "savannah",
    diet: "herbivore",
    status: "Vulnerable",
    conservationLocation: "Los Angeles Zoo"
  },

  {
    title: "plains zebra",
    scientificName: "Equus quagga",
    imageURL: "assets/images/zebra.webp",
    habitat: "savannah",
    diet: "herbivore",
    status: "Near Threatened",
    conservationLocation: "San Diego Zoo"
  },

  {
    title: "red panda",
    scientificName: "Ailurus fulgens",
    imageURL: "assets/images/red_panda.webp",
    habitat: "forest",
    diet: "omnivore",
    status: "Endangered",
    conservationLocation: "Los Angeles Zoo"
  },

  {
    title: "giant panda",
    scientificName: "Ailuropoda melanoleuca",
    imageURL: "assets/images/panda.webp",
    habitat: "forest",
    diet: "herbivore",
    status: "Vulnerable",
    conservationLocation: "Smithsonian National Zoo"
  },

  {
    title: "snow leopard",
    scientificName: "Panthera uncia",
    imageURL: "assets/images/snow_leopard.webp",
    habitat: "mountains",
    diet: "carnivore",
    status: "Vulnerable",
    conservationLocation: "Bronx Zoo"
  },

  {
    title: "blue whale",
    scientificName: "Balaenoptera musculus",
    imageURL: "assets/images/blue.webp",
    habitat: "ocean",
    diet: "carnivore",
    status: "Endangered",
    conservationLocation: "Monterey Bay Aquarium"
  },

  {
    title: "hawksbill sea turtle",
    scientificName: "Eretmochelys imbricata",
    imageURL: "assets/images/hawksbill_sea_turtle.webp",
    habitat: "ocean",
    diet: "omnivore",
    status: "Critically Endangered",
    conservationLocation: "Monterey Bay Aquarium"
  },

  {
    title: "amur leopard",
    scientificName: "Panthera pardus orientalis",
    imageURL: "assets/images/amur_leopard.webp",
    habitat: "forest",
    diet: "carnivore",
    status: "Critically Endangered",
    conservationLocation: "San Diego Zoo"
  },

  {
    title: "vaquita",
    scientificName: "Phocoena sinus",
    imageURL: "assets/images/vaquita-swimming.webp",
    habitat: "ocean",
    diet: "carnivore",
    status: "Critically Endangered",
    conservationLocation: "Conservation Program - Gulf of California"
  },

  {
    title: "black rhinoceros",
    scientificName: "Diceros bicornis",
    imageURL: "assets/images/Rhino_Black.webp",
    habitat: "savannah",
    diet: "herbivore",
    status: "Critically Endangered",
    conservationLocation: "San Diego Zoo Safari Park"
  },

  {
    title: "golden lion tamarin",
    scientificName: "Leontopithecus rosalia",
    imageURL: "assets/images/golden_lion_tamarin.webp",
    habitat: "forest",
    diet: "omnivore",
    status: "Endangered",
    conservationLocation: "National Zoo"
  },

  {
    title: "california condor",
    scientificName: "Gymnogyps californianus",
    imageURL: "assets/images/npsphoto-gavinemmons-caco-692-726-high-peaks.webp",
    habitat: "mountains",
    diet: "carnivore",
    status: "Critically Endangered",
    conservationLocation: "Los Angeles Zoo"
  },

  {
    title: "dodo",
    scientificName: "Raphus cucullatus",
    imageURL: "assets/images/dodo2ew.webp",
    habitat: "island",
    diet: "herbivore",
    status: "Extinct",
    conservationLocation: "None"
  },

  {
    title: "cheetah",
    scientificName: "Acinonyx jubatus",
    imageURL: "assets/images/East-African-Cheetah.webp",
    habitat: "savannah",
    diet: "carnivore",
    status: "Vulnerable",
    conservationLocation: "San Diego Zoo Safari Park"
  },

  {
    title: "gray wolf",
    scientificName: "Canis lupus",
    imageURL: "assets/images/Eurasian_wolf_2.webp",
    habitat: "forest",
    diet: "carnivore",
    status: "Least Concern",
    conservationLocation: "Minnesota Zoo"
  },

  {
    title: "orangutan",
    scientificName: "Pongo pygmaeus",
    imageURL: "assets/images/orange_monkey.webp",
    habitat: "forest",
    diet: "omnivore",
    status: "Critically Endangered",
    conservationLocation: "Los Angeles Zoo"
  },

  {
    title: "mountain gorilla",
    scientificName: "Gorilla beringei beringei",
    imageURL: "assets/images/mountain_gorilla.webp",
    habitat: "mountains",
    diet: "herbivore",
    status: "Endangered",
    conservationLocation: "Virunga Conservation Region"
  }
]; //end of the array

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
  <p><strong>Conservation Location:</strong> ${exp.conservationLocation}</p>
  `;
}
}
}




//This will display the cards on the page
displayAnimals(animallog);

 






























































