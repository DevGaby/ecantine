$('#buttonsignin').click(function()
{
    console.log('button signin clicked');
    let inputEmail = $('#inputemail').val();
    let inputPassword = $('#inputpassword').val();
    if(!inputEmail)
    {
        console.log("email is empty");
    }
    if(!inputPassword)
    {
        console.log("password is password");
    }
});

$('#buttonsignup').click(function()
{
    console.log('button signup clicked');
});