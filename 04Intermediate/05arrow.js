const todos= [{
    title : "Buy Bread",
    isDone : false
},
    {
        title : "Go to Gym",
        isDone : true
    },
    {
        title : "Learn Code",
        isDone : true
    },
    {
        title : "Wake up early",
        isDone : false
    },
    {
        title : "Sleep all day",
        isDone : true
    },
    {
        title : "Sleep Early",
        isDone : false
    }]

   
   
   
    const thingsNotDone= todos.filter( (todo) => todo.isDone === false)
    
    thingsNotDone.forEach((notDone)=>console.log(notDone.title))   


 

    
    //console.log(thingsNotDone);