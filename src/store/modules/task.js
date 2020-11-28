export default {
    actions: {
        async fetchTodos(ctx) {
           await fetch('http://jsonplaceholder.typicode.com/todos?_start=0&_limit=20')
                .then(response => response.json())
                .then(json => ctx.commit("updateTodos", json))
        },
        addTodo(ctx, newTodo){
            ctx.commit("addTodos", newTodo)
        },
    },
    mutations: {
        updateTodos(state, todos) {
            state.todos = todos
        },
        addTodos(state, todo) {
            state.todos.push(todo)
        }
    },
    state: {
      todos: []
    },
    getters: {
        getTodos(state) {
            return state.todos
        },
        todosCompletedCount(state) {
            return(state.todos.filter((x) => x.completed).length)
        },
        todosUncompletedCount(state) {
            return(state.todos.filter((x) => !x.completed).length)
        }
    },
}
