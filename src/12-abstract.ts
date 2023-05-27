import { Animal, Dog } from './09-protected';


const animal = new Animal('elite');
animal.greeting();

const chase = new Dog('Chase', 'nico');
chase.greeting();
chase.woof(2);
