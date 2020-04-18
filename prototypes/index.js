/* eslint-disable */

const { kitties } = require("./datasets/kitties");
const { clubs } = require("./datasets/clubs");
const { mods } = require("./datasets/mods");
const { cakes } = require("./datasets/cakes");
const { classrooms } = require("./datasets/classrooms");
const { breweries } = require("./datasets/breweries");
const { nationalParks } = require("./datasets/nationalParks");
const { books } = require("./datasets/books");
const { weather } = require("./datasets/weather");
const { instructors, cohorts } = require("./datasets/turing");
const { bosses, sidekicks } = require("./datasets/bosses");
const { constellations, stars } = require("./datasets/astronomy");
const { weapons, characters } = require("./datasets/ultima");
const { dinosaurs, humans, movies } = require("./datasets/dinosaurs");

// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {
    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']
    const result = kitties
      .filter(kitty => kitty.color === "orange")
      .map(orangeKitty => orangeKitty.name);
    return result;
    // Annotation:
    /*
  getting an array of objects w/ name, age, color properties
  want to get back an array of only the orange kitties names
  filter to get back orange cats in a subset of the original data
  use a map to map over filtered kitties and only return the names
    */
  },

  sortByAge() {
    // Sort the kitties by their age
    const result = kitties.sort((a, b) => b.age - a.age);
    console.log(result);
    return result;

    // Annotation:
    /*
  use sort method to sort array in descending order
  parameters a and b represent 2 objects contained in the array
  use dot notation to target the age property
    */
  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    const result = kitties.map(kitty => {
      const grownKitties = {};
      grownKitties.name = kitty.name;
      grownKitties.age = kitty.age + 2;
      grownKitties.color = kitty.color;
      return grownKitties;
    });
    return result.sort((a, b) => b.age - a.age);
  }
};

