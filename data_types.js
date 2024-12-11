/**
 * Data Types
 * 
 * 여섯개의 Primitive Type과
 * 한개의 오브젝트 타입이 있다.
 * 
 * 1) Number
 * 2) String
 * 3) Boolean
 * 4) undefined
 * 5) null
 * 6) Symbol
 * 
 * 7)Object(객체)
 *  Function
 *  Array
 *  Object
 */
const age = 31;
console.log(typeof age);
/**
 * null은 개발자가 지정
 * Symbol은 유일무이한 값을 생성
 */
const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1 ===symbol2);

const dictionary = {
    red : '빨간색',
    yellow : '노란색'
};
console.log(dictionary);
console.log(dictionary['red']);
