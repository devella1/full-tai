// taiScriptLanguage.js
import { StreamLanguage } from "@codemirror/language";
import { styleTags, tags as t } from "@lezer/highlight";
import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";
import { LanguageSupport } from "@codemirror/language";
import { autocompletion, completeFromList } from "@codemirror/autocomplete";

/* -------------
 * 1 The Stream Parser
 * --------------
 * This object tells CodeMirror how to tokenize TaiScript code:
 *   - We detect comments (lines starting with `;`)
 *   - Strings between double quotes
 *   - Numbers
 *   - Keywords (like yojna, shuru, band, parichay, etc.)
 *   - Everything else is treated as a variable or plain text
 */

const taiScriptParser = {
  // Called at the start of the document
  startState() {
    return { inString: false };
  },

  token(stream, state) {
    // 1. If we’re inside a string, try to consume until closing quote
    if (state.inString) {
      if (stream.skipTo('"')) {
        // We found the ending quote => consume it
        stream.next(); // Eat the quote
        state.inString = false;
      } else {
        // No closing quote found on this line, consume rest of line
        stream.skipToEnd();
      }
      return "string";
    }

    // 2. Check for line comment => starts with ";"
    if (stream.match(/^#/)) {
      stream.skipToEnd();
      return "comment";
    }

    // 3. Check for string start
    if (stream.match(/^"/)) {
      state.inString = true;
      return "string";
    }

    // 4. Check for numbers
    if (stream.match(/^[0-9]+(\.[0-9]+)?/)) {
      return "number";
    }

    // 5. Check for multi-word constructs (like `yojna shuru`)
    //    We'll treat them as separate tokens, but we can do it in a simple way:
    //    * If we see "yojna" or "ginti", we might peek the next token to see "shuru/band/caro" etc.
    //    For simplicity, we’ll just match single tokens and rely on a set of recognized keywords.

    // 6. Check for single token keywords
    if (stream.match(keywordRegex)) {
      return "keyword";
    }

    // 7. If none matched, consume one character or a chunk of non-space
    //    and mark it as “variableName” or just plain
    if (stream.match(/^[a-zA-Z_]\w*/)) {
      // Possibly treat all identifiers that aren't keywords as variables
      return "variableName";
    }

    // 8. If none of the above rules match, eat 1 character
    stream.next();
    return null; // no highlight
  }
};

// Our recognized keywords in TaiScript, from the doc
const taiScriptKeywords = [
  "yojna", "shuru", "band", "parichay", "ghoos", "lo",
  "likho", "pucho", "ghoshna", "lagatar",
  "ginti", "karo", "se", "tak", "badhao", "ghatao",
  "agar", "warna",
  "file", "kholo", "aur", "naam", "do",
  "me", "jodo", "guna", "bhag", "shesh",
  // A few more from doc (like "band karo", but we keep them as single tokens)
  "band", "karo", // repeated, but it's safe
];

// Build a RegExp that matches any of them as a separate token
const keywordRegex = new RegExp(
  `^(${taiScriptKeywords.map(k => k.replace(/\s+/g, "\\s+")).join("|")})\\b`,
  "i"
);

// Create the StreamLanguage
export const taiScriptStream = StreamLanguage.define(taiScriptParser);

/** -------------
 * 2) Highlight Style
 * --------------
 * Define how to style each token type. You can adjust colors as desired.
 */
export const taiScriptHighlightStyle = HighlightStyle.define([
  { tag: t.keyword,       color: "#c678dd", fontWeight: "bold" },
  { tag: t.variableName,  color: "#e06c75" },
  { tag: t.comment,       color: "#5c6370", fontStyle: "italic" },
  { tag: t.string,        color: "#98c379" },
  { tag: t.number,        color: "#d19a66" },
]);


const taiScriptCompletions = completeFromList(
  taiScriptKeywords.map(kw => ({
    label: kw,
    type: "keyword",     // helps style them with the default completion styles
    // apply: "...",     // optional: custom insertion logic
    // info: "Extra info for a tooltip" // optional
  }))
);

/** -------------
 * 3) Export a convenient “LanguageSupport” extension
 * --------------
 * This bundles the parser + highlight style so you can just
 * use `taiScript()` in your editor config.
 */
export function taiScript() {
  return new LanguageSupport(
    taiScriptStream,
    [
      syntaxHighlighting(taiScriptHighlightStyle),
      autocompletion({ override: [taiScriptCompletions] })
    ]
  );
}