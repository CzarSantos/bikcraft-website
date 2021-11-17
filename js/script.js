/* Só faz se encontar o valor na pagina */

if(window.SimpleSlide){
//Inicia script do slide | SimleSlide é uma função
new SimpleSlide({
  slide: 'quote', // nome do atributo data-slide="principal"
  time: 5000 // tempo de transição dos slides
});


//Ativar slide portifolio
new SimpleSlide({
  slide: 'portifolio', 
  time: 5000, 
  nav:true
});

}



//-------------------------------------------------------------


//Verificação faz apeans se encontrar o valor
if(window.SimpleAnime){
//Inicia classe
new SimpleAnime();

}



if(window.SimpleForm){
//Inicia msg Formulario PHP
new SimpleForm({
  form: ".formphp", // seletor do formulário
  button: "#enviar", // seletor do botão
  erro: "<div id='form-erro'><h2>Erro ao enviar</h2><p>Um erro ocorreu, tente para o email contato@bikcraft.com.</p></div>", // mensagem de erro
  sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entro em contato com você.</p></div>", // mensagem de sucesso
});
}