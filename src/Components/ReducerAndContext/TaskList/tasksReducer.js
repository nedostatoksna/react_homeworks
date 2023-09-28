let nextId = 3;
const tasksReducer = (tasks, {type, payload}) => {

    switch (type) {
        case 'added': {
            return [
                ...tasks,
                { id: nextId++, text: payload.text, done: false }
            ]
        }
        case 'deleted': {
            return tasks.filter((task) => task.id !== payload.taskId)
        }
        case 'checked': {
            return tasks.map((task) => {
                    if (task.id === payload.id) return {...task, done: !task.done };
                    else return task;
                })
        }

        case 'titleChanged': {
            return tasks.map((task) => {
                    if (task.id === payload.id) return {...task, text: payload.title };
                    else return task;
                })
        }

        default: {
            throw Error("unknown action: " + type);
        };
    }
};

export { tasksReducer };