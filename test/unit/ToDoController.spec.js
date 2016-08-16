describe('ToDoController', function(){
  beforeEach(module('toDoApp'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('ToDoController');
  }));
});
