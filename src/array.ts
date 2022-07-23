//array
let numbers: [number, string] = [1, '2'];
let numbers2: any[] = [];

//any array
let anyArray = [];
//code completion
// numbers.forEach(n => n.toFixed(2))

interface InterfaceA {
  name: string;
  age: number;
}

type InterfaceB = {
  name: string;
  age: number;
};

type A = '1' | '2';

let obj: InterfaceA[] = [
  {
    name: '',
    age: 0,
  },
];

let obj1: InterfaceB[] = [
  {
    name: '',
    age: 0,
  },
];
