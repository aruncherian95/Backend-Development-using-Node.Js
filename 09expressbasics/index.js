const express = require("express");
const app = express();

app.get("/", (req,res) =>{
    res.send('Hello World');
    });

app.get("/about-us", (req,res)=>{
    res.send("<h1>Iam about page</h1>");
});   

//Type: GET
//ACCESS : Public
//@Description : creating a reges page for about us
app.get("/ab*cd", (req,res)=>{
    res.send("<h1>Iam regex page</h1>");
}); 

app.get("/user/:id/status/:status_id",(req,res)=>{
    res.send(req.params);
});

app.get("/flights/:from-:to",(req,res)=>{
    res.send(req.params);
});

app.get("/contactus",(req,res)=>{
    res.send("Contact us is here");
});

app.get("/services",(req,res)=>{
    res.send("<h1>services</h1><ul><li>service1</li><li>service2</li></ul>");
    
});

//Type: POST
//ACCESS : Public
//@Description : creating a reges page for about us
app.post('/login',()=>{
    res.send('login success')
});

//Type: DELETE
//ACCESS : Public
//@Description : creating a reges page for about us
app.delete("/about",(req,res)=>{
    res.send("About Route successfully deleted");
});




    app.listen(3000, ()=>console.log('Server is running at the port 3000....'));