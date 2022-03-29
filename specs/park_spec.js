const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  beforeEach(function () {
    park = new Park("Jurassic Park", 100);
    dinosaur1 = new Dinosaur('Velociraptor', "carnivore", 100);
    dinosaur2 = new Dinosaur("Triceratops", "omnivore", 80);
    dinosaur3 = new Dinosaur("Velociraptor", "carnivore", 100);
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 100);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDino(dinosaur1);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1])
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.removeDino(dinosaur1);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur2]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    const actual = park.mostPopularDino();
    assert.strictEqual(actual, dinosaur1)
    
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    const actual = park.findDinosOfSameSpecies("Velociraptor");
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur3]);
    
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    const actual = park.totalGuestForTheDay();
    assert.strictEqual(actual, 280);
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    const actual = park.totalGuestsPerYear();
    assert.strictEqual(actual, 102200)
  });

  it('should be able to calculate total revenue for one year', function(){
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    const actual = park.totalRevenuePerYear();
    assert.strictEqual(actual, 10220000)
  });

});
