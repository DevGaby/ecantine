

// console.log($('#prenom').val());
// console.log($('#mail').val());
// console.log($('#password').val());





// Creation de la liste de recup d'infos
    $('#empty').hide;
    let listOk =[];
    if(localStorage.getItem('reponse'))
    {
        listOk = JSON.parse(localStorage.getItem('reponse'));
    }
    else
    {
        listOk =[];
    }


// Affichage des infos de la liste de recup
    function showReponse()
    {
        $('#reponse').empty;
        for (let i=0; i<listOk.length; i++)
        {
            $('#reponse').append('<li class="list-group-item">'+ listOk[i] + '</li>');
        }
        localStorage.setItem('nom',JSON.stringify(listOk));
    };

// Action du bouton valider
    $('#btnOk').click(function(event)
    {
        event.preventDefault();
        let nom =$('#nom').val();
        //console.log(nom);
        listOk.push(nom);
        //console.log(listOk);

        let prenom =$('#prenom').val();
        listOk.push(prenom);
        //console.log(listOk);

        let mail =$('#mail').val();
        listOk.push(mail);
        //console.log(listOk);

        let password =$('#password').val();
        listOk.push(password);
        console.log(listOk);

        showReponse();

    }
    );
   