
//console.log(document.getElementById("idone"));
//alert('File attached')


//const  myPElement = document.querySelector('p')
//console.log(myPElement);
//myPElement.textContent = "Iam being changed using js"

 const myPElement = document.querySelectorAll('p')
myPElement.forEach((p)=> p.textContent = "Im being changed using loop in js"
     //p.remove()
     )

const myNewPara = document.createElement('p')
myNewPara.textContent = 'This Element was added using JS'
document.querySelector('body').append(myNewPara)   


//track input form
document.querySelector('#myform').addEventListener('input',(event)=>{
    console.log(event.target.value);

})