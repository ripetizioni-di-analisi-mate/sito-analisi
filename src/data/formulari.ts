// Formulari gratuiti (richiesta di Carmine del 02/11/2026; Fisica 1 dal 09/11/2026): una pagina per materia, indicizzata,
// e il PDF scaricabile con un account gratuito (il Worker controlla l'accesso a /pdf/formulari/<materia>.pdf).
// Contenuti in src/content/formulari/<materia>.md (brief: istruzioni-agenti/brief-formulari.md).
// Dal 03/11/2026 anche in inglese: src/content-en/formulari/<materia>.md, pagine /en/formulari/<materia>,
// PDF in public/pdf/formulari/en/<materia>.pdf (stesse regole di accesso).
export const FORMULARI = ['precorso', 'analisi-1', 'analisi-2', 'fisica-1'] as const;
export const pdfFormulario = (materia: string, lingua: 'it' | 'en' = 'it') => (lingua === 'en' ? `/pdf/formulari/en/${materia}.pdf` : `/pdf/formulari/${materia}.pdf`);
