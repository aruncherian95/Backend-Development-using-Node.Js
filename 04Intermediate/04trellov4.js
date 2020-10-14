// const myTodos = ['Learn Code', 'Land in job', 'Learn everything']

// console.log(myTodos.indexOf('Learn Code'));


const newTodos = [{
    title : 'Learn Code',
    isDone : false,
    
},
{
    title : 'Land in job',
    isDone : true,
    
},
{
    title : 'Learn everything',
    isDone : true,
    
}]


// const index = newTodos.findIndex(function(todo, index){
//     console.log(todo);
//     return todo.title === 'Learn everything'
// })
// console.log(index);



//Method1-findeIndex()


const findToDo = function(myTodos, title){
  
    const index = myTodos.findIndex(function(todo, index){
    return todo.title === title
       //return index
    })
   
    return myTodos[index]
    return index
}
//var a=
console.log(findToDo(newTodos,"Learn everything"));




//Method2- find()

// const findToDo = function(myTodos, title){
//     const titleReturned = myTodos.find(function(todo, index){
//         return todo.title.toLowerCase() === title.toLowerCase()
//     })
//     return titleReturned
// }
// let print = findToDo(newTodos,'Learn everything')
// console.log(print);
