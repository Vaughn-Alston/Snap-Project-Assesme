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
  }

  ]; 
  //end of the array

















// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < titles.length; i++) {
    let title = titles[i];

    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.
    let imageURL = "";
    if (i == 0) {
      imageURL = FRESH_PRINCE_URL;
    } else if (i == 1) {
      imageURL = CURB_POSTER_URL;
    } else if (i == 2) {
      imageURL = EAST_LOS_HIGH_POSTER_URL;
    }

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, title, imageURL); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, newTitle, newImageURL) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!",
  );
}

function removeLastCard() {
  titles.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}
