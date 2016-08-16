// an object that handles the 'heavy lifting' of construction is called a Factory
// builds models

toDoApp.factory('ToDoFactory', function(){
  var ToDo = function(todoText, completed){ // first, we declare the constructor for the model
    this.task = todoText;
    this.completed = (typeof completed !== 'undefined') ? completed: false;
  };

  ToDo.prototype.complete = function() { // Attach a new method to the Todo prototype
    this.completed = true;
  };
  return ToDo;
});
