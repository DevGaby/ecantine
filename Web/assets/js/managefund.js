$(window).on("keypress", function(event) {
    if(event.which == 32)
    {
        console.log("input : " + $("#fundOperator option:selected").text());   
        //Find the li and set active
        $("nav>div>ul>li").each(function()
        {
            console.log("li name : " + this.innerText);
        });
    }
});

$(window).ready(function() {
    console.log("ready");
});

$(window).on("load", function() {
    console.log("load");

    //Find the li and set active
    $("nav>div>ul>li").each(function()
    {
        console.log("li name : " + this.innerText);
    });
});

$(window).on("focus", function() {
    console.log("o/");
});

$(window).on("blur", function() {
    console.log("o\\");
});

$(window).on("click", ".btnModify", function() {
    let parentcurrentFund = $(this).siblings()[1];
    let currentFund = parentcurrentFund.innerText;
    let parentInputs = $(this).siblings()[2];
    let inputFund = $(parentInputs).find("input:text").val();
    let inputOperator = $(parentInputs).find("#fundOperator option:selected").text();

    let newFund;
    switch(inputOperator)
    {
        case '+' :
            newFund = parseFloat(currentFund) + parseFloat(inputFund);
            $(parentcurrentFund).text(newFund.toString());
            break;
        case '-' :
            newFund = parseFloat(currentFund) - parseFloat(inputFund);
            if(newFund >= 0)
            {
                $(parentcurrentFund).text(newFund.toString());
            }
            else
            {
                alert("Not enough fund !");
            }
            break;
        default :
    }
});