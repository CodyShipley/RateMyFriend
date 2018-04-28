Template.sidebar.rendered = function() {
  // be sure to use this.$ so it is scoped to the template instead of to the window
  this.$('.ui.sidebar').sidebar({
      context: $('.bottom.segment')
    })
    .sidebar('attach events', '.mainMenu');

  // other SUI modules initialization
};

Template.sidebar.events({
  'click .logout': function(event) {
    Meteor.logout(function(err) {
      if (err) {
        Bert.alert(err.reason, "danger", "growl-top-right");
      } else {
        Router.go('/')
        Bert.alert("Logged Out!", "success", "growl-top-right");
      }
    })
  }
})