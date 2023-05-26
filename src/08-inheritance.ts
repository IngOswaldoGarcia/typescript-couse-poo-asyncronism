export class Animal {
  constructor(public name: string){}
  move(){
    console.log("Moving along!");
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

export class Dog extends Animal {



  constructor(
      name: string,
      public owner: string
    ){
      super(name);
    }

  woof( times: number): void{
    for (let index = 0; index < times; index++) {
      console.log('woof!');
    }
  }
};

const fifi = new Animal('fifi');
fifi.move();
console.log(fifi.greeting());

const chase = new Dog('chase', 'niko');
chase.move();
console.log(chase.greeting());
chase.woof(5);
console.log(chase.owner)
