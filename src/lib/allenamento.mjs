// Nomi comuni a indice, pagine, ricerca e anteprime dei link.
// Il gruppo italiano e quello tradotto identificano lo stesso percorso scolastico.
export function nomiAllenamento(materia, lingua = 'it') {
  const en = lingua === 'en';
  if (materia?.slug === 'tolc-i') return { ripasso: en ? 'TOLC-I practice' : 'Allenamento TOLC-I', simulazione: en ? 'TOLC-I simulation' : 'Simulazione TOLC-I' };
  if (materia?.gruppo === 'Superiori' || materia?.gruppo === 'High school') {
    return {
      ripasso: en ? 'Class test simulations' : 'Simulazioni di verifiche',
      simulazione: en ? 'Class test simulation' : 'Simulazione di verifica',
    };
  }
  if (materia?.slug?.endsWith('-semestre-filtro')) {
    return {
      ripasso: en ? 'Practice and review' : 'Allenamento e ripasso',
      simulazione: en ? 'Exercise practice' : 'Allenamento con esercizi',
    };
  }
  return {
    ripasso: en ? 'Exam practice' : "Prove d'esame",
    simulazione: en ? 'Exam simulation' : materia?.gruppo === 'Concorsi' ? 'Simulazione della prova' : "Simulazione d'esame",
  };
}
