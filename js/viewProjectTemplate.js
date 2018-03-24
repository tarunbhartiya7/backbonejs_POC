var Vehicle = Backbone.Model.extend();

var VehicleView = Backbone.View.extend({
  initialize: function(){
    this.model.on('change', this.render, this);
  },
  events: {
    'click .delete': 'onDeleteVehicle'
  },
  onDeleteVehicle: function(e){
    e.stopPropagation();
    console.log('Vehicle Deleted');
  },
  render: function(){
    var template = _.template($('#vehicleTemplate').html());
    var html = template(this.model.toJSON());
    this.$el.html(html);

    return this;
  }
});

var vehicle = new Vehicle({ registrationNumber: 'XMV123', brand: 'BMW'});

var vehicleView = new VehicleView({ el: '#container', model: vehicle});
vehicleView.render();


