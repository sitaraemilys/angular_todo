// Use a service to connect to an application
// like Factories. Services are designed to be singletons: there exists only one of them in an application. So, there is only one ToDoService in our entire application, and we can use it from wherever we like

toDoApp.service('ToDoService', ['$http', 'ToDoFactory', function($http, ToDoFactory){ // use the Angular module $http to fetch data from the API, inject it into our service & inject Factory

  this.getAll = function(){
    var todos = [];
    _fetchToDosFromApi(todos);
    return todos; // return the todos array we constructed
  };

  function _fetchToDosFromApi(todos){
    $http.get('http://quiet-beach-24792.herokuapp.com/todos.json') // URL will be url/resources.json to follow RESTful conventions
    .then(function(response){ // a Promise: it won't execute until the .get() method returns a value.
      _handleResponseFromApi(response.data, todos);
  }, function(err) {});
}

function _handleResponseFromApi(data, todos) {
  data.forEach(function(data){ // iterate through the JSON objects
    todos.push(new ToDoFactory(data.text, data.completed)); // construct a new Todo from each JSON object, pushing them to the todos array
  });
}

}]);
