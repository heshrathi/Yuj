function valid()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    
    if(username=="admin" && password=="user")
    {
        alert("Login Sucessfully");
        window.open('.html');
        return false;
    }
    if(username=="naman@gmail.com" && password=="123")
    {
        alert("Login Sucessfully");
        window.open('Home.html');
        return false;
    }
    else
    {
        alert("Login Failed");
        
        return false;
    }
}