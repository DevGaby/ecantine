$(document).ready(function(){
    $(document).on("keypress", function(event) {
        if(event.which == 32)
        {
            console.log("input : " + $("#fundOperator option:selected").text());
        }
    });
});

$(document).on("click", ".btnModify", function() {
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