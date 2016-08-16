// We want to store multiple things in our application, and to display multiple things on a page. To do that, we need something that can track the state of the application (like we need @instance_variables to store the state of a Ruby object). So you set up an Angular Controller and use it to keep track of the state of your application.

// 1. Get the root module (toDoApp), which is equal to angular.module('toDoApp', [])
// 2. Use the controller method on this root module to attach a controller module
// 3. Name the controller module ToDoController
// 4. Set up the controller in a callback provided to the controller() method.

toDoApp.controller('ToDoController', ['ToDoService', 'ToDoFactory', function(ToDoService, ToDoFactory){ //  Inject the ToDoFactory & ToDoService by passing it as a string and as the first element of an array. This array is the callback to .controller(). The function() { // controller code } is then the second element of this array.

  var self = this; // this is very context-dependent, avoid referencing one meaning of this within a different scope

  self.todos = ToDoService.getAll(); // Add an attribute: The state is a string, equal to "ToDo1";

  self.addToDo = function(toDoText){
    self.todos.push(new ToDoFactory(toDoText)); // use a Factory to construct an object
  };

  self.removeToDo = function() {
    self.todos.pop();
  };
}]);
