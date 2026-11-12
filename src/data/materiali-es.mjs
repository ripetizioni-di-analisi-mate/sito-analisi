// Per ogni capitolo, le risorse pubblicate con il proprio indirizzo spagnolo.
export const MATERIALI_ES = {
  'analisi-1/insiemi': { svolti: [1, 2, 3], esercizi: [1, 2, 3, 4, 5, 6, 7, 8], domande: true },
};

export const PERCORSI_STUDIO_ES = Object.entries(MATERIALI_ES).flatMap(([capitolo, risorse]) => [
  '/' + capitolo + '/teoria',
  ...(risorse.svolti.length ? ['/' + capitolo + '/esercizi-svolti', ...risorse.svolti.map((n) => '/' + capitolo + '/esercizi-svolti/' + n)] : []),
  ...(risorse.esercizi.length ? ['/' + capitolo + '/esercizi', ...risorse.esercizi.map((n) => '/' + capitolo + '/esercizi/' + n)] : []),
  ...(risorse.domande ? ['/' + capitolo + '/domande'] : []),
]);
