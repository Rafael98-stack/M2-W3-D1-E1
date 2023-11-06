class User {
constructor (firstName, surname, age, location) {
    this.firstName = firstName;
    this.surname = surname;
    this.age = age;
    this.location = location;
}

ToComparign(userB) {
 if (userA.age < userB.age) {
    return userA.firstName + " " + "e' piu giovane di " + userB.firstName;
 } else {
    return userA.firstName + " " + "e' piu vecchio di " + userB.firstName;
 }
 
    };
}



const userA = new User("Mario", "Rossi", 18, "Milano");
const userB = new User("Giulio", "Cavallo", 40, "Roma");
const equalUsers = userA.ToComparign(userB)
console.log(equalUsers);

// ////////////////////////////////////////////////////////////////////////////

class Pet {
    constructor (petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }
    static SameOwner(bestia1, bestia2) {
        return bestia1.ownerName === bestia2.ownerName ? bestia1.petName + " " + "ha lo stesso padrone di " + bestia2.petName : bestia1.petName + " " + "non ha lo stesso padrone di " + bestia2.petName;
    }
}
const pet1 = new Pet("Cesare", "Antonio", "dog", "labrador")
const pet2 = new Pet("Lucillo", "Antonio", "dog", "soriano")

console.log(Pet.SameOwner(pet1,pet2))