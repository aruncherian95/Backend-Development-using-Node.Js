// const myTodos = ['Learn Code', 'Land in job', 'Learn everything']

// console.log(myTodos.indexOf('Learn Code'));


const newTodos = [{
    title : 'Learn Code',
    isDone : false,
},{
    title : 'Land in job',
    isDone : false,
},{
    title : 'Learn everything',
    isDone : false,
}]

// const index = newTodos.findIndex(function(todo, index){
//     console.log(todo);
//     return todo.title === 'Land in job'
// })

// console.log(index);

const findToDo = function(any, title){
    const index = any.findIndex(function(todo, index ){
        return todo.title.toLowerCase() === todo.title.toLowerCase()
    })
    return any[index]
}

let print = findToDo(newTodos,'Learn everything')
console.log(print);
