var Vehicle = Backbone.Model.extend();
var Vehicles = Backbone.Collection.extend({
  model: Vehicle
});

var VehicleView = Backbone.View.extend({
  tagName: 'li',

  className: 'vehicle',

  initialize: function(){
    this.model.on('change', this.render, this);
  },

  events: {
    'click .delete': 'onDeleteVehicle'
  },

  onDeleteVehicle: function(e){
    e.stopPropagation();
    this.remove();
    setTimeout(() => {
      alert(this.model.get('registrationNumber') + ' Vehicle Deleted');
    });
  },

  render: function(){
    var template = _.template($('#vehicleTemplate').html());
    var html = template(this.model.toJSON());
    this.$el.html(html);
    this.$el.attr("data-color", this.model.get("color"));

    return this;
  }
});

var VehiclesView = Backbone.View.extend({
  tagName: 'ul',

  id: "venues",

  initialize: function(){
    this.collection.on('add', this.onVehicleAdded, this);
  },

  onVehicleAdded: function(vehicle){
    var vehicleView = new VehicleView({ model: vehicle });
    this.$el.append(vehicleView.render().$el);
    console.log('Vehicle Added');
  },
  
  render: function(){
    this.collection.each(vehicle => {
      var vehicleView = new VehicleView({model: vehicle});
      this.$el.append(vehicleView.render().$el);
    });

    return this;
  }
});

var vehicles = new Vehicles([
  new Vehicle({ id: 1, registrationNumber: 'XLI887', color: 'Blue', brand: 'BMW' }),
  new Vehicle({ id: 2, registrationNumber: 'ZNP123', color: 'Blue', brand: 'Audi' }),
  new Vehicle({ id: 3, registrationNumber: 'XUV456', color: 'Gray', brand: 'BMW' })
]);

var vehiclesView = new VehiclesView({ collection: vehicles });
$('#venues-container').html(vehiclesView.render().$el);






