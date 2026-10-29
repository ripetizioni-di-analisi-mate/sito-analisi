// Come rehype-katex, ma ogni formula resa conserva il proprio sorgente LaTeX in data-tex:
// serve all'assistente di studio per leggere le formule della pagina.
import { fromHtmlIsomorphic } from 'hast-util-from-html-isomorphic';
import { toText } from 'hast-util-to-text';
import katex from 'katex';
import { SKIP, visitParents } from 'unist-util-visit-parents';

export default function rehypeKatexTex(opzioni = {}) {
  return (tree, file) => {
    visitParents(tree, 'element', (element, parents) => {
      const classi = Array.isArray(element.properties.className) ? element.properties.className : [];
      const languageMath = classi.includes('language-math');
      const display = classi.includes('math-display');
      if (!languageMath && !display && !classi.includes('math-inline')) return;
      let parent = parents[parents.length - 1];
      let scope = element;
      let displayMode = display;
      if (element.tagName === 'code' && languageMath && parent?.type === 'element' && parent.tagName === 'pre') {
        scope = parent; parent = parents[parents.length - 2]; displayMode = true;
      }
      if (!parent) return;
      const tex = toText(scope, { whitespace: 'pre' });
      let html;
      try {
        html = katex.renderToString(tex, { ...opzioni, displayMode, throwOnError: true });
      } catch (e) {
        file.message('Could not render math with KaTeX', { place: element.position, source: 'rehype-katex' });
        html = katex.renderToString(tex, { ...opzioni, displayMode, strict: 'ignore', throwOnError: false });
      }
      const risultato = fromHtmlIsomorphic(html, { fragment: true }).children;
      const primo = risultato.find((n) => n.type === 'element');
      if (primo) primo.properties.dataTex = tex.trim();
      parent.children.splice(parent.children.indexOf(scope), 1, ...risultato);
      return SKIP;
    });
  };
}
