// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'createEvent', 'eventList', 'eventDetails', 'ngRoute', 'auth', 'dndLists'
  ])
.config(['$routeProvider', '$httpProvider',function($routeProvider, $httpProvider) {
  $routeProvider.when('/', {
    templateUrl: '/app/create/create.html',
    controller: 'CreateController'
  });
  $routeProvider.when('/events', {
    templateUrl: 'app/events/events.html',
    controller: 'EventsController'
  });
  $routeProvider.when('/eventdetails/:eventID', {
    templateUrl: 'app/eventdetails/eventdetails.html',
    controller: 'eventDetailsController'
  })
  $routeProvider.when('/signin',{
    templateUrl: 'app/auth/signin.html',
    controller: 'AuthController'
  });
  $routeProvider.otherwise({redirectTo: '/'});
}])
.run(['$rootScope', '$location', 'AuthFactory', function($rootScope, $location, AuthFactory) {
  $rootScope.$on('$routeChangeStart', function(event, toState) {
    console.log(toState)
    if(toState.$$route && toState.$$route.originalPath === '/events' && !AuthFactory.isAuth()) {
      $location.path('/signin');
    }
    if(toState.$$route && toState.$$route.originalPath === '/' && !AuthFactory.isAuth()) {
      $location.path('/signin');
    }
    if(toState.$$route && toState.$$route.originalPath === '/signin') {
      $location.path('/signin');
    }
  });
}]);
