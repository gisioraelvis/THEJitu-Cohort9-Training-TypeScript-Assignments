"use strict";
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
const person = Symbol();
console.log(person);
