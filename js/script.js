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