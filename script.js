const lines = [
  { text: "Hey! Hellooooo :3", duration: 3000 },
  { text: "", duration: 550 },
  { text: "Bueno, si ya estás aquí, supongo que estás lista, así que... Ven conmigo un rato, vamos a relajarnos un poco, si?", duration: 6000 },
  { text: "", duration: 550 },
  { text: "He preparado este ambiente bonito para ti, es que...", duration: 6000 },
  { text: "", duration: 550 },
  { text: "Se que todos estos días has estado esforzándote mucho, tanto en cosas de la uni, como en tu trabajo e incluso en casa...", duration: 6000 },
  { text: "", duration: 550 },
  { text: "Lo has hecho en verdad muy bien, cada día das lo mejor de ti y lo haces excelente...", duration: 7500 },
  { text: "", duration: 100 },
  { text: "...y déjame decirte que estoy orgulloso de ti💙", duration: 6500 },
  { text: "Así que, un pequeño momento de relajación no te vendría nada mal, no crees? ;3 hehehe", duration: 6000 },
  { text: "...", duration: 3200 },
  { text: "Escuchas esa bonita melodía de fondo? Es para ti :3 yo mismo la toqué, con mucho cariño para ti...", duration: 7000 },
  { text: 'Se llama "Until we meet again"', duration: 3600 },
  { text: "", duration: 300 },
  { text: "Te la dedico :3💙", duration: 5000 },
  { text: "", duration: 300 },
  { text: "...", duration: 3500 },
  { text: 'Hey :3 Recuerdas que hace un tiempo mencioné que pensaras en esos "secretitos" que ibas descubriendo, como si fueran piezas de un rompecabezas?', duration: 7000 },
  { text: "Pues, para que entiendas, mi plan siempre fue este :3 no hacerte un simple programa... Sino algo más que eso...", duration: 5200 },
  { text: "Como este es el primer regalo de cumpleaños que te doy (seguramente de muchos que ya vendrán ;3), pues quería que fuera algo bastante especial💙", duration: 7500 },
  { text: 'Las "piezas del rompecabezas"... Eran básicamente los fragmentos de tu regalo, que los fui construyendo poquito a poquito, con mucho cariño :3', duration: 7500 },
  { text: "", duration: 400 },
  { text: "Precisamente por eso era un rompecabezas, porque las piezas poco a poco iban a ir encajando... ", duration: 5800 },
  { text: "", duration: 400 },
  { text: "... hasta formar esto que estás recibiendo mediante este link🫶🏻", duration: 6500 },
  { text: "", duration: 400 },
  { text: "Créeme que, más que hacer el código o cualquier cosa, para mí fue bastante difícil ocultar la emoción que sentía cuando me iba quedando bien cada detalle...", duration: 7500 },
  { text: "", duration: 400 },
  { text: "En especial la melodía :3💙", duration: 2800 },
  { text: "", duration: 500 },
  { text: "Porque, nada más de pensar en la carita de felicidad que pondrías (y seguramente debes tener ahora mismo mientras lees esto y escuchas tu melodía de regalo ;3)... Hehe", duration: 7500 },
  { text: "", duration: 500 },
  { text: "Creo que eso fue inspiración suficiente para mi💙", duration: 6500 },
  { text: "Escucha, en este tiempo que llevamos hablando, compartiendo y todo eso, en verdad te has vuelto una personita muy importante para mi", duration: 6000 },
  { text: "Tú y yo nos llevamos excelente. Siento una conexión muy bonita contigo ", duration: 5200 },
  { text: "Y honestamente, me gustaría seguir conociendo más de ti. Aceptas mi propuesta?💙", duration: 6500 },
  /*confirm("¿Aceptas mi propuesta?💙")*/
];

const fadeMs = 800; // debe coincidir con 'transition' en CSS
const el = document.getElementById('lyric');
let lyricTimeout = null;
let fadeTimeout = null;
let currentLineIndex = 0;

const followUpConfirmLines = [
  { text: "SI ACEPTASTE? 🥹 SIIIIII", duration: 4000 },
  { text: "*Le da un abrazo del tamaño de Júpiter*🫂💙", duration: 5000 },
  { text: "Heh, de verdad estoy feliz por tu respuesta... A decir verdad, me sorprendiste 🫂", duration: 6000 },
  { text: "Siendo sincero, si quiero conocerte mucho mejor :3 compartir más contigo, ver más de quién eres...", duration: 6000 },
  { text: "Incluso salir a hacer algo, idk, ir al cine o cualquier plan que se te ocurra ;3 me gustaría pasar un poco más de tiempo contigo las veces que podamos", duration: 6000 },
  { text: "Claro, siempre y cuándo a ti te agrade la idea ;3", duration: 5000 },
  { text: "Te confieso que tú me pareces una chica en verdad increíble e interesante ;3 (aunque en realidad ya desde hace tiempo te he venido demostrando que eso pienso de ti, pero igual te lo confieso ;3)", duration: 8000 },
  { text: "Así que, ahora que se tu respuesta, supongo que ahora puedo seguir haciéndote más preguntas para conocer más de ti, no? ;3💙", duration: 7000 },
  { text: "Y obviamente, para que sea justo, también te permitiré lo mismo! Te contaré más sobre mi e incluso te contaré algunas cositas que no suelo decir mucho :3", duration: 7000 },
  { text: "Bien ;3 ya que leíste todo esto... Pues no me queda mucho más que decir! Espero que pases/hayas pasado un muy feliz cumpleaños y...", duration: 8000 },
  { text: "Que vengan muchos años más de vida, salud, exitos y muchas cosas bonitas para ti! Porque honestamente, tú te mereces todo lo bonito🫶🏻💙", duration: 7000 },
  { text: "Te quiero muchísimo💙 Byeeeee :3", duration: 180000 },
  { text: "What? Are you still here...?", duration: 4000 },
  { text: "If it's so... Then I guess you should know you're really something special for me", duration: 8000 },
  { text: "Maybe you'll know more about that very soon <3", duration: 8000 },
  { text: "See you next friday, *Queen* ;3<3", duration: 8000 },
];

