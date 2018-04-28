Template.profile.rendered = function() {
  var ratings = [];


  this.$('.rating')
    .rating({
      initialRating: 0,
      maxRating: 5
    });

  this.$('.averageRating')
    .rating('disable', {
      initialRating: 3,
      maxRating: 5
    });
}

Template.profile.helpers({
  email: function() {
    if (!Meteor.user()) {
      Bert.alert("You're not logged in", 'danger', 'growl-top-right');
      return false;
    } else {
      return Meteor.user().emails[0].address;
    }
  },
  username: function() {
    if (!Meteor.user()) {
      Bert.alert("You're not logged in", 'danger', 'growl-top-right');
      return false;
    } else {
      return Meteor.user().username;
    }
  }
})