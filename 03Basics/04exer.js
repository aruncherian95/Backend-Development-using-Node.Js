const myTodos = []

myTodos.push("Learn code")
myTodos.push("Again learn code")
myTodos.push("Again learn codes")
myTodos.push("Again learn coding")

myTodos.forEach(function(todo,index) {
    console.log(`Your todo list is ${index + 1} is: ${todo}`);
    
})