describe('app', function(){
  it('should get home page title', function(){
    browser.get('/');
    expect(browser.getTitle()).toEqual('toDo');
  });

  it('has a todo', function(){
    browser.get('/');
    var todo = $('#todo');
    expect(todo.getText()).toEqual('ToDo1');
  });
});
