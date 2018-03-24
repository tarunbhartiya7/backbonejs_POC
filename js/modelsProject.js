var Vehicle = Backbone.Model.extend({

  idAttribute: 'registrationNumber',

  validate: function(attrs){
    if(!attrs.registrationNumber)
      return 'Registration Number cannot be null or undefined'
  },

  urlRoot: '/api/vehicles',

  start: function(){
    console.log('Vehicle started');
  }
});

var Car = Vehicle.extend({
  start: function(){
    console.log('Car with ' + this.get('registrationNumber') + ' started.');
  }
});

var car = new Car({
  registrationNumber: 'XLI887',
  color: 'Blue'
});

console.log(car.toJSON());

car.unset('registrationNumber');
console.log(car.toJSON());

if(!car.isValid()){
  console.log(car.validationError);
}

car.set("registrationNumber", "XLI887");

if(!car.isValid()){
  console.log(car.validationError);
}

car.start();



