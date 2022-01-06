let btn = document.getElementById("btn")
btn.addEventListener("click",function(){
    let name = document.getElementById("name");
    if(name.value === '')
    {
        document.getElementById("name").innerHTML="please enter value";
    }
    else if(length("name")<6)
    {
        document.getElementById("name").innerHTML="please enter charaters above 6";
    }

    else
    {
        document.getElementById("name").innerHTML="";
    }
    if(pass.value === '')
    {
        document.getElementById("pass").innerHTML="please enter value";
    }
    else if(length("pass")<6)
    {
        document.getElementById("pass").innerHTML="please enter charaters above 6";
    }
    else
    {
        document.getElementById("pass").innerHTML="";
    }
    if(email.value === '')
    {
        document.getElementById("email").innerHTML="please enter value";
    }
    else
    {
        document.getElementById("email").innerHTML="";
    }
    if(number.value === '')
    {
        document.getElementById("number").innerHTML="please enter value";
    }
    else if(length("number")!=10)
    {
        document.getElementById("number").innerHTML="please enter 10 numbers";
    }
    else
    {
        document.getElementById("number").innerHTML="";
    }

})