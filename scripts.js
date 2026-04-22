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

  //Here I will create an array of objects of the cards that hold experience

  let experience = [
    {
      title: "Beach Cleanup – Santa Monica",
      hours: "10-2",
      estimate: 25,
      imageURL: "assets/images/santa_monica_cleanup.jpg",
      link: "https://healthebay.org"
    },
    {
      title: "Wetland Restoration – Bolsa Chica",
      hours: "9-1",
      estimate: 40,
      imageURL: "assets/images/bolsa_chica.jpg",
      link: "https://bolsachica.org"
    },
    {
      title: "Wildlife Care – Malibu",
      hours: "8-12",
      estimate: 30,
      imageURL: "assets/images/malibu_wildlife.jpg",
      link: "https://cawildlife.org"
    },
    {
      title: "Tree Planting – Los Angeles",
      hours: "10-1",
      estimate: 20,
      imageURL: "assets/images/la_tree_planting.jpg",
      link: "https://treepeople.org"
    }
  ];
// End of array

// This function will display experience for the support section
function displayJobs(data) {

  // This line selects all of the boxes I want to fill
  const boxes = document.querySelectorAll(".joinus");

  // Loop through my array dataset
  for (let i = 0; i < data.length; i++) {

    // This represents one experience object from the array
    let exp = data[i];

    // Make sure the box exists before inserting content
    if (boxes[i]) {

      // Fill each box with the experience data
      boxes[i].innerHTML = `
        <img src="${exp.imageURL}" alt="${exp.title}" loading="lazy" class="experience-img">

        <!-- Title of the experience -->
        <h2>${exp.title}</h2>

        <!-- Organization name -->
        <p><strong>Organization:</strong> ${exp.organization}</p>

        <!-- Location of the experience -->
        <p><strong>Location:</strong> ${exp.location}</p>

        <!-- Type of environment -->
        <p><strong>Environment:</strong> ${exp.environment}</p>

        <!-- Time range for the experience -->
        <p><strong>Hours:</strong> ${exp.hours}</p>

        <!-- Estimated number (kept as just a number) -->
        <p><strong>Estimate:</strong> ${exp.estimate}</p>

        <!-- Short description -->
        <p><strong>Description:</strong> ${exp.description}</p>

        <!-- Organization logo -->
        <img src="${exp.orgImage}" alt="${exp.organization} logo" class="org-logo">

        <!-- External link to learn more -->
        <p><a href="${exp.link}" target="_blank">Learn More</a></p>
      `;
    }
  }
}

// Load each box with data
displayJobs(experience);



















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

 






























































