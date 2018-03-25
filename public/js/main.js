// Model

var Song = Backbone.Model.extend({
  defaults: {
    genre: 'Jazz'
  },
  initialize: function(){
    console.log('A new song has been created!');
  }
});

// Model Instance

var song = new Song();

// Model Methods

song.set('title', 'Blue in Green');
song.set({
  'artist': 'Paul Antonio',
  'publish year': 1989
});

console.log(song.get('title'));
if(song.get('title') === 'Blue in Green'){
  song.unset('title');
  console.log('title removed'); 
}

console.log(song.toJSON());

song.clear();
console.log(song.toJSON());


