// Types of TS part One
// Types of TS part Two
// readonly
type Name = string;
type Age = number;
type Player = {
  readonly name: Name;
  age?: Age; // 입력값이 필수가 아님
};

// ? : undefined

// 함수명(argument:type):returntype{}
function playerMaker(name: string): Player {
  return {
    name,
  };
}
const jin = playerMaker('jin');
playerMaker.age = 12;

// :type

const playerMaker02 = (name: string): Player => ({ name });

const numbers: readonly number[] = [1, 2, 3, 4];
// numbers.push(1) // error

const names: readonly string[] = ['a', 'b'];

// Tuple
// create array , have to minmum length
// should have certain type in certain position

const player: readonly [string, number, boolean] = ['jin', 22, false];

// player[0] = 1; // not allow , readonly
// javascript doesn't have tuple

// any
// escape typescript to use
// any 를 사용 하는 건 typescript의 보호를 받지 못하는 것, 사용을 지양한다.

// Types of TS part Three
let a: unknown;
// protection of typescript
// 변수의 타입을 미리 알지 못할 때
if (typeof a == 'number') {
  let b = a + 1;
}
// void
// 함수에서 아무것도 return 하지 않을 때
function hello() {
  console.log(' hello ');
}

// never
// 함수가 절대 return 하지 않을 때 사용
function hello2(): never {
  throw new Error('xxxx');
}

// Call Signatures
// const add = (a:number, b:number) => a+b;

type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a + b;

// Overloading
// 함수가 여러개의 call signatures를 가지고 있을 때 발생시긴다.

type Add02 = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};

const add02: Add = (a, b) => {
  if (typeof b === 'string') return a;
  else return a + b;
};

// **
// Next.js have to router
// for many example
/*Router.push("/home") // move to home page

Router.push({
    path:'/home',
    state:1
})*/

type Config = {
  path: string;
  state: object;
};
type Push = {
  (path: string): void;
  (obj: Config): void;
};
const push: Push = (config) => {
  if (typeof config == 'string') console.log(config);
  else console.log(config.path);
};

// 파라미터의 개수가 다를 경우
type Add3 = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};
const add03: Add3 = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

// Polymorphism(다형성)
type SuperPrint = {
  (arr: number[]): void;
  (arr: boolean[]): void;
  (arr: string[]): void;
};
const superPrint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};
superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);

// contrete type : number, boolean, string.....
// generic : 타입의 placeholder

// use Generic
type SuperPrint_G = <T, M>(a: T[], b: M) => T;

const superPrint_g: SuperPrint_G = (arr) => arr[0];
const b = superPrint_g([1, 2, 3, 4], '55');
const c = superPrint_g([1, '2', true, false], 5);

// Conclusions
function superPrint_f<T>(a: T[]) {
  return a[0];
}
const d = superPrint_f<number>([1, 2, 3, 4]); // === superPrint_f([1,2,3,4])

type Player_g<E> = {
  name: string;
  extraInfo: E;
};

type JinExtra = {
  favFood: string;
};
type JinPlayer = Player_g<JinExtra>;

const jinjin: Player_g = {
  name: 'jin',
  extraInfo: {
    favFood: 'kimchi',
  },
};

const lynn: Player_g<null> = {
  name: 'lynn',
  extraInfo: null,
};

type A = Array<number>;
let aa: A = [3, 4];
function printAllNumbers(arr: Array<number>) {
  // ...
}
