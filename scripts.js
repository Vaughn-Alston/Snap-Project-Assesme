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
      organization: "Heal the Bay",
      location: "Santa Monica, CA",
      environment: "Ocean",
      description: "Heal the Bay is an environmental nonprofit established in 1985 that is dedicated to making the coastal waters and watersheds in Greater Los Angeles safe, healthy, and clean. We use science, education, community action, and advocacy to fulfill our mission.",
      hours: "10-2",
      estimate: 25,
      imageURL: "images-vol/healbayy.webp",
      orgImage: "images-vol/healthebay.webp",
      link: "https://healthebay.org"
    },
    {
      title: "Wetland Restoration – Bolsa Chica",
      organization: "Bolsa Chica Conservancy",
      location: "Huntington Beach, CA",
      environment: "Wetlands",
      description: "The Bolsa Chica Conservancy inspires communities to protect and restore wetlands through education, hands-on programs, and advancing coastal ecology and environmental sustainability.",
      hours: "9-1",
      estimate: 40,
      imageURL: "images-vol/IMG_5670-scaled.webp",
      orgImage: "images-vol/logo.svg",
      link: "https://bolsachica.org"
    },
    {
      title: "Wildlife Care – Malibu",
      organization: "California Wildlife Center",
      location: "Malibu, CA",
      environment: "Wildlife",
      description: "California Wildlife Center protects native wildlife through rescue, rehabilitation, and education. Their team cares for sick, injured, and orphaned animals, helping them recover and return to the wild while addressing the impacts of habitat loss and human activity.",
      hours: "8-12",
      estimate: 30,
      imageURL: "images-vol/DSC06787CWC-1030x687.jpg",
      orgImage: "images-vol/CWClogo.png",
      link: "https://cawildlife.org"
    },
    {
      title: "Tree Planting – Los Angeles",
      organization: "TreePeople",
      location: "Los Angeles, CA",
      environment: "Urban",
      description: "TreePeople brings communities together to build a more climate-resilient Southern California through tree planting, ecosystem restoration, and environmental education. Their work addresses wildfire recovery, extreme heat, and urban greening while empowering communities with sustainable solutions.",
      hours: "10-1",
      estimate: 20,
      imageURL: "images-vol/community.jpg",
      orgImage: "images-vol/Treeplaneted.png",
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
  <div class="card-img">
    <img src="${exp.imageURL}" alt="${exp.title}" loading="lazy">
  </div>

  <div class="text-content">
    <div class="text-main">
      <h2>${exp.title}</h2>

      <p class="org">
        <a href="${exp.link}" target="_blank">${exp.organization}</a>
      </p>

      <p class="meta">
        ${exp.location} • ${exp.environment}
      </p>

      <p><strong>Hours:</strong> ${exp.hours}</p>
      <p><strong>Estimate:</strong> ${exp.estimate}</p>

      <p class="description">
        ${exp.description}
      </p>
    </div>
  </div>

  <!-- LOGO ON RIGHT -->
  <div class="logo-side">
    <img src="${exp.orgImage}" alt="${exp.organization} logo">
  </div>
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
      conservationLocation: "San Diego Zoo Safari Park",
      description: "Social big cats facing habitat loss and human conflict.",
      funFact: "Basically the king of naps — sleeps up to 20 hours a day."
    },
    {
      title: "tiger",
      scientificName: "Panthera tigris",
      imageURL: "assets/images/tigerww.webp",
      habitat: "forest",
      diet: "carnivore",
      status: "Endangered",
      conservationLocation: "Smithsonian National Zoo",
      description: "Solitary predators threatened by poaching and deforestation.",
      funFact: "Prefers to be alone… unless it’s dinner time."
    },
    {
      title: "african elephant",
      scientificName: "Loxodonta africana",
      imageURL: "assets/images/African-elephant-Kenya.webp",
      habitat: "savannah",
      diet: "herbivore",
      status: "Endangered",
      conservationLocation: "San Diego Zoo Safari Park",
      description: "Keystone species impacted by ivory poaching and habitat loss.",
      funFact: "Remembers everything… including who took its snacks."
    },
    {
      title: "giraffe",
      scientificName: "Giraffa camelopardalis",
      imageURL: "assets/images/Girraf.webp",
      habitat: "savannah",
      diet: "herbivore",
      status: "Vulnerable",
      conservationLocation: "Los Angeles Zoo",
      description: "Tall herbivores declining due to habitat fragmentation.",
      funFact: "Built like a skyscraper with a snack obsession."
    },
    {
      title: "plains zebra",
      scientificName: "Equus quagga",
      imageURL: "assets/images/zebra.webp",
      habitat: "savannah",
      diet: "herbivore",
      status: "Near Threatened",
      conservationLocation: "San Diego Zoo",
      description: "Striped grazers affected by land competition and drought.",
      funFact: "No two stripes are the same — nature’s barcode system."
    },
    {
      title: "red panda",
      scientificName: "Ailurus fulgens",
      imageURL: "assets/images/red_panda.webp",
      habitat: "forest",
      diet: "omnivore",
      status: "Endangered",
      conservationLocation: "Los Angeles Zoo",
      description: "Tree-dwelling mammals threatened by habitat loss.",
      funFact: "Looks like a raccoon, climbs like a cat, acts like neither."
    },
    {
      title: "giant panda",
      scientificName: "Ailuropoda melanoleuca",
      imageURL: "assets/images/panda.webp",
      habitat: "forest",
      diet: "herbivore",
      status: "Vulnerable",
      conservationLocation: "Smithsonian National Zoo",
      description: "Bamboo specialists recovering through conservation efforts.",
      funFact: "Eats bamboo all day like it’s a full-time job."
    },
    {
      title: "snow leopard",
      scientificName: "Panthera uncia",
      imageURL: "assets/images/snow_leopard.webp",
      habitat: "mountains",
      diet: "carnivore",
      status: "Vulnerable",
      conservationLocation: "Bronx Zoo",
      description: "Elusive mountain predators threatened by climate change.",
      funFact: "So stealthy, you probably won’t see it even if it sees you."
    },
    {
      title: "blue whale",
      scientificName: "Balaenoptera musculus",
      imageURL: "assets/images/blue.webp",
      habitat: "ocean",
      diet: "carnivore",
      status: "Endangered",
      conservationLocation: "Monterey Bay Aquarium",
      description: "The largest animal on Earth, recovering from past whaling.",
      funFact: "Heart is the size of a car — casually."
    },
    {
      title: "hawksbill sea turtle",
      scientificName: "Eretmochelys imbricata",
      imageURL: "assets/images/hawksbill_sea_turtle.webp",
      habitat: "ocean",
      diet: "omnivore",
      status: "Critically Endangered",
      conservationLocation: "Monterey Bay Aquarium",
      description: "Coral reef turtles threatened by illegal shell trade.",
      funFact: "Ancient traveler navigating oceans for decades."
    },
    {
      title: "amur leopard",
      scientificName: "Panthera pardus orientalis",
      imageURL: "assets/images/amur_leopard.webp",
      habitat: "forest",
      diet: "carnivore",
      status: "Critically Endangered",
      conservationLocation: "San Diego Zoo",
      description: "One of the rarest big cats, with fewer than 100 left.",
      funFact: "Rarer than most luxury cars — but way cooler."
    },
    {
      title: "vaquita",
      scientificName: "Phocoena sinus",
      imageURL: "assets/images/vaquita-swimming.webp",
      habitat: "ocean",
      diet: "carnivore",
      status: "Critically Endangered",
      conservationLocation: "Gulf of California",
      description: "The world’s rarest marine mammal, near extinction.",
      funFact: "The shyest creature you’ll probably never see."
    },
    {
      title: "black rhinoceros",
      scientificName: "Diceros bicornis",
      imageURL: "assets/images/Rhino_Black.webp",
      habitat: "savannah",
      diet: "herbivore",
      status: "Critically Endangered",
      conservationLocation: "San Diego Zoo Safari Park",
      description: "Rhinos heavily targeted for their horns.",
      funFact: "Looks tough… because it is."
    },
    {
      title: "golden lion tamarin",
      scientificName: "Leontopithecus rosalia",
      imageURL: "assets/images/golden_lion_tamarin.webp",
      habitat: "forest",
      diet: "omnivore",
      status: "Endangered",
      conservationLocation: "National Zoo",
      description: "Small primates recovering through reforestation programs.",
      funFact: "Hair game stronger than most humans."
    },
    {
      title: "california condor",
      scientificName: "Gymnogyps californianus",
      imageURL: "assets/images/npsphoto-gavinemmons-caco-692-726-high-peaks.webp",
      habitat: "mountains",
      diet: "carnivore",
      status: "Critically Endangered",
      conservationLocation: "Los Angeles Zoo",
      description: "North America’s largest bird, saved from near extinction.",
      funFact: "Massive wingspan — basically a flying glider."
    },
    {
      title: "dodo",
      scientificName: "Raphus cucullatus",
      imageURL: "assets/images/dodo2ew.webp",
      habitat: "island",
      diet: "herbivore",
      status: "Extinct",
      conservationLocation: "None",
      description: "A symbol of extinction caused by human impact.",
      funFact: "Didn’t survive humans… but became unforgettable."
    },
    {
      title: "cheetah",
      scientificName: "Acinonyx jubatus",
      imageURL: "assets/images/East-African-Cheetah.webp",
      habitat: "savannah",
      diet: "carnivore",
      status: "Vulnerable",
      conservationLocation: "San Diego Zoo Safari Park",
      description: "The fastest land animal facing habitat loss.",
      funFact: "Fastest land animal — zero chill when running."
    },
    {
      title: "gray wolf",
      scientificName: "Canis lupus",
      imageURL: "assets/images/Eurasian_wolf_2.webp",
      habitat: "forest",
      diet: "carnivore",
      status: "Least Concern",
      conservationLocation: "Minnesota Zoo",
      description: "Key predators essential for balanced ecosystems.",
      funFact: "Pack mentality: teamwork makes the dream work."
    },
    {
      title: "orangutan",
      scientificName: "Pongo pygmaeus",
      imageURL: "assets/images/orange_monkey.webp",
      habitat: "forest",
      diet: "omnivore",
      status: "Critically Endangered",
      conservationLocation: "Los Angeles Zoo",
      description: "Highly intelligent primates losing rainforest habitat.",
      funFact: "Basically a forest engineer with hands."
    },
    {
      title: "mountain gorilla",
      scientificName: "Gorilla beringei beringei",
      imageURL: "assets/images/mountain_gorilla.webp",
      habitat: "mountains",
      diet: "herbivore",
      status: "Endangered",
      conservationLocation: "Virunga Region",
      description: "Great apes protected through intensive conservation efforts.",
      funFact: "Strong, calm, and surprisingly gentle."
    }
  ]; //end of the array

