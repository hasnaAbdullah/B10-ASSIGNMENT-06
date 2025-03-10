//task 01: show category in html
//task 02: show all pets in html by default

//task 01
async function getCatergory() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/peddy/categories"
  );
  const categories = await res.json();
  // console.log(categories);
  showCategoryInHTML(categories);
}
function showCategoryInHTML(categories) {
  const categoryContainer = document.getElementById("category-container");
  categoryContainer.innerHTML = "";
  const categoriesList = categories.categories;
  for (const category of categoriesList) {
    const div = document.createElement("div");
    div.innerHTML = `
     <div
        class="flex justify-center items-center px-5 py-4 rounded-md border-2 border-gray-200 cursor-pointer"
      >
        <img src="${category["category_icon"]}" alt="" />
        <span class="font-extrabold text-gray-700 text-lg ml-3"
          >${category.category}</span
        >
      </div>
    `;
    categoryContainer.appendChild(div);
  }

  selectCatergory(categoryContainer);
  //   console.log(categoryContainer);
}
function selectCatergory(categoryContainer) {
  for (const category of categoryContainer.children) {
    category.addEventListener("click", function (event) {
      for (const category of categoryContainer.children) {
        category.children[0].classList.remove("border-teal-600");
        category.children[0].classList.remove("bg-teal-100");
      }
      if (event.target.tagName === "DIV") {
        event.target.classList.add("border-teal-600");
        event.target.classList.add("bg-teal-100");
      } else {
        const parentElm = event.target.parentElement;
        parentElm.classList.add("border-teal-600");
        parentElm.classList.add("bg-teal-100");
      }
    });
  }
}
getCatergory();

// task 02
async function getAllPets() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/peddy/pets"
  );
  const pets = await res.json();
  showPetsInHTML(pets);
}
function showPetsInHTML(pets) {
  const petsList = pets.pets;

  const petsContainer = document.getElementById("pets-container");
  petsContainer.innerHTML = "";
  for (const pet of petsList) {
    const div = document.createElement("div");
    div.className =
      "card border-2 border-gray-200 bg-base-100 max-w-96 mx-auto  p-6 shadow-sm";
    div.innerHTML = createPetCard(pet);
    petsContainer.appendChild(div);
  }
  console.log(petsList[0]);
}

function createPetCard(pet) {
  return `
  <figure class="">
      <img
        src="${pet.image}"
        alt="Shoes"
        class="rounded-xl object-contain w-full h-52"
      />
    </figure>
    <!-- card body -->
    <div class="card-body p-0">
      <div class="py-6 space-y-1 border-b-2 border-gray-300">
        <h2 class="text-2xl font-extrabold">Mister Tartos</h2>
        <div class="flex items-center gap-2">
          <img src="images/breed.png" alt="" />
          <p class="text-gray-500 font-semibold">
            Breed: ${pet.breed}
          </p>
        </div>
        <div class="flex items-center gap-2">
          <img src="images/calender.png" alt="" />
          <p class="text-gray-500 font-semibold">Birth: ${pet.date_of_birth} </p>
        </div>
        <div class="flex items-center gap-2">
          <img src="images/gender.png" alt="" />
          <p class="text-gray-500 font-semibold">
            Gender: ${pet.gender}
          </p>
        </div>
        <div class="flex items-center gap-2">
          <img src="images/price.png" alt="" />
          <p class="text-gray-500 font-semibold">Price: ${pet.price}$ </p>
        </div>
      </div>
      <!-- buttons -->
      <div class="card-actions py-3 justify-between">
        <img  src="images/like.png" />
        <button
          class="btn px-6 lg:px-7 lg:text-lg border-teal-600 text-teal-700"
        >
         Adopt
        </button>

        <button
          class="btn px-6 lg:px-7 lg:text-lg border-teal-600 text-teal-700"
        >
          Details
        </button>
      </div>
    </div>
`;
}
getAllPets();
