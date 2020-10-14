//alert('connected')   
function myvalidation(){
    let myValue = document.getElementById('myform').value;
    
    if (isNaN(myValue) || myValue < 1 || myValue > 20) {
        document.querySelector('p').textContent='Content changed'
        //console.log("Not a valid input");
        
    }else{
        console.log("Input accepted");
    }
}

//form validation in nxt video

document.querySelector(".myform").addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.realname.value);
    event.target.username.value='';
    event.target.realname.value='';

})


//passcheck assignment

function passcheck(){
    
    let passvalue=document.getElementById('pass').value;
    let repassvalue=document.getElementById('repass').value;
    
    if( passvalue == repassvalue ) {
        //console.log('Matches');
        const myNewP = document.createElement('p')
        myNewP.textContent = 'Password Matches'
        document.querySelector('body').append(myNewP) 

    }else{
        // console.log("Dont match");
        const myNewP = document.createElement('p')
        myNewP.textContent = 'Password dont Match'
        document.querySelector('body').append(myNewP) 
    }


}

