// 객체지향 TypeScript
class Player {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickName: string
  ) {}
}

/**
 *
 * 모든 객체지향에서 그렇듯 private, public이 사용되지만 js에서는 생략됨
 *
 * // in JavaScript
 *
 * class Player {
 *  constructor(firstName, lastName){
 *      this.firstName = firstName;
 *      this.lastName = lastName;
 *  }
 * }
 *
 */

const sujin = new Player('lim', 'jin', 'ssu');

// Abstract Class (추상 클래스)
/**
 * 다른 클래스가 상속받을 수 있는 클래스
 * 직접 새로운 instance를 생성 할 수 없다.
 */
// Abstract method (추상 메소드)
abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    private nickName: string
  ) {}
  abstract getNickName(): void;
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player_a extends User {
  getNickName() {
    // this.nickName 에 접근 할 수 없다. 확장자가 protected 면 접근 가능
  }
}

/**
 * 객체지향 언어의 특징
 * private : User 클래스의 인스턴스나 메소드에서 접근 가능
 * protected : User를 상속받으면 접근이 가능하다.
 */
