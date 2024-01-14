// abstract class Users {
//   constructor(protected firstName: string, protected lastName: string) {}
//   abstract sayHi(name: string): string;
//   abstract fullName(): string;
// }

// class Players extends Users {
//   fullName(): string {
//     return `${this.firstName}  ${this.lastName}`;
//   }
//   sayHi(name: string): string {
//     return `hello ${name}. my name is ${this.fullName}`;
//   }
// }

interface Users {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

interface Human {
  health: number;
}

class Players implements Users, Human {
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}
  fullName(): string {
    return `${this.firstName}  ${this.lastName}`;
  }
  sayHi(name: string): string {
    return `hello ${name}. my name is ${this.fullName}`;
  }
}
function makeUser(user: Users): Users {
  //return 'hi';
  return {
    firstName: 'sj',
    lastName: 'last',
    fullName: () => 'xxx',
    sayHi(name) {
      return 'string';
    },
  };
}

makeUser({
  firstName: 'sj',
  lastName: 'last',
  fullName: () => 'xxx',
  sayHi(name) {
    return 'string';
  },
});

// Polymorphism (다형성)

interface SStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: SStorage<T> = {};
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringStorage = new LocalStorage<string>();
stringStorage.get('key');
stringStorage.set('hello', 'how are you');
const booleansStorage = new LocalStorage<boolean>();
booleansStorage.get('xxx');
booleansStorage.set('helllo', false);
