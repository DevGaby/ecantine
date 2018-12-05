$('#notificationemail').slideUp();
$('#notificationpassword').slideUp();

$('#hrefpasswordforgotten').hide();

$('#buttonsignin').click(function()
{
    console.log('button signin clicked');
    
    if($('#inputemail').val())
    {
        $('#notificationtemail').slideUp();  
        
        $('#hrefpasswordforgotten').show();
    }
    else
    {
        $('#notificationtemail').slideDown();

        $('#hrefpasswordforgotten').hide();
    }

    if($('#inputpassword').val())
    {
        $('#notificationpassword').slideUp();
    }
    else
    {        
        $('#notificationpassword').slideDown();
    }
});

$('#buttonsignup').click(function()
{
    console.log('button signup clicked');
});