// Programmi dei corsi americani scritti per il sito, con i contenuti in Markdown sotto src/content-us/.
// Gli argomenti seguono i programmi usati negli Stati Uniti (per Physics I: OpenStax «University Physics
// Volume 1», unità Meccanica e Onde; la termodinamica resta al corso Thermal Physics).
// Un corso elencato qui prende le pagine di studio dalle collezioni *_us; gli altri restano sulle vecchie
// lezioni in `mathematics.mjs`, `physics.mjs` e simili finché non vengono riscritti.

export const PROGRAMMI = {
  'physics-1-mechanics': [
    { slug: 'units-measurement-and-vectors', titolo: 'Units, measurement and vectors', breve: 'Units and vectors' },
    { slug: 'motion-along-a-straight-line', titolo: 'Motion along a straight line', breve: 'Straight-line motion' },
    { slug: 'motion-in-two-and-three-dimensions', titolo: 'Motion in two and three dimensions', breve: 'Motion in a plane' },
    { slug: 'newtons-laws-of-motion', titolo: "Newton's laws of motion", breve: "Newton's laws" },
    { slug: 'applications-of-newtons-laws', titolo: "Applications of Newton's laws", breve: 'Friction and circular motion' },
    { slug: 'work-and-kinetic-energy', titolo: 'Work and kinetic energy', breve: 'Work and kinetic energy' },
    { slug: 'potential-energy-and-conservation-of-energy', titolo: 'Potential energy and conservation of energy', breve: 'Potential energy' },
    { slug: 'linear-momentum-and-collisions', titolo: 'Linear momentum and collisions', breve: 'Momentum and collisions' },
    { slug: 'fixed-axis-rotation', titolo: 'Fixed-axis rotation', breve: 'Rotation' },
    { slug: 'angular-momentum-and-rolling', titolo: 'Angular momentum and rolling', breve: 'Angular momentum' },
    { slug: 'static-equilibrium-and-elasticity', titolo: 'Static equilibrium and elasticity', breve: 'Static equilibrium' },
    { slug: 'gravitation', titolo: 'Gravitation', breve: 'Gravitation' },
    { slug: 'fluid-mechanics', titolo: 'Fluid mechanics', breve: 'Fluids' },
    { slug: 'oscillations-waves-and-sound', titolo: 'Oscillations, waves and sound', breve: 'Oscillations and waves' },
  ],
};

// Indirizzi delle sezioni di studio nella sezione americana: dentro il sito restano i nomi italiani
// (teoria, esercizi-svolti, esercizi, domande), negli indirizzi diventano inglesi.
export const SEZIONI_USA = {
  teoria: 'theory',
  'esercizi-svolti': 'worked-examples',
  esercizi: 'practice-problems',
  domande: 'timed-questions',
};

// Paragrafi di teoria visibili senza il corso, come nelle materie italiane.
export const PARAGRAFI_GRATIS = 2;

export const haProgramma = (slug) => Object.hasOwn(PROGRAMMI, slug);
export const programmaDi = (slug) => PROGRAMMI[slug] ?? [];
