const firstName = "Daniel";
const age = 34;


console.log(firstName);
console.log(age);
console.log(`Siema, nazywam się ${firstName} i mam ${age} lata`);



const deathStar = {
    diameter: 120000,
    fire: (target) => {
        console.log(`${target} destroyed`)
    },
    isOperating: true,
    levels: 357,
    name: 'Death Star',
    population: 10000,
    isLightOn: true,
    commander: {
        name: 'Darth Vader',
        age: 44
    }
}
console.log(deathStar.name)





console.log(console)
console.log(deathStar.commander)
deathStar.fire ('Rebel Ship')


const humanOne = {
    name: 'Daniel',
    age: 34,
    address: {
        street: 'Warszawska',
        city: 'Białystok',
    }


}

const humanTwo = {
    name: 'DaZenek',
    age: 34,
    address: humanOne.address.city
    

}


humanTwo.age = 40;
console.log (humanTwo)
console.log (humanOne)