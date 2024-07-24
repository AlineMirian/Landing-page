document.addEventListener('DOMContentLoaded', function() { 
    //document = representa o documento HTML carregado no navegador
    //addEventListener = usado para registrar uma função que será chamada sempre que o evento ('DOMContentLoaded') especificado é disparado.
    //evento 'DOMContentLoaded' é literalmente = quando a DOM (document = página html) for carregada
    const form = document.getElementById('conectar');
     //getElementById = captura no html tudo o que está contido no Id = conectar (olha lá no html, esse é o id do formulário - tag <form> )

    form.addEventListener('submit', function(event) {
        //addEventListener = de novo, função que será chamada sempre que o evento ('submit') é disparada. 
        //Olha no html que o evento 'submit' é disparado no click do botão enviar
        event.preventDefault();

        const nome = document.getElementById('name').value; //getElementById = captura no html tudo o nalue (valor) que está contido no campo cujo Id = nome (olha lá no html, esse é o id do input nome)
        const assunto = document.getElementById('assunto').value; //getElementById = captura no html o valor contido no input cujo Id = assunto (olha lá no html, esse é o id do input assunto)
        const mensagem = document.getElementById('mensagem').value; //getElementById = captura no html o valor contido no input cujo Id = mensagem (olha lá no html, esse é o id do text area mensagem)

        const mailtoLink = mailto:1aline9mirian9silveira6@gmail.com?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent('Nome: ' + nome + '\n\n' + mensagem)};

         // console.log('oi' + nome + assunto + mensagem) //esse console vc descomnta se quiser ver o que é capturado em cada campo ao clicar no botão enviar

        console.log('mailtoLink:', mailtoLink); //console pra vc ver como está montando a mensagem

        window.location.href = mailtoLink; // window.location.href vai te direcionar para alguma janela, nesse caso, o endereço contido em mailtoLink
    });
});