import { risorsaTestOrientamento } from '../src/lib/orientamento-accesso.mjs';

const moduliRiservati = [
  '/src/scripts/orientamento.mjs',
  '/src/data/orientamento-studio.mjs',
  '/src/data/orientamento-universita.mjs',
  '/src/lib/orientamento-studio.mjs',
  '/src/lib/orientamento-universita.mjs',
];

// Il cambio di chunk del bundler non deve rendere pubbliche le banche dei test.
// La build si ferma prima della pubblicazione se cambia il confine protetto.
export default function verificaBundleOrientamento() {
  return {
    name: 'orientamento-bundle-riservato-gm',
    apply: 'build',
    applyToEnvironment(environment) { return environment.name === 'client'; },
    generateBundle(_options, bundle) {
      const trovati = new Set();
      for (const output of Object.values(bundle)) {
        if (output.type !== 'chunk') continue;
        const riservato = risorsaTestOrientamento(`/${output.fileName}`);
        for (const id of output.moduleIds ?? Object.keys(output.modules)) {
          const percorso = id.replaceAll('\\', '/').split('?')[0];
          const modulo = moduliRiservati.find((atteso) => percorso.endsWith(atteso));
          if (!modulo) continue;
          trovati.add(modulo);
          if (!riservato) this.error(`Orientamento GM: ${modulo} è finito nel file pubblico ${output.fileName}. Aggiornare la protezione prima di pubblicare.`);
        }
        if (!riservato && [...output.imports, ...output.dynamicImports].some((file) => risorsaTestOrientamento(`/${file}`))) {
          this.error(`Orientamento GM: il file pubblico ${output.fileName} importa un test riservato.`);
        }
      }
      const mancanti = moduliRiservati.filter((id) => !trovati.has(id));
      if (mancanti.length) this.error(`Orientamento GM: impossibile verificare i moduli ${mancanti.join(', ')}.`);
    },
  };
}
