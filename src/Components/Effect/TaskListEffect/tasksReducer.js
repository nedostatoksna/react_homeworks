let nextId = 3;
const tasksReducer = (tasks, {type, payload}) => {

    switch (type) {
        case 'init': {
            return [ ...payload.todos ]
        }
        case 'added': {
            return [
                ...tasks,
                { ...payload.newTodo }
            ]
        }
        case 'deleted': {
            return tasks.filter((task) => task.id !== payload.taskId)
        }
        case 'checked': {
            return tasks.map((task) => {
                    if (task.id === payload.id) return {...task, done: task.done };
                    else return task;
                })
        }

        case 'titleChanged': {
            return tasks.map((task) => {
                    if (task.id === payload.id) return {...task, title: payload.title };
                    else return task;
                })
        }

        default: {
            throw Error("unknown action: " + type);
        };
    }
};

export { tasksReducer };