const followUpCancelLines = [
  { text: "Heh ;3 primero que nada, tú tranquila, sabes que comprendo perfectamente", duration: 4000 },
  { text: "Y además respeto tu decisión ;3", duration: 4000 },
  { text: "De hecho, es por esa misma razón que me cohibí de seguir haciéndote tantas preguntas, no quería que te sintieras incómoda o algo así ", duration: 4000 },
  { text: "Así que, preferí simplemente preguntarte, precisamente para evitar eso, y creo que fue lo correcto ;3", duration: 4000 },
  { text: "Igual no te preocupes ;3 no cambia en absoluto lo que pienso de ti o lo que tú significas para mí, vale?🫂", duration: 4000 },
  { text: "Bien ;3 ya que leíste todo esto... Pues no me queda mucho más que decir! Espero que pases/hayas pasado un muy feliz cumpleaños y...", duration: 4000 },
  { text: "Que vengan muchos años más de vida, salud, exitos y muchas cosas bonitas para ti! Porque honestamente, tú te mereces todo lo bonito💙", duration: 4000 },
  { text: "Tqm :3💙 Byeeee", duration: 180000 },
  { text: "Yep, ya puedes quitar esto ;3 solo dale al botón :3", duration: 20000 },
  { text: "Por qué no le quieres dar al botón? XD", duration: 8000 },
  { text: "Bueno, si quieres, puedo esperar un poco más ;3", duration: 8000 },
  { text: "", duration: 240000 }
];

function clearLyricsTimers() {
  clearTimeout(lyricTimeout);
  clearTimeout(fadeTimeout);
  lyricTimeout = null;
  fadeTimeout = null;
}

function showBranchLines(branchLines, startIndex = 0) {
  const idx = startIndex;
  const { text, duration } = branchLines[idx];
  currentLineIndex = idx;
  el.textContent = text;
  requestAnimationFrame(() => el.classList.add('visible'));

  fadeTimeout = setTimeout(() => {
    el.classList.remove('visible');
    if (idx + 1 < branchLines.length) {
      lyricTimeout = setTimeout(() => showBranchLines(branchLines, idx + 1), fadeMs);
    } else {
      lyricTimeout = setTimeout(() => {
        el.classList.remove('visible');
        el.textContent = '';
      }, fadeMs);
    }
  }, duration);
}

function showLine(idx) {
  currentLineIndex = idx;
  const { text, duration } = lines[idx];
  el.textContent = text;
  // forzar frame para que la transición funcione correctamente
  requestAnimationFrame(() => el.classList.add('visible'));

  fadeTimeout = setTimeout(() => {
    el.classList.remove('visible'); // comienza fade out
    if (idx === lines.length - 1) {
      lyricTimeout = setTimeout(() => {
        const answer = confirm('¿Aceptas mi propuesta?💙');
        const branchLines = answer ? followUpConfirmLines : followUpCancelLines;
        showBranchLines(branchLines);
      }, fadeMs);
    } else {
      lyricTimeout = setTimeout(() => showLine(idx + 1), fadeMs);
    }
  }, duration);
}
let started = false;
document.querySelector('#botonM3').addEventListener('click', () => {
  if (!started) {
    started = true;
    clearLyricsTimers();
    showLine(0);
  }
});
document.querySelector('#boton3').addEventListener('click', () => {
  // Devolvemos todas las lyrics al inicio y paramos la canción
  started = false;
  clearLyricsTimers();
  currentLineIndex = 0;
  el.classList.remove('visible');
  el.textContent = '';
});

// Crea estrellas aleatorias dentro de .container (inserta .stars antes de .waves si no existe)
(function(){
  const container = document.querySelector('.container');
  if(!container) return;

  let starsContainer = container.querySelector('.stars');
  if(!starsContainer){
    starsContainer = document.createElement('div');
    starsContainer.className = 'stars';
    const waves = container.querySelector('.waves');
    container.insertBefore(starsContainer, waves || null);
  }

  const MAX_STARS = 120;
  let count = 0;

  function createStar(){
    if(count >= MAX_STARS) return;
    const s = document.createElement('div');
    s.className = 'star';
    const size = (Math.random() * 2) + 1; // 1-3px
    s.style.width = s.style.height = size + 'px';
    s.style.left = (Math.random() * 100) + '%';
    s.style.top = (Math.random() * 100) + '%';
    const dur = 1200 + Math.random() * 3800; // 1.2s - 5s
    const delay = Math.random() * 1500;
    s.style.animation = `twinkle ${dur}ms ease-in-out ${delay}ms forwards`;
    starsContainer.appendChild(s);
    count++;
    setTimeout(()=>{
      s.remove();
      count--;
    }, dur + delay + 50);
  }

  // poblar inicialmente
  for(let i=0;i<25;i++) createStar();

  // generar continuamente (al azar, pequeños "pulsos")
  setInterval(()=>{
    const burst = Math.random() < 0.6 ? 1 : Math.floor(Math.random()*3)+1;
    for(let i=0;i<burst;i++) createStar();
  }, 250);
})();