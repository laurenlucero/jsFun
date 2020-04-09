/* eslint-disable */

const scope = {
  exerciseA() {
    let personA = 'Paul';
    let personB = 'Ben';
    let personC = 'Tom';

    function changePerson() {
      if (personA === 'Paul') {
        person = 'CardiB';
        beautifyPerson();
      }

      function beautifyPerson() {
        // Log A: personB

        if (personB.includes('B')) {
          personB = person;
          personC = personB;
          // Log B: personC
        }
      }

      personC = personA;
      // Log C: personB
    }

    changePerson();
    // Log D: personC

    const result = [{A: 'Ben'}, {B: 'CardiB'}, {C: 'CardiB'}, {D: 'Paul'}];
    return result;

    // Annotation:
    // changePerson is invoked, then beautifyPerson
    // Log A is person B because it is before the if block
    // The if conditional changes person B to person (CardiB)
    // Person C is assigned to person B
    // After log B, person C is assigned to person A (Paul)
    // Log D is Paul

    },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
      }
      // Log A: number

      function newNumber() {
        number = 64;
        // Log B: number
      }

      newNumber();
      // Log C: number
    }

      numberFunction();
    // Log D: number

    const result = [{A: 75}, {B: 64}, {C: 64}, {D: 30}];
    return result;

    // Annotation:
    // Log A is 75 bc it is functionally scoped
    // Log B is 64 bc it is functionally scoped
    // Log C is 64 bc it is functionally scoped
    // Log D is 30 bc it is in the global scope
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }
      // Log A: greeting

      function newPhrase() {
        greeting = 'Hey';
        // Log B: greeting
      }

      newPhrase();
      // Log C: greeting
    }

    greetingFunction();
    // Log D: greeting

    const result = [{A: "Yo"}, {B: "Hey"}, {C: "Hey"}, {D: "Hello"}];
    return result;

    // Annotation:
    // Log A is Yo because var leaks into the global scope
    // Log B is Hey because newPhrase method is called and reassigns greeting to Hey
    // Log C is still Hey
    // Log D is Hello because it is globally scoped
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }
      // Log A: greeting

      const newGreeting = ()  => {
        greeting = 'welcome';
        // Log B: greeting
      };

      newGreeting();
      // Log C: greeting
    };

    greetingGenerator();
    // Log D: greeting

    const result = [{
      A: "hi"
    }, {
      B: "welcome"
    }, {
      C: "welcome"
    }, {
      D: "howdy"
    }];

    return result;

    // Annotation:
    // A = hi from function scope
    // B = welcome from function scope but won't log until called
    // C = welcome from function scope
    // D = howdy from global scope
  },

  exerciseE() {
    let name = 'Brittany';

    function sayName() {
      let name = 'Pam';

      if (name === 'Pam') {
        name = 'Nathaniel';

        if (name.length > 0) {
          let name = 'Brittany';
        }
        // Log A: name
      }
      // Log B: name
    }
    // Log C: name

    sayName();
    // Log D: name

    const result = [{
      C: "Brittany"
    }, {
      A: "Nathaniel"
    }, {
      B: "Nathaniel"
    }, {
      D: "Brittany"
    }];
    return result;

    // Annotation:
    // A logs Nathaniel when invoked ?
    // B logs Nathaniel when invoked ?
    // C logs Brittany bc global scoped
    // D logs Brittany bc global scoped
  },

  exerciseF() {
    var dog = 'Spot';

    function petDog() {
      // Log A: dog

      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }

      function rollOver() {
        // Log B: dog

        dog = 'Biscuit';
        // Log C: dog
      }

      rollOver();
      // Log D: dog
    }

    petDog();
    // Log E: dog

    const result = [{
      A: "Spot"
    }, {
      B: "Spot"
    }, {
      C: "Biscuit"
    }, {
      D: "Biscuit"
    }, {
      E: "Biscuit"
    }];
    return result;

    // Annotation:
    // A logs Spot
    // B logs Spot ?
    // C logs Biscuit ?
    // D logs Biscuit
    // E logs Biscuit
  },

  exerciseG() {
    var fruit = 'apple';

    function eatFruit() {

      if (fruit !== 'kiwi') {
        var fruit = 'mango';

        if (fruit) {
          // Log A: fruit
          const fruit = 'strawberry';
        }
        // Log B: fruit
      }
      // Log C: fruit
    }

    eatFruit();
    // Log D: fruit

    const result = [{
      A: "reference error"
    }, {
      B: "mango"
    }, {
      C: "mango"
    }, {
      D: "apple"
    }];
    return result;

    // Annotation:
    // A logs reference error ?
    // B logs mango
    // C logs mango
    // D logs apple
  },

  exerciseH() {
    let num = 6;

    const fn1 = function() {
      let num = 4;
      // Log A: num

      if (num < 5) {
        const num = 9;

        fn2(num);

        const newNum = num;
        // Log B: newNum
      }

      newNum = num;
      // Log C: newNum
    };

    const fn2 = function(num){
      // Log D: num

      num = num + 1;
      // Log E: num
    };

    fn1();

    const result = [{
      A: 4
    }, {
      D: 9
    }, {
      E: 10
    }, {
      B: 9
    }, {
      C: 4
    }];
    return result;

    // Annotation:
    // A logs 4
    // D logs 9
    // E logs 10
    // B logs 9
    // C logs 4
  },

  exerciseI() {
    var hunger = 100;

    function eatSnack() {
      hunger -= 25;
      // Log A: hunger
      gorgeYourself();

      function gorgeYourself() {
        const hunger = 0;
        // Log B: hunger
      }
      // Log C: hunger
    }

    eatSnack();

    hunger += 5;
    // Log D: hunger

    eatSnack();
    // Log E: hunger

    const result = [{
      A: 75
    }, {
      B: 0
    }, {
      C: 75
    }, {
      D: 80
    }, {
      A: 55
    }, {
      B: 0
    }, {
      C: 55
    }, {
      E: 55
    }];
    return result;

    // Annotation:
    // A logs 75
    // B logs 0
    // C logs 75
    // D logs 80
    // A logs 55
    // B logs 0
    // C logs 55
    // E logs 55
  },

  exerciseJ() {
    let sandwich = 'ketchup sandwich';
    // Log A: sandwich

    const addChipotle = () => {
      // Log B: toppings
      var toppings = 'chipotle sauce';

      if (toppings === 'chipotle sauce') {
        sandwich = 'not a mediocre sandwich';
      }
      // Log C: sandwich
    };

    const addCheese = () => {
      let cheeseTopping = 'gouda';
      // Log D: cheeseTopping

      const shesTheManReference = () => {
        amandaBynes = 'National Treasure';
      };

      shesTheManReference();
    };

    cheeseTopping = 'kraft';
    addCheese();

    addChipotle();
    // Log E: sandwich
    // Log F: amandaBynes

    const result = [{
      A: "ketchup sandwich"
    }, {
      D: "gouda"
    }, {
      B: undefined
    }, {
      C: "not a mediocre sandwich"
    }, {
      E: "not a mediocre sandwich"
    }, {
      F: "National Treasure"
    }];
    return result;

    // Annotation:
    // A logs ketchup sandwich
    // D logs gouda
    // B logs undefined
    // C logs not a mediocre sandwich
    // E logs not a mediocre sandwich ?
    // F logs national treasure
  },

  exerciseK() {
    let num = 10;

    function foo() {
      if (num > 5) {
        num = 7;
      }
      // Log A: num
    }

    foo();

    // Log B: num

    const result = [{
      A: 7
    }, {
      B: 7
    }];
    return result;

    // Annotation:
    // A logs 7
    // B logs 7

  },

  exerciseL() {
    let grade = 100;

    function losePoints() {
      grade = 90;

      function addPoints() {
        const grade = 95;

        if (grade === 95) {
          let grade = 97;
        }
        // Log A: grade
      }

      addPoints();
      // Log B: grade
    }

    losePoints();
    // Log C: grade

    const result = [{
      A: 95
    }, {
      B: 90
    }, {
      C: 90
    }];
    return result;

    // Annotation:
    // A logs 95
    // B logs 90 ?
    // C logs 90 ?
  },

  exerciseM() {
    var num = 5;

    function first() {
      // Log A: num
      num = 6;
      // Log B: num
    }

    function second() {
      // Log C: num
      let num = 7;
    }

    first();
    second();
    // Log D: num

    const result = [{
      A: 5
    }, {
      B: 6
    }, {
      C: "reference error"
    }, {
      D: 6
    }];
    return result;

    // Annotation:
    // A logs 5
    // B logs 6
    // C logs reference error ?
    // D logs 6
  },

  exerciseN() {
    var instructor = 'Pam';

    function changeInstructor() {

      // Log A: instructor

      if (instructor === 'Brittany') {
        const instructor = 'Nathaniel';
      } else {
        let instructor = 'Brittany';
      }

      // Log B: instructor

      function rename() {
        instructor = 'Louisa';
        // Log C: instructor
      }

      rename();

      // Log D: instructor

    }

    // Log E: instructor

    changeInstructor();

    // Log F: instructor

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseO() {
    var shoe = 'flipflop';

    function putOnShoe() {
      // Log A: shoe
      var shoe = 'boot';
    }

    // Log B: shoe
    putOnShoe();
    // Log C: shoe

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseP() {
    let lunch;
    function orderLunch() {
      if (lunch) {
        // Log A: lunch
        let lunch = 'sandwich';
      }

      if (typeof lunch === 'undefined') {
        lunch = 'soup';
      }

      // Log B: lunch
    }

    orderLunch();

    // Log C: lunch

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseQ(){
    let myKid = 'Pandora';
    let wildKids = ['Antigone'];

    let myCrazyKidAntics = kid => {
      // Log A: kid
      wildKids.push(kid);
      // Log B: wildKids

      let drawOnTheWall = () => {
        let myKid = 'Mandy';
        // Log C: myKid
        return `That wild kid ${myKid}, drew on the wall!`;
      };

      drawOnTheWall();

      let myAmazingKid = () => {
        let myKid = wildKids.shift();
        // Log D: myKid
        return `That kid ${myKid}, is AMAZING!`;
      };

      myAmazingKid();
      // Log E: myKid;
      return `All these kids are wild, especially, ${myKid}!`;
    };

    myCrazyKidAntics(myKid);

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseR() {
    let myName = 'Rody';
    // Log A: myName

    const parentFunc = () => {
      myName += 'Toy';
      // Log B: myName

      let innerFunc = () => {
        let myName = 'Tesla';
        // Log C: myName
      };

      innerFunc();
      myName += 'Daniels';
    };

    parentFunc();
    // Log D: myName

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = scope;
