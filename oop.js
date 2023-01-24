/**
 * Create a property mileage in class car and make it private
 * Create a static method called engine
 * use # to make a property private
 */

// class Car {
//   #mileage;
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }

//   getMileage() {
//     return this.#mileage;
//   }

//   setMileage(value) {
//     this.#mileage = value;
//   }

//   static engine(type) {
//     console.log(`${type} Vroom Vroom`);
//   }
// }

// let car = new Car("Toyota", "Camry");
// // car.mileage = 100; // this will not work, returns undefined
// car.setMileage(100);
// console.log(car.getMileage());
// Car.engine("V8");

/**
 * Create a property mileage in class car and make it private
 * Create a static method called engine
 * use weakmap to make a property private
 */

const mileage = new WeakMap();

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    mileage.set(this, 0);
  }

  getMileage() {
    return mileage.get(this);
  }

  setMileage(value) {
    mileage.set(this, value);
  }

  static engine(type) {
    console.log(`${type} Vroom Vroom`);
  }
}

// let car = new Car("Toyota", "Camry");
// car.mileage = 100; // this will not work
// // car.setMileage(100);
// console.log(car.getMileage());
// // Car.engine("V8");

/**
 * Create a property mileage in class car and make it private
 * Create a static method called engine
 * use symbol to make a property private
 */

// const _mileage = Symbol();

// class Car {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//     this[_mileage] = 0;
//   }

//   getMileage() {
//     return this[_mileage];
//   }

//   setMileage(value) {
//     this[_mileage] = value;
//   }

//   static engine(type) {
//     console.log(`${type} Vroom Vroom`);
//   }
// }

// let car = new Car("Toyota", "Camry");
// car.mileage = 100; // this will not work
// // car.setMileage(100);
// console.log(car.getMileage());
// Car.engine("V8");

/**
 * Create a property mileage in class car and make it private
 * Create a static method called engine
 * use closure to make a property private
 */

// function Car(make, model) {
//   let mileage = 0;

//   this.make = make;
//   this.model = model;

//   this.getMileage = function () {
//     return mileage;
//   };

//   this.setMileage = function (value) {
//     mileage = value;
//   };
// }

// let car = new Car("Toyota", "Camry");
// car.mileage = 100; // this will not work
// // car.setMileage(100);
// console.log(car.getMileage());

// let people = [
//   { name: "John", age: 20 },
//   { name: "Jane", age: 30 },
//   { name: "Jack", age: 40 },
// ];

// // returns the value of the array i.e {name: "John", age: 20}, {name: "Jane", age: 30}, {name: "Jack", age: 40}
// for (const name of people) {
//   console.log(name);
// }

// // returns the index of the array i.e 0, 1, 2
// for (const key in people) {
//   console.log(key);
// }

// const person = {
//   name: "John",
//   age: 20,
//   residence: "Nairobi",
//   work: "Software Developer",
// };

// // returns the object keys i.e name, age, residence, work
// for (const key in person) {
//   console.log(key);
// }

// // won't work because person is not iterable i.e it doesn't have a Symbol.iterator
// // only arrays and strings are iterable
// // for (const iterator of person) {
// //   console.log(iterator);
// // }

// let sampleString = "Hello World";

// // returns the characters of the string i.e H, e, l, l, o, , W, o, r, l, d
// for (const iterator of sampleString) {
//   console.log(iterator);
// }
