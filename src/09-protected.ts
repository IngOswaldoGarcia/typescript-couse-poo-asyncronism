export class Animal {
  constructor(protected name: string){}
  protected move(){
    console.log("Moving along!");
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }

  protected doSomenthing(){
    console.log('dooo');
  }
}

export class Dog extends Animal {
  constructor(
      name: string,
      private owner: string
    ){
      super(name);
    }

  woof( times: number): void{
    for (let index = 0; index < times; index++) {
      console.log(`woof! ${this.name}`);
    }
    this.doSomenthing();
  }

  move(){
    console.log('moving as a dog');
    super.move();
  }
};

const chase = new Dog('chase', 'niko');
//chase.name = 'otro nombre';
chase.woof(1);
chase.move();
