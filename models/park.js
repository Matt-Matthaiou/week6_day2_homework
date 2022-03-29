const Park = function(name, price){
    this.name = name;
    this.ticketPrice = price;
    this.dinosaurs = [];
}

Park.prototype.addDino = function(dino){
    this.dinosaurs.push(dino);
}

Park.prototype.removeDino = function(dino){
    this.dinosaurs.splice(this.dinosaurs.indexOf(dino), 1);
}

Park.prototype.mostPopularDino = function(){
  let popular = 0
  for (let dino of this.dinosaurs){
      if ( popular === 0){
          popular = dino;
      }
      else if (dino.guestsAttractedPerDay > popular.guestsAttractedPerDay){
          popular=dino;
      }
  }
  return popular;
}

Park.prototype.findDinosOfSameSpecies = function (species){
    let dinos = [];
    for (let dino of this.dinosaurs){
        if (dino.species === species){
            dinos.push(dino);
        }
    }
    return dinos;
}

Park.prototype.totalGuestForTheDay = function(){
    let totalGuests = 0
    for (let dino of this.dinosaurs){
        totalGuests += dino.guestsAttractedPerDay;
    }
    return totalGuests;
}

Park.prototype.totalGuestsPerYear = function(){
    let guestPerDay = this.totalGuestForTheDay();
    return 365 * guestPerDay;
}

Park.prototype.totalRevenuePerYear = function(){
    return 100 * this.totalGuestsPerYear();
}

module.exports = Park;