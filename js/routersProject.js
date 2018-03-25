var HomeView = Backbone.View.extend({
  render: function(){
    this.$el.html('Home View');

    return this;
  }
});

var CarsView = Backbone.View.extend({
  render: function(){
    this.$el.html('Cars View');

    return this;
  }
});

var BoatsView = Backbone.View.extend({
  render: function(){
    this.$el.html('Boats View');

    return this;
  }
});

var NavView = Backbone.View.extend({
  events: {
    'click': 'onClick'
  },

  onClick: function(e){
    var $li = $(e.target);
    router.navigate($li.attr('data-url'), {trigger: true});
  }
});

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'viewHome',
    'cars': 'viewCars',
    'boats': 'viewBoats',
    "*other": "defaultRoute"
  },

  viewHome: function(){
    var view = new HomeView({ el: '#container' });
    view.render();
  },

  viewCars: function(){
    var view = new CarsView({ el: '#container' });
    view.render();
  },

  viewBoats: function(){
    var view = new BoatsView({ el: '#container' });
    view.render();
  },

  defaultRoute: function(){
    alert('Invalid Route!');
	}
});

var router = new AppRouter();
Backbone.history.start();

var navView = new NavView({ el: '#nav' });






