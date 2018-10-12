$('.dropdownitem').click(function() {
    console.log('dropdownitem ' + $('#dropdownitem').text());
    $('#dropdowncontent').html($('#dropdownitem').html());
})