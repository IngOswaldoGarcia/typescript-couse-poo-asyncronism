console.log('Math.PI', Math.PI)
console.log('Math.max', Math.max(1,2,3,4,5,6,0,3,4,5,2));
class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]){
    console.log(numbers)
    return numbers.reduce((max, item) => max > item ? max : item);
  }
}

/* const math = new MyMath();
math.PI */

console.log('MyMath.PI' ,MyMath.PI);
console.log('MyMath.max' ,MyMath.max(1,2,3,4,5,72328,0));
const numbers = [1,2,3,4,5,72328,0]
console.log('MyMath.max',MyMath.max(...numbers));
console.log('MyMath.max',MyMath.max(-1, -5, -9, -2));