//I will pass the array data
function displayAnimals(data) {
  const boxes = document.querySelectorAll(".expbox");

  for (let i = 0; i < data.length; i++) {
    let exp = data[i];

    if (boxes[i]) {
      boxes[i].innerHTML = `
        <img src="${exp.imageURL}" alt="${exp.title}" loading="lazy">

        <h2>${exp.title}</h2>

        <p class="description">${exp.description || ""}</p>

        <p class="fun-fact">${exp.funFact}</p>

        <p class="status">${exp.status}</p>

      `;
    }
  }
}



//This will display the cards on the page
displayAnimals(animallog);

 

function loadAnimalSlider(data) {
  const slider = document.getElementById("animal-slider");
  const animals = data.slice(9, 12);

  slider.innerHTML = "";

  animals.forEach((animal, index) => {
    const card = document.createElement("div");
    card.className = "option";
    if (index === 0) card.classList.add("active");

    card.style.setProperty("--optionImage", `url('${animal.imageURL}')`);

    card.innerHTML = `
      <div class="label">
        <div class="info">
          <div class="main">${animal.title}</div>
          <div class="sub">${animal.description || ""}</div>
        </div>
      </div>
    `;

    slider.appendChild(card);
  });

  const options = document.querySelectorAll(".option");
  let current = 0;

  function setActive(i) {
    options.forEach(o => o.classList.remove("active"));
    options[i].classList.add("active");
    current = i;
  }

  // click only (simpler)
  options.forEach((option, i) => {
    option.addEventListener("click", () => setActive(i));
  });

  // auto slide
  setInterval(() => {
    current = (current + 1) % options.length;
    setActive(current);
  }, 3000);
}

loadAnimalSlider(animallog);



const searchBar = document.getElementById("search-bar");

searchBar.addEventListener("input", function () {
  
  let value = this.value.toLowerCase();

  let filtred = animallog.filter(animal => animal.title.toLowerCase().includes(value));

  displayAnimals(filtred);


}); 
































































