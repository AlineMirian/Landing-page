document.addEventListener('DOMContentLoaded', function () {
   //document = representa o documento HTML carregado no navegador
   //addEventListener = usado para registrar uma função que será chamada sempre que o evento ('DOMContentLoaded') especificado é disparado.
   //evento 'DOMContentLoaded' é literalmente = quando a DOM (document = página html) for carregada
   const form = document.getElementById('conectar');
   //getElementById = captura no html tudo o que está contido no Id = conectar 

   form.addEventListener('submit', function (event) {
      //addEventListener = de novo, função que será chamada sempre que o evento ('submit') é disparada.
      //no html que o evento 'submit' é disparado no click do botão enviar
      event.preventDefault();

      const nome = document.getElementById('name').value; //getElementById = captura no html tudo o nalue (valor) que está contido no campo cujo Id = nome (é o id do input nome)
      const assunto = document.getElementById('assunto').value; //(é o id do input assunto)
      const mensagem = document.getElementById('mensagem').value; //(é o id do text area mensagem)
      const mailtoLink = `mailto:1aline9mirian9silveira6@gmail.com?subject=${encodeURIComponent(
         assunto,
      )}&body=${encodeURIComponent('Nome: ' + nome + '\n\n' + mensagem)}`;
      console.log('mailtoLink:', mailtoLink); //console para ver como está montando a mensagem
      window.location.href = mailtoLink; // window.location.href direciona para alguma janela, nesse caso, o endereço contido em mailtoLink
   });
});