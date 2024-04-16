const findTheOldest = function(people) {
    let oldest = people.reduce( (oldestPerson, currentPerson) =>{
        if(!oldestPerson.yearOfBirth){
            return currentPerson;
        }
        if(!oldestPerson.yearOfDeath){
            oldestPerson.yearOfDeath = new Date().getFullYear();
        }
        if(!currentPerson.yearOfDeath){
            currentPerson.yearOfDeath = new Date().getFullYear();
        }
        let oldestAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
        let currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;

        if (oldestAge < currentAge){
            oldestPerson = currentPerson;
        }

        return oldestPerson;
    } , {name: "", yearOfBirth:0, yearOfDeath:0});

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;

findTheOldest( people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]);