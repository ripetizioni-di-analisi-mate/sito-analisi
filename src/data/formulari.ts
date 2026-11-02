// Formulari gratuiti (richiesta di Carmine del 02/11/2026): una pagina per materia, indicizzata,
// e il PDF scaricabile con un account gratuito (il Worker controlla l'accesso a /pdf/formulari/<materia>.pdf).
// Contenuti in src/content/formulari/<materia>.md (brief: istruzioni-agenti/brief-formulari.md).
export const FORMULARI = ['precorso', 'analisi-1', 'analisi-2'] as const;
export const pdfFormulario = (materia: string) => `/pdf/formulari/${materia}.pdf`;
