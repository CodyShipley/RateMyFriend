Router.configure({
  layoutTemplate: 'main_layout'
});


Router.map(function() {
  this.route('home', {
    path: '/',
    template: 'home'
  })
})
Router.map(function() {
  this.route('jones', {
    path: '/rateJones',
    template: 'jones'
  })
})

Router.map(function() {
  this.route('login', {
    path: '/login',
    template: 'login'
  })
})

Router.map(function() {
  this.route('register', {
    path: '/register',
    template: 'register'
  })
})

Router.map(function() {
  this.route('profile', {
    path: '/profile',
    template: 'profile'
  })
})