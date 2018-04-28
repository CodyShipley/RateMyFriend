Template.jones.rendered = function() {
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