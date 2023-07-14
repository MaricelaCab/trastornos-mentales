var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});

typewriter
  .pauseFor(1500)
  .typeString('<strong> ¡Hola! </strong> Soy una tesista de Neurociencias incursionando en la programación')
  .pauseFor(300)
 // .deleteChars(10)
  .typeString('<strong> JS, HTML y CSS</strong> principalmente')
  .typeString('<strong> por el momento soy <span style="color: pink;"> AFICIONADA</strong>')
  .pauseFor(1000)
  .start();