/*
map over array of kitties
make new object
assign same name and color
add 2 to each age value
return new object
sort result from oldest to youngest
*/

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    const result = clubs.reduce((acc, club) => {
      club.members.forEach(member => {
        if (!acc[member]) {
        acc[member] = []
      }
      acc[member].push(club.club)
    })
      return acc;
    }, {});
    return result;

    // Annotation:
    // iterate over clubs to access members
    // iterate over members to create keys for new object
    // if member belongs to club assign club to values array
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    const result = mods.map(mod => {
      let studentsPerMod = {};
      let studentsPerInstructor = mod.students / mod.instructors;
      (studentsPerMod.mod = mod.mod),
        (studentsPerMod.studentsPerInstructor = studentsPerInstructor);
      return studentsPerMod;
    });
    return result;

    // Annotation:
    /*
  Map over the mods arrays
  Divide students by instructors
  Return new object with two properties,
  mod and students per instructor
    */
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    const result = cakes.map(cake => {
      let stockPerCake = {};
      (stockPerCake.flavor = cake.cakeFlavor),
        (stockPerCake.inStock = cake.inStock);
      return stockPerCake;
    });
    return result;

    // Annotation:
    /*
  map over cakes arrays
  return new array of objects with two keys,
  flavor and inStock
    */
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    const result = cakes.filter(cake => cake.inStock > 0);
    return result;

    // Annotation:
    /*
  filter through the cakes array
  return subset of the original array that only includes cakes in stock
    */
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const result = cakes.reduce((sum, cake) => {
      sum += cake.inStock;
      return sum;
    }, 0);
    return result;

    // Annotation:
    /*
  Reduce inStock cakes into total number of cakes in stock
    */
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    const result = cakes.reduce((acc, cake) => {
      cake.toppings.forEach(topping => {
        if (!acc.includes(topping)) acc.push(topping);
      });
      return acc;
    }, []);
    return result;

    // Annotation:
    /*
  Reduce elements of the nested arrays
  Combine into a final array without duplicates
  Check if final array contains item, if not,
  push into final array
    */
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    const result = cakes.reduce((acc, cake) => {
      cake.toppings.forEach(topping => {
        if (!acc[topping]) {
          acc[topping] = 0;
        }
        acc[topping]++;
      });
      return acc;
    }, {});
    return result;

    // Annotation:
    /*
    Iterate through all of the toppings,
    assign each topping to be a key in a new object
    Count how many times each topping is used,
    assign number to the value in new object
    */
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const result = classrooms.filter(program => program.program === "FE");
    return result;

    // Annotation:
    // iterate over classrooms filter out only the FE classes
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    const result = classrooms.reduce(
      (acc, program) => {
        if (program.program === "FE") {
          acc.feCapacity += program.capacity;
        } else {
          acc.beCapacity += program.capacity;
        }
        return acc;
      },
      {
        feCapacity: 0,
        beCapacity: 0
      }
    );
    return result;

    // Annotation:
    // iterate over classrooms
    // reduce into object with capacity key and total students value
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.sort((a, b) => a.capacity - b.capacity);
    return result;

    // Annotation:
    // sort through capacity and return classrooms sorted from least to greatest
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence() {
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']

    const result = books.filter(
      book => book.genre !== "Horror" && book.genre !== "True Crime"
    );
    return result.map(book => book.title);

    // Annotation:
    // filter through array of book objects
    // return an array of book titles that are not horror or true crime
  },
  getNewBooks() {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    const result = books.filter(
      book => book.published >= 1990 && book.published <= 2009
    );
    return result.map(book => {
      newBooks = {};
      (newBooks.title = book.title), (newBooks.year = book.published);
      return newBooks;
    });

    // Annotation:
    // filter books that were published in from 1990-2009
    // return array of objects with title and year published
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    const result = weather.map(weather => {
      return (weather.temperature.high + weather.temperature.low) / 2;
    });
    return result;

    // Annotation:
    // map through the array of objects
    // add the high and low / 2 to get average
    // return array of average temps
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    const result = weather
      .filter(
        weather => weather.type === "sunny" || weather.type === "mostly sunny"
      )
      .map(weather => {
        return `${weather.location} is ${weather.type}.`;
      });
    return result;

    // Annotation:
    // filter to find the sunny and mostly sunny spots
    // map thru filtered spots to return sentences
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    const result = weather.sort((a, b) => b.humidity - a.humidity);
    return result[0];

    // Annotation:
    // sort weather array from highest humidity to lowest
    // return first index of sorted array
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

    const result = nationalParks.reduce(
      (parks, park) => {
        if (park.visited) {
          parks.parksVisited.push(park.name);
        } else {
          parks.parksToVisit.push(park.name);
        }
        return parks;
      },
      {
        parksToVisit: [],
        parksVisited: []
      }
    );
    return result;

    // Annotation:
    // iterate through all of the national parks
    // check if they have been visited or not
    // if visited is true take the name of the park and push it into visited parks array
    // if visited is not true push the name of the park into parks to visit array
    // return object with parks to visit and parks visited keys
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]

    const result = nationalParks.map(park => {
      return {
        [park.location]: park.name
      };
    });
    return result;

    // Annotation:
    // iterate through the national parks
    // take location and make it a key
    // take the park name and make it a value based on where it is
    // return array of objects with state key and park value
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    const result = nationalParks.reduce((activities, park) => {
      park.activities.forEach(activity => {
        if (!activities.includes(activity)) {
          activities.push(activity);
        }
      });
      return activities;
    }, []);
    return result;

    // Annotation:
    // Iterate through the national parks AND park activities
    // push activity in to new array if array doesn't contain the activity
    // return new array
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    const result = breweries.reduce((sum, brew) => {
      sum += brew.beers.length
    return sum;
  }, 0);
    return result;

    // Annotation:
    // iterate through breweres with reduce
    // sum beers.length
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    const result = breweries.reduce((acc, brew) => {
      let breweryBeerCount = {}
      breweryBeerCount.name = brew.name
      breweryBeerCount.beerCount = brew.beers.length
      acc.push(breweryBeerCount)

      return acc;
    }, []);
    console.log('result', result);
    return result;

    // Annotation:
    // map over array of brewery objects
    // return an array of objects with brewery name key
    // value beer count with brewery beer length
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    const result = breweries.reduce((acc, brewery) => {
      brewery.beers.forEach(beer => {
        acc.push(beer)
      })
      return acc;
    }, [])
    return result.sort((a, b) => a.abv - b.abv).pop();

    // Annotation:
    // iterate through breweries array of objects to access beers array of objs
    // iterate over beers array of objects to check each ABV
    // return beer object with the greatest ABV
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    const result = instructors.map(instructor => {
      let studentsForEachInstructor = {};
      let students = 0;
      cohorts.forEach(cohort => {
        if (cohort.module === instructor.module) {
          students = cohort.studentCount;
        }
      });
      (studentsForEachInstructor.name = instructor.name),
        (studentsForEachInstructor.studentCount = students);
      return studentsForEachInstructor;
    });
    return result;

    // Annotation:
    // declare empty array and students
    // map through instructors to create a new array of objects
    // for each cohort, if cohort module matches instructor model,
    // let students be the student count
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    const result = cohorts.reduce(
      (acc, cohort) => {
        let instructorCount = 0;
        instructors.forEach(instructor => {
          if (cohort.module === instructor.module) {
            instructorCount++;
          }
          acc[`cohort${cohort.cohort}`] = cohort.studentCount / instructorCount;
        });
        cohort.studentCount;
        return acc;
      },
      {
        cohort1806: 0,
        cohort1804: 0,
        cohort1803: 0,
        cohort1801: 0
      }
    );
    return result;

    // Annotation:
    // reduce both arrays of objects into single object with cohort keys and students per instructor value
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    const result = instructors.reduce((acc, instructor) => {
      let modules = [];
      instructor.teaches.forEach(skill => {
        cohorts.forEach(cohort => {
          if (cohort.curriculum.includes(skill)) {
            if (!modules.includes(cohort.module)) {
              modules.push(cohort.module);
            }
          }
        });
      });
      acc[instructor.name] = modules;
      return acc;
    }, {});
    return result;

    // Annotation:
    // return an object
    // key is instructor name
    // value is modules they can teach based on teaches skills and mod curriculum
    // iterate through instructors and teaches array
    // iterate through cohorts and curriculum array
    // compare teaches and curriculum
    // if curriculum matches teaches then assign cohort to instructor
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    const result = cohorts.reduce((acc, cohort) => {
      cohort.curriculum.forEach(topic => {
        let instructorsByTopic = [];
        acc[topic] = instructorsByTopic;
        instructors.forEach(instructor => {
          if (instructor.teaches.includes(topic)) {
            if (!instructorsByTopic.includes(instructor.name)) {
              instructorsByTopic.push(instructor.name);
            }
          }
        });
      });
      return acc;
    }, {});
    return result;

    // Annotation:
    // return an object with curriculum topic as key and array of teachers who teach that topic as values
    // iterate through module curriculum, make each value a key
    // iterate through teacher skills, assign teacher to curriculum key if skill matches
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    let bossNames = Object.keys(bosses);

    const result = bossNames.reduce((acc, boss) => {
      let sidekickLoyalty = 0;
      let currentBoss = {};
      bosses[boss].sidekicks.forEach(sidekick => {
        sidekicks.forEach(kick => {
          if (sidekick.name === kick.name) {
            sidekickLoyalty += kick.loyaltyToBoss;
          }
        });
      });
      currentBoss["bossName"] = bosses[boss].name;
      currentBoss["sidekickLoyalty"] = sidekickLoyalty;
      acc.push(currentBoss);
      return acc;
    }, []);
    return result;

    // Annotation:
    // return an array of objects with bossName key and sidekickLoyalty values
    // iterate over sidekicks, add up sidekicks loyalty to boss
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

    let constellationNames = Object.keys(constellations);

    const result = constellationNames.reduce((acc, name) => {
      constellations[name].stars.forEach(star => {
        stars.forEach(starObject => {
          if (star === starObject.name) {
            acc.push(starObject);
          }
        });
      });
      return acc;
    }, []);
    return result;

    // Annotation:
    // return an array of star objects that are listed in the constellations object
    // get keys of constellations, access stars array
    // iterate through constellations stars array
    // iterate through stars array of objects
    // compare star names to stars in constellations, return if included
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const result = stars.reduce((acc, star) => {
      if (!acc[star.color]) {
        acc[star.color] = [];
      }
      if (star.color === star.color) {
        acc[star.color].push(star);
      }
      return acc;
    }, {});
    return result;

    // Annotation:
    // return object with star color key and star object values
    // iterate over star objects, assign colors to object keys
    // iterate through star objects, if color matches key, push object into array value
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.

    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]

    const result = stars
      .sort((a, b) => a.visualMagnitude - b.visualMagnitude)
      .map(star => {
        return star.constellation;
      });
    return result;

    // Annotation:
    // iterate through stars, sort by visualMagnitude
    // return an array of the consellation names
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {
    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    let weaponDetails = Object.entries(weapons);

    const result = characters.reduce((sum, character) => {
      weaponDetails.forEach(weapon => {
        if (character.weapons.includes(weapon[0])) {
          sum += weapon[1].damage;
        }
      });
      return sum;
    }, 0);
    return result;

    // Annotation:
    // iterate through characters and their weapons
    // for each weapon access the weapon in the weapons object
    // check it's damage value and add up total damage for all weapons
  },

  charactersByTotal() {
    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    let weaponDetails = Object.entries(weapons);

    const result = characters.reduce((acc, char) => {
      let totalDamage = {};
      totalDamage[char.name] = { damage: 0, range: 0 };
      weaponDetails.forEach(weapon => {
        if (char.weapons.includes(weapon[0])) {
          totalDamage[char.name].damage += weapon[1].damage;
          totalDamage[char.name].range += weapon[1].range;
        }
      });
      acc.push(totalDamage);
      return acc;
    }, []);
    return result;

    // Annotation:
    // iterate through characters to access names and weapons
    // iterate through characters weapon
    // compare to weapons object entries
    // find the sum of damage and range for each characters weapons
    // return an array of objects with character key and weapon detail value
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    const result = movies.reduce((acc, movie) => {
      acc[movie.title] = movie.dinos.length
      return acc;
    }, {});
    return result;

    // Annotation:
    // iterate over movies array
    // set title as key in new object
    // set length of dinos array as value
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          }
      }
    */
    let actors = Object.entries(humans);
    console.log(actors);


    const result = movies.reduce((acc, movie) => {
      acc[movie.director] = {

          [movie.title]: 0
      }

      console.log('acc', acc);
      return acc;
    }, {});
    console.log('res', result);
    return result;

    // Annotation:
    // return an object where key is movies.director and value is an object w/
    // movie.title key and average age of cast on the movie.yearReleased
    // compare movies.cast with humans keys
    // compare movie.yearReleased with humans year born
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    let actors = Object.entries(humans)
    console.log('actors', actors);

    const result = actors.reduce((acc, actor) => {

      movies.forEach(movie => {

      })

      console.log('acc', acc);
      return acc;
    }, []);
    return result;

    // Annotation:
    // use Object.entries to get actors names
    // use reduce to iterate through movies
    // compare actors names to movies cast
    // if actor was not in jurasic park movie
    // return actor in an array of objects
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    const result = "REPLACE WITH YOUR RESULT HERE";
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts
};
