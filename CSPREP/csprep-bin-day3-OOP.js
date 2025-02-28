/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 ***/

function makePerson(name, age){
    const user = {
    name,
    age
    }
    return user
  }
  
  const vicky = makePerson('Vicky', 24);
  
  
  /********* Uncomment these lines to test your work! *********/
  console.log(vicky.name); // -> Logs 'Vicky'
  console.log(vicky.age); // -> Logs 24
  
  
  
  
  
  /****************************************************************
                         USING OBJECT.CREATE
  ****************************************************************/
  
  /*** CHALLENGE 2 ***/
  
  const personStore = {
      greet: function() {console.log("hello")}
  };
  
  // /********* Uncomment this line to test your work! *********/
  personStore.greet(); // -> Logs 'hello'
  
  
  
  /*** CHALLENGE 3 ***/
  
  function personFromPersonStore(name, age) {
      const user = Object.create(personStore)
      user.name = name;
      user.age = age;
        return user;
  };
  
  const sandra = personFromPersonStore('Sandra', 26);
  
  
  // /********* Uncomment these lines to test your work! *********/
  console.log(sandra.name); // -> Logs 'Sandra'
  console.log(sandra.age); //-> Logs 26
  sandra.greet(); //-> Logs 'hello'
  
  
  
  /*** CHALLENGE 4 ***/
  
  personStore.introduce = function() {console.log(`Hi, my name is ${this.name}`)}
  
  sandra.introduce(); // -> Logs 'Hi, my name is Sandra'
  
  
  
  
  
  /****************************************************************
                      USING THE 'NEW' KEYWORD
  ****************************************************************/
  
  /*** CHALLENGE 5 ***/
  
  function PersonConstructor() {
      this.greet = function () {console.log("hello")}
  }
  
  
  // /********* Uncomment this line to test your work! *********/
  const simon = new PersonConstructor;
  simon.greet(); // -> Logs 'hello'
  
  
  
  /*** CHALLENGE 6 ***/
  
  function personFromConstructor(name, age) {
      this.name = name;
    this.age = age;
  };
  
  // personFomConstructor.prototype
  personFromConstructor.prototype.greet = function() {console.log('hello')};
  
  const mike = new personFromConstructor('Mike', 30);
  
  
  // /********* Uncomment these lines to test your work! *********/
  console.log(mike.name); // -> Logs 'Mike'
  console.log(mike.age); //-> Logs 30
  mike.greet(); //-> Logs 'hello'
  
  
  
  /*** CHALLENGE 7 ***/
  personFromConstructor.prototype.introduce = function (){console.log(`Hi, my name is ${this.name}`)}
  
  
  mike.introduce(); // -> Logs 'Hi, my name is Mike'
  
  
  /****************************************************************
                          USING ES6 CLASSES
  ****************************************************************/
  
  /*** CHALLENGE 8 ***/
  
  class PersonClass {
      constructor(name) {
      this.name = name;
      }
          greet() {
        console.log('hello');
      }
  }
  
  
  // /********* Uncomment this line to test your work! *********/
  const george = new PersonClass("George");
  george.greet(); // -> Logs 'hello'
  
  
  
  /*** CHALLENGE 9 ***/
  
  class DeveloperClass extends PersonClass {
    constructor(name){
      super(name); // calling parent constructor with 'super' to use 'this' 
    }
    
      introduce(){
        console.log(`Hello World, my name is ${this.name}`)
    }
  }
  
  
  // /********* Uncomment these lines to test your work! *********/
  const thai = new DeveloperClass('Thai', 32);
  console.log(thai.name); // -> Logs 'Thai'
  thai.introduce(); //-> Logs 'Hello World, my name is Thai'
  
  
  
  /****************************************************************
                        EXTENSION: SUBCLASSING
  ****************************************************************/
  
  const userFunctionStore = {
    sayType: function() {
      console.log("I am a " + this.type);
    }
  }
  
  function userFactory(name, score) {
    let user = Object.create(userFunctionStore);
    user.type = "User";
    user.name = name;
    user.score = score;
    return user;
  }
  
  /*** CHALLENGE 10 ***/
  
  const adminFunctionStore = Object.create(userFunctionStore);
  
  
  /*** CHALLENGE 11, 12, 13 ***/
  
  function adminFactory(name, score) {
    const admin = Object.create(adminFunctionStore)
    admin.type = "Admin"
    admin.name = name;
    admin.score = score;
    
    return admin;
  }
  
  /*** CHALLENGE 14 ***/
  adminFunctionStore.sharePublicMessage = function() {console.log("Welcome users!")};
  
  const adminFromFactory = adminFactory("Eva", 5);
  
  // /********* Uncomment these lines to test your work! *********/
  adminFromFactory.sayType() // -> Logs "I am a Admin"
  adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"
  
  
  /****************************************************************
  EXTENSION: MIXINS
  ****************************************************************/
  
  class Dog {
    constructor() {
      this.legs = 4;
    }
    speak() {
      console.log('Woof!');
    }
  }
  
  const robotMixin = {
    skin: 'metal',
    speak: function() { console.log(`I have ${this.legs} legs and am made of ${this.skin}`) },
  }
  
  let robotFido = new Dog();
  robotFido = Object.assign(robotFido, robotMixin);
  
  // /********* Uncomment to test your work! *********/
  robotFido.speak() // -> Logs "I am made of metal"