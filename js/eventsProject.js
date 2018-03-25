var Vehicle = Backbone.Model.extend({
  idAttribute: "registrationNumber"
});
var Vehicles = Backbone.Collection.extend({
  model: Vehicle
});

var VehicleView = Backbone.View.extend({
  tagName: 'li',

  className: 'vehicle',

  // initialize: function(){
  //   this.model.on('change', this.render, this);
  // },

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

  id: "vehicles",

  initialize: function(){
    bus.on('newVehicle', this.onVehicleAdded, this);
  },

  onVehicleAdded: function(vehicle){
    var car = new Vehicle({ registrationNumber: vehicle, color: 'Blue' });
    var vehicleView = new VehicleView({ model: car });
    this.$el.append(vehicleView.render().$el);
    alert('Vehicle Added');
  },
  
  render: function(){
    this.collection.each(vehicle => {
      var vehicleView = new VehicleView({model: vehicle});
      this.$el.append(vehicleView.render().$el);
    });

    return this;
  }
});

var NewVehicleView = Backbone.View.extend({
  events: {
		"click .add": "onAdd"
  },

  className: 'newVehicle',
  
  onAdd: function(){
		var input = this.$el.find(".registration-number");

		var registrationNumber = input.val();
		bus.trigger("newVehicle", registrationNumber);

		// It's the responsibility of this view to clear its text box
		input.val("");
	},

  render: function(){
    var template = _.template($('#newVehicleTemplate').html());
    var html = template();
    this.$el.html(html);

    return this;
  }
});

var bus = _.extend({}, Backbone.Events);

var vehicles = new Vehicles([
  new Vehicle({ registrationNumber: 'XLI887', color: 'Blue' }),
  new Vehicle({ registrationNumber: 'ZNP123', color: 'Blue' }),
  new Vehicle({ registrationNumber: 'XUV456', color: 'Gray' })
]);

$("#container")
	.append(new NewVehicleView().render().$el)
	.append(new VehiclesView({ collection: vehicles }).render().$el);






