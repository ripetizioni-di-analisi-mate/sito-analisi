// Nome da mostrare in testata quando lo studente non l'ha scritto: si ricava dall'email.
// "carminetornincasa98@…" → "Carmine", "giulia.rossi@…" → "Giulia".
// Si cerca il nome di persona italiano più lungo con cui comincia la prima parte dell'indirizzo.
const NOMI = `
adele adriana adriano agata agnese agostino alba alberto alda alessandra alessandro alessia alessio alfonso alfredo alice alma
amalia ambra amedeo amelia andrea angela angelica angelo anita anna annalisa annamaria antonella antonietta antonino antonio
arianna armando arturo asia assunta aurora azzurra barbara beatrice benedetta benedetto bernardo bianca bruno camilla carla carlo
carlotta carmela carmelo carmen carmine carolina caterina cecilia cesare chiara christian cinzia ciro clara claudia claudio clelia
concetta corrado cosimo costanza cristian cristiana cristina damiano daniela daniele dario davide debora denise diana diego
dino domenico donato edoardo elena eleonora elia elisa elisabetta emanuela emanuele emilia emiliano emilio emma enrica enrico
enzo erica erika ermanno ernesto ester eugenio eva fabiana fabio fabrizio federica federico felice ferdinando fernando filippo
fiorella flavia flavio francesca francesco franco gabriele gabriella gaetano gaia gerardo giacomo gianluca gianluigi gianmarco
gianni gilda gina gino gioele giorgia giorgio giovanna giovanni gioia giada giulia giuliana giuliano giulio giuseppe giuseppina
gloria graziella greta guido ilaria irene iris isabella italo ivan jacopo laura lavinia lea lelio leonardo letizia lia liliana
linda lino lisa livia lorena lorenzo loredana luana luca lucia luciana luciano lucio ludovica luigi luisa maddalena manuel manuela
manuele marcello marco margherita maria mariangela marianna mariano marika marina marino mario marisa marta martina massimo matilde
matteo mattia maurizio mauro melissa michela michele miriam mirko monica nadia natalia nicola nicole nicolò noemi norma oscar
ottavio pamela paola paolo pasquale patrizia patrizio pierluigi piero pietro pina pio raffaele raffaella regina renato riccardo
rita roberta roberto rocco romano rosa rosalba rosaria rosario rossana rossella ruggero sabrina salvatore samuele sandra sandro
sara serena sergio silvana silvia silvio simona simone sofia sonia stefania stefano susanna tania teresa tiziana tiziano tommaso
ugo umberto valentina valentino valeria valerio vanessa vincenzo viola violetta virginia vittoria vittorio walter
`.trim().split(/\s+/).sort((a, b) => b.length - a.length);

const maiuscola = (x) => (x ? x[0].toUpperCase() + x.slice(1) : x);

export function nomeDallEmail(email) {
  const locale = String(email || '').split('@')[0].toLowerCase();
  const prima = locale.split(/[._\-+0-9]+/).find(Boolean) || '';
  const trovato = NOMI.find((n) => prima.startsWith(n));
  // Nessun nome riconosciuto ("mrossi", "xk7"): meglio nessun nome che uno inventato.
  return trovato ? maiuscola(trovato) : null;
}
