// Verification que les champs sont remplis
    $('#empty').hide;
    let listOk =[];
    if(localStorage.getItem('list'))
    {
        listOk = JSON.parse(localStorage.getItem('list'));
    }
    else
    {
        listOk =[];
    }


// Affichage des infos dans un tableau
    function showReponse()
    {
        $('#reponse').empty;
        for (let i=0; i<listOk.length; i++)
        {
            $('#reponse').append('ul class="list-group-item ">'+ listOk + i + '</ul>');
        }
        localStorage.setItem('nom',JSON.stringify(listOk));
    };

// Action du bouton valider
    $('#btnOk').click(function()
    {
        console.log("Bonjour");
        let nom =$('#nom').val();
        if(nom.length>0)
        {
            nom.push(listOk);
            console.log(nom);
            showReponse();

        }
       
    }
    );
   