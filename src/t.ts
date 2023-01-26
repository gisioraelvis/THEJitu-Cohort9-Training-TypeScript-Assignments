// TS Class with all OOP i.e Inheritance, Encapsulation, Abstraction, Polymorphism
// class Person {
//   private name: string;
//   private age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   getName(): string {
//     return this.name;
//   }

//   getAge(): number {
//     return this.age;
//   }

//   setName(name: string) {
//     this.name = name;
//   }

//   setAge(age: number) {
//     this.age = age;
//   }
// }

// class Student extends Person {
//   private rollNo: number;

//   constructor(name: string, age: number, rollNo: number) {
//     super(name, age);
//     this.rollNo = rollNo;
//   }

//   getRollNo(): number {
//     return this.rollNo;
//   }

//   setRollNo(rollNo: number) {
//     this.rollNo = rollNo;
//   }
// }

// init a symbol variable
// const person = Symbol();
// console.log(person);

// type StringNumber = String | Number;

// // type guard function, takes 2 values and checks types before performing an operation
// // i.e sum or concatinate
// function add(a: StringNumber, b: StringNumber) {
//   if (typeof a === "string" || typeof b === "string") {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

// for...in loop over some object
// const person = {
//   name: "John",
//   age: 30,
// };

// // use generic to remove person[key] type error
// function logPerson<T>(person: T) {
//   for (const key in person) {
//     console.log(person[key]);
//   }
// }

// // a function that takes a tuple as an argument
// function printName(name: [string, string]) {
//   console.log(name[0] + " " + name[1]);
// }

// printName(["John", "Doe"]);

// // Literal types
// type Name = "John" | "Doe";

// let userName: Name = "John";

// Using an object const mimic an enum with string values to rep log levels

// const LogLevel = {
//   ERROR: "error",
//   WARN: "warn",
//   INFO: "info",
//   DEBUG: "debug",
// } as const;

// type LogLevel = typeof LogLevel[keyof typeof LogLevel];
// let warning1: LogLevel = LogLevel.ERROR;
// console.log(`warning1: ${warning1}`);

// let warning2: keyof typeof LogLevel = "ERROR";
// console.log(`warning2: ${warning2}`);

// function log(message: string, level: LogLevel = LogLevel.INFO) {
//   console.log(`${level}: ${message}`);
// }

// Generics

// function identity<T>(value: T): T {
//   return value;
// }

// let output = identity("Hello") // T is infered
// let output2 = identity<string>("Hello") // T is explicitly set

// console.log()

type LogLevel = {
  ERROR: "error";
  WARN: "warn";
  INFO: "info";
  DEBUG: "debug";
};

let Logs: LogLevel = {
  ERROR: "error",
  WARN: "warn",
  INFO: "info",
  DEBUG: "debug",
};

for (const key in Logs) {
  console.log(key);
}

function getAverage(a: number, b: number, c: number): string {
  const total = a + b + c;
  const average = total / 3;
  return "The average is " + average;
}

// TS Class with all OOP i.e Inheritance, Encapsulation, Abstraction, Polymorphism
// class Person {
//   private name: string;
//   private age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   getName(): string {
//     return this.name;
//   }

//   getAge(): number {
//     return this.age;
//   }

//   setName(name: string) {
//     this.name = name;
//   }

//   setAge(age: number) {
//     this.age = age;
//   }
// }

// class Student extends Person {
//   private rollNo: number;

//   constructor(name: string, age: number, rollNo: number) {
//     super(name, age);
//     this.rollNo = rollNo;
//   }

//   getRollNo(): number {
//     return this.rollNo;
//   }

//   setRollNo(rollNo: number) {
//     this.rollNo = rollNo;
//   }
// }

// init a symbol variable
// const person = Symbol();
// console.log(person);

// type StringNumber = String | Number;

// // type guard function, takes 2 values and checks types before performing an operation
// // i.e sum or concatinate
// function add(a: StringNumber, b: StringNumber) {
//   if (typeof a === "string" || typeof b === "string") {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

// for...in loop over some object
// const person = {
//   name: "John",
//   age: 30,
// };

// // use generic to remove person[key] type error
// function logPerson<T>(person: T) {
//   for (const key in person) {
//     console.log(person[key]);
//   }
// }

// // a function that takes a tuple as an argument
// function printName(name: [string, string]) {
//   console.log(name[0] + " " + name[1]);
// }

// printName(["John", "Doe"]);

// // Literal types
// type Name = "John" | "Doe";

// let userName: Name = "John";

// Using an object const mimic an enum with string values to rep log levels

// const LogLevel = {
//   ERROR: "error",
//   WARN: "warn",
//   INFO: "info",
//   DEBUG: "debug",
// } as const;

// type LogLevel = typeof LogLevel[keyof typeof LogLevel];
// let warning1: LogLevel = LogLevel.ERROR;
// console.log(`warning1: ${warning1}`);

// let warning2: keyof typeof LogLevel = "ERROR";
// console.log(`warning2: ${warning2}`);

// function log(message: string, level: LogLevel = LogLevel.INFO) {
//   console.log(`${level}: ${message}`);
// }

// Generics

// function identity<T>(value: T): T {
//   return value;
// }

// let output = identity("Hello") // T is infered
// let output2 = identity<string>("Hello") // T is explicitly set

// console.log()

// Keyof Type Operato
type PersonObj = { name: string; age: number; occupation: string };

let person: PersonObj = { name: "John", age: 24, occupation: "Dev" };

type personKeys = keyof PersonObj;

// String literal

type People = "person1" | "person2" | "person3";

// Record
type RecordOfPeople = Record<People, PersonObj>;
