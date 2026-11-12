// Approved copy is stored verbatim. This helper only applies typographic polish at render time:
// **bold** and *italic* markers become emphasis, and straight apostrophes become typographic ones.
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function rich(s: string): string {
  return esc(s)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[\s(])\*(.+?)\*(?=[\s).,!?]|$)/g, '$1<em>$2</em>')
    .replace(/(\w)'(\w)/g, '$1’$2')
    .replace(/(\w)'(\s|$)/g, '$1’$2');
}
export const plain = (s: string) => s.replace(/\*\*/g, '').replace(/(\w)'(\w)/g, '$1’$2');

// Applies typographic apostrophes to every piece of copy in a content object, so templates can print
// plain strings directly. Links, keys and other technical fields are left untouched.
const SKIP = new Set(['href', 'key', 'icon', 'accent', 'src', 'poster', 'id']);
const apos = (s: string) => s.replace(/(\w)'(\w)/g, '$1’$2').replace(/(\w)'(?=[\s.,!?]|$)/g, '$1’');
export function typeset<T>(value: T, key = ''): T {
  if (typeof value === 'string') return (SKIP.has(key) || /^(https?:|mailto:|tel:|\/|#)/.test(value) ? value : apos(value)) as T;
  if (Array.isArray(value)) return value.map((v) => typeset(v, key)) as T;
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, typeset(v, k)])) as T;
  return value;
}
