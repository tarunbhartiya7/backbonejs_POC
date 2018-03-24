// Validation

var Song = 
Backbone.Model.extend({
  validate: function(attrs){
    if(!attrs.title)
      return 'Title is required'
  }
});

var song = new Song();

console.log('Before: ', song.isValid());
console.log('Before: ', song.validationError);

song.set('title', 'New Title');
console.log('After: ', song.isValid());
console.log('After: ', song.validationError);

// Inheritance

var Animal = Backbone.Model.extend({
  walk: function(){
    console.log('Animal Walking...');
  }
});

var Dog = Animal.extend({
  defaults: {
    id: '2'
  },
  walk: function(){
    Animal.prototype.walk.apply(this);  // call the base class method, similar to super() in java
    console.log('Dog with id ' + this.get('id') + ' Walking...');
  }
});

var dog = new Dog();
dog.walk();







