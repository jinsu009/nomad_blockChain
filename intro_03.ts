// HashMap을 만들어보자

type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
  del(term: string) {
    delete this.words[term];
  }
  modify(term: string, definition: string) {
    if (this.words[term]) {
      this.words[term] = definition;
    }
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word('kimchi', '한국의 음식');
const ramyon = new Word('ramyon', '라면');
const coffee = new Word('coffee', '사약');

const dict = new Dict();
dict.add(kimchi);
dict.add(ramyon);
dict.add(coffee);
dict.def('kimchi');
console.log(dict);

dict.modify('coffee', '콩물');
dict.del('ramyon');
console.log(dict);

// interface

type Nickname = string;
type Health = number;
type Friends = Array<string>;

type Team = 'red' | 'blue' | 'green'; // type이 특정 값만 가지게끔 정의

type PlayerType = {
  nickname: Nickname;
  healthBar: Health;
  team?: Team;
};

const jinsuu: PlayerType = {
  nickname: 'sujin',
  healthBar: 20,
};

const lim: PlayerType = {
  nickname: 'jinsu',
  team: 'green',
  healthBar: 50,
};

// object 의 모양을 특정하는데 사용할 수 있다.
// type 과 interface의 차이점은 type이 활용도가 높다.
interface PlayerInter {
  nickname: Nickname;
  healthBar: Health;
  team?: Team;
}

interface User {
  name: string;
}
interface Person extends User {}

/**
 * type User = {
 *  name:string
 * }
 * type Person = User{}
 */

interface People {
  name: string;
}
interface People {
  lastName: string;
}
interface People {
  health: number;
}

const limsu = {
  name: 'limsujin',
  lastName: 'lim',
  health: 33,
};
