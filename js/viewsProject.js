var Vehicle = Backbone.Model.extend();
var Vehicles = Backbone.Collection.extend({
  model: Vehicle
});

var VehicleView = Backbone.View.extend({
  tagName: 'li',
  attributes: {
    'data-color': 'green'
  },
  events: {
    'click .delete': 'onDeleteVehicle'
  },
  onDeleteVehicle: function(){
    console.log('Vehicle Deleted');
  },
  render: function(){
    this.$el.html(this.model.get('registrationNumber') + ' ' + '<button class="delete">Delete</button>');
    this.$el.attr('id', this.model.id);
    return this;
  }
});

var VehiclesView = Backbone.View.extend({
  tagName: 'ul',

  initialize: function(){
    this.collection.on('add', this.onSongAdded, this);
    this.collection.on('remove', this.onVehicleRemoved, this);
  },

  onSongAdded: function(vehicle){
    var vehicleView = new VehicleView({ model: vehicle });
    this.$el.append(vehicleView.render().$el);
    console.log('Vehicle Added');
  },

  onVehicleRemoved: function(vehicle){
    // this.$el.find('li#' + vehicle.id).remove();
    this.$('li#' + vehicle.id).remove();
    console.log('Vehicle Removed');    
  },

  render: function(){
    var self = this;
    this.collection.each(function(vehicle){
      var vehicleView = new VehicleView({model: vehicle});
      self.$el.append(vehicleView.render().$el);
    });
  }
});

var vehicles = new Vehicles([
  new Vehicle({ id: 1, registrationNumber: 'XLI887', color: 'Blue' }),
  new Vehicle({ id: 2, registrationNumber: 'ZNP123', color: 'Blue' }),
  new Vehicle({ id: 3, registrationNumber: 'XUV456', color: 'Gray' })
]);

var vehiclesView = new VehiclesView({el: '#vehicles', collection: vehicles});
vehiclesView.render();


