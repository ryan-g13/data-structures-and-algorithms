'use strict';

import Animal from './animal';

const AnimalQueue = class AnimalShelter {
  constructor() {
    this.shelter = [];
  }

  enqueue(animal) {
    const obj = new Animal(animal);
    this.shelter.push(obj);
  }

  dequeue(pref) {
    if (this.shelter.length < 1) {
      return this.shelter.splice(0, 1);
    }
    if (pref === 'dog') {
      for (let i = 0; i < this.shelter.length; i++) {
        if (this.shelter[i].type === 'dog') {
          return this.shelter.splice(i, 1);
        }
      }
    }
    if (pref === 'cat') {
      for (let i = 0; i < this.shelter.length; i++) {
        if (this.shelter[i].type === 'cat') {
          return this.shelter.splice(i, 1);
        }
      }
    }
    if (pref !== 'cat' || pref !== 'dog') {
      return 'invalid preference passed in.';
    }
    return undefined;
  }
};

export default AnimalQueue;
