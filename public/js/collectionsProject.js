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

var Vehicles = Backbone.Collection.extend({
  model: Vehicle
});

var vehicles = new Vehicles([
  new Vehicle({ registrationNumber: 'XLI887', colour: 'Blue' }),
  new Vehicle({ registrationNumber: 'ZNP123', colour: 'Blue' }),
  new Vehicle({ registrationNumber: 'XUV456', colour: 'Gray' })
]);

var blueCars = vehicles.where({colour: 'Blue'});
console.log(blueCars);

var carXLI887 = vehicles.findWhere({ registrationNumber: 'XLI887' });
console.log(carXLI887);

vehicles.remove(carXLI887);

console.log(vehicles.toJSON());

vehicles.each(item => console.log(item));







