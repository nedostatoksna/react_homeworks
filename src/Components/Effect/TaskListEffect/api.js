const url = "https://jsonplaceholder.typicode.com";
const userId = 1;

const getTodos = async function() {
  try {
    const responce = await fetch(`${url}/todos?_limit=5`);
    const todos = await responce.json();
    return todos;
  } catch (error) {
    console.log("ОШИБКА: ", error.message);
    return [];
  }
};

const updateTodo = async function(todo) {
  try {
    const responce = await fetch(`${url}/todos/${todo.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: todo.id,
        title: todo.title,
        completed: todo.completed,
        userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    const updTodo = await responce.json();
    return { updStatus: responce.ok, updTodo };
  } catch (error) {
    console.log("ОШИБКА: ", error.message);
    return {...todo};     
  }
};

const deleteTodo = async function(id) {
    try {
      const responce = await fetch(`${url}/todos/${id}`, {
        method: 'DELETE',
      })
      return responce.ok;
    } catch (error) {
      console.log("ОШИБКА: ", error.message);
      return false;     
    }
  };

  const addTodo = async function(title) {
    try {
      const responce = await fetch(`${url}/todos`, {
        method: 'POST',
        body: JSON.stringify({
          title,
          completed: false,
          userId,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const newTodo = await responce.json();
      return { addStatus: responce.ok, newTodo };
    } catch (error) {
      console.log("ОШИБКА: ", error.message);
      return {addStatus: false};     
    }
  };

export {getTodos, updateTodo, deleteTodo, addTodo};