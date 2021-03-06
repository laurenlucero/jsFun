/* eslint-disable */

const context = {
  exerciseA() {
    const fly = () => {
      console.log(this);
    };

    class SpaceProbe {
      constructor(title, classification) {
        this.title = title;
        this.classification = classification;
        this.fly = fly;
      }
    }

    const ship = new SpaceProbe("voyager", "classy");

    // What is the value of `this` when we call ship.fly
    ship.fly()
    const result = "global window object";
    return result;

    // Annotation:
    // Since the function is an arrow function this refers to the global window object
  },

  exerciseB() {
    function fn() {
      const value = 2;
      return this.value;
    }

    // What is the value of `this` when we call fn()?
    const result = "global window object";
    return result;

    // Annotation:
    // When we call fn 'this' is the global window object
  },

  exerciseC() {
    const car = {
      make: "Tesla",
      getInfo: function() {
        console.log(this);
      }
    };

    const el = document.getElementById("btn");
    el.addEventListener("click", car.getInfo);

    // What is the value of `this` when a user clicks on our element and car.getInfo() is triggered?
    const result = "el";
    return result;

    // Annotation:
    // el refers to the object
  },

  exerciseD() {
    const dog = {
      breed: "Chihuahua",
      getBreed: function() {
        const innerFunction = function() {
          console.log(this.breed);
        };
        return innerFunction;
      }
    };

    var breed = dog.getBreed();

    // What is the value of `this` when we call breed()?
    const result = "global window object";
    return result;

    // Annotation:
    // by default 'this' refers to the global window object
  },

  exerciseE() {
    const fn = () => {
      value = 21;
      return this.value;
    };

    // What is the value of `this` when we call fn()?
    const result = "global window object";
    return result;

    // Annotation:
    // global window object by default
  },

  exerciseF() {
    class Hero {
      constructor(name, power, canFly = false) {
        this.name = name;
        this.power = power;
        this.canFly = canFly;
      }

      identifyHero() {
        return this;
      }
    }

    const storm = new Hero("Ororo", "weather control", true);

    // What is the value of `this` when we call storm.identifyHero()?
    const result = "instance of Hero";
    return result;

    // Annotation:
    // 'this' is bound to 'new' object instance
  },

  exerciseG() {
    class Game {
      constructor(title) {
        this.title = title;
      }

      resetGame() {
        console.log("Clearing the board and starting over");
      }

      restart() {
        setTimeout(function() {
          console.log(`Restarting ${this.title}...`);
        }, 1000);
      }
    }

    const monopoly = new Game("Monopoly");

    // What is the value of `this` when we call monopoly.restart()?
    const result = "global window object";
    return result;

    // Annotation:
    // not sure why this isn't the object instance
  },

  exerciseH() {
    const obj = {
      arrowFunction: null,
      method: function() {
        this.arrowFunction = () => {
          return this;
        };
      }
    };

    obj.method();

    // What is the value of `this` when we call obj.arrowFunction()?
    const result = "obj";
    return result;

    // Annotation:
    // i thought it would be window bc of the arrow function
  },

  exerciseI() {
    const poets = [
      {
        name: "Sappho"
      },
      {
        name: "Maya"
      },
      {
        name: "Emily"
      },
      {
        name: "Audre"
      }
    ];

    poets.map(function(poet) {
      return this;
    }, poets);

    // What is the value of `this` that gets returned on each iteration of poets.map()?
    const result = "poets";
    return result;

    // Annotation:
    // this is implicitly bound to poets
  },

  exerciseJ() {
    const el = $("#btn");
    el.on("click", function() {
      console.log($(this));
    });

    // What is the value of `this` when a user clicks on our #btn element and the callback is triggered?
    const result = "el";
    return result;

    // Annotation:
    // this is implicitly bound to el
  },

  exerciseK() {
    var store = {
      fruit: "grapes",
      sellMe: function() {
        return this.fruit;
      }
    };

    // What is the value of `this` when we call store.sellMe()?
    const result = "store";
    return result;

    // Annotation:
    // implicit binding
  },

  exerciseL() {
    const dog = {
      breed: "Chihuahua",
      getBreed: function() {
        var _this = this;

        setTimeout(function() {
          console.log("Your dog is a " + _this.breed);
        });
      }
    };

    // What is the value of `this` when we call dog.getBreed()?
    const result = "dog";
    return result;

    // Annotation:
    // implicit binding
  },

  exerciseM() {
    const robert = {
      name: "Bobo",
      occupation: "instructor"
    };

    const william = {
      name: "will",
      occupation: "instructor"
    };

    function makeBirdNoise() {
      console.log("My name is " + this.name + " ... caw! caw!");
    }

    // What is the value of `this` when we call makeBirdNoise.call(robert);
    const result = "robert";
    return result;

    // Annotation:
    // explicit binding with call()
  },

  exerciseN() {
    class Bird {
      constructor(name, species) {
        this.name = name;
        this.species = species;
      }

      delayNoise() {
        setTimeout(this.makeNoise.bind(this), 1000);
      }

      makeNoise() {
        console.log("caw, caw");
      }
    }

    var firstBird = new Bird("Calvin", "budgie");

    // What is the value of `this` when we call firstBird.delayNoise();
    const result = "instance of Bird";
    return result;

    // Annotation:
    // implicit binding
  },

  exerciseO() {
    const button = document.getElementById("submit");

    button.addEventListener("click", () => {
      console.log(this);
      this.classList.toggle("on");
    });

    // What is the value of `this` when a user clicks on our button element and the callback is triggered?
    const result = "global window object";
    return result;

    // Annotation:
    // window binding
  },

  exerciseP() {
    const child = {
      totalScreams: 4,
      scream: () => {
        this.totalScreams++;
      }
    };

    const result = "global window object";
    return result;

    // What is the value of `this` when we call child.scream();
    // Annotation:
    // I thought this would be child due to implicit binding
  }
};

module.exports = context;
