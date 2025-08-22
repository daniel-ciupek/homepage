const firstName = "Daniel";
const age = 34;

console.log(firstName);
console.log(age);
console.log(`Siema, nazywam się ${firstName} i mam ${age} lata`);

const deathStar = {
  diameter: 120000,
  fire: (target) => {
    console.log(`${target} destroyed`);
  },
  isOperating: true,
  levels: 357,
  name: "Death Star",
  population: 10000,
  isLightOn: true,
  commander: {
    name: "Darth Vader",
    age: 44,
  },
};
console.log(deathStar.name);
console.log(deathStar.commander);
deathStar.fire("Rebel Ship");

const humanOne = {
  name: "Daniel",
  age: 34,
  address: {
    street: "Warszawska",
    city: "Białystok",
  },
};

const humanTwo = {
  name: "DaZenek",
  age: 34,
  address: humanOne.address.city,
};

humanTwo.age = 40;
console.log(humanTwo);
console.log(humanOne);

// Poprawione porównanie
if (humanOne.age > humanTwo.age) {
  console.log("Human 1 jest starszy");
}
if (humanOne.age < humanTwo.age) {
  console.log("Human 2 jest starszy");
}

if (humanOne.age === humanTwo.age) {
  console.log("Tyle samo lat");
}

if ("Java" !== "JavaScript") {
  console.log("Java to nie JavaScript"); // Poprawiony warunek i tekst
}

console.log(typeof 2);
console.log(typeof "2");

if (2 == "2") {
  console.log("True");
}

if (humanOne.age === 34 && humanTwo.address) {
  console.log("Zgadza sie!!!");
}

const myNumber = 7;
switch (myNumber) {
  case 7:
    console.log("jestem siódemką");
    break;
  case 9:
    console.log("jestem dziewiątką");
    break;
  default:
    console.log("jestem czymś innym");
}

const button = document.querySelector(".action--js");
const heading = document.querySelector('.heading__js');
const naglowek = document.querySelector('.heading__js');
const przycisk = document.querySelector('.action--js');

// Unikalne Event Listenery
button.addEventListener("click", () => {
  console.log("kliknąłeś");
});

przycisk.addEventListener('click', () => {
  naglowek.textContent = 'Koniec opowieści!';
});

heading.innerHTML = 'siemano';
console.log(heading.classList.contains('heading__js'));

const menuButton = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.navigation__list');
const navLinks = document.querySelectorAll('.navigation__link');
let currentIndex = -1;

menuButton.addEventListener('click', () => {
  menuList.classList.toggle('navigation__list--visible');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuList.classList.remove('navigation__list--visible');
  });
});

document.addEventListener('keydown', (event) => {
  const isMenuVisible = window.innerWidth >= 768 || menuList.classList.contains('navigation__list--visible');

  if (!isMenuVisible) {
    return;
  }

  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault();
    
    if (currentIndex > -1) {
      navLinks[currentIndex].classList.remove('active');
    }

    if (event.key === 'ArrowDown') {
      currentIndex = (currentIndex + 1) % navLinks.length;
    } else if (event.key === 'ArrowUp') {
      currentIndex = (currentIndex - 1 + navLinks.length) % navLinks.length;
    }

    navLinks[currentIndex].classList.add('active');
    navLinks[currentIndex].focus();
  }
});