import { derived, writable } from "svelte/store";
import translations from "./translations.const";

export const locale = writable("br");
export const locales = Object.keys(translations);

type Translations = typeof translations;
type Locale = keyof Translations;
type TranslationKey<L extends Locale> = keyof Translations[L];
type Vars = Record<string, string>;

function translate<L extends Locale>(
  locale: L,
  key: TranslationKey<L>,
  vars: Vars = {}
) {
  if (!key) throw new Error("no key provided to $t()");
  if (!locale) throw new Error(`no translation for key "${String(key)}"`);

  let text: string = translations[locale][key] as string;

  if (!text) throw new Error(`no translation found for ${locale}.${String(key)}`);

  // Replace any passed in variables in the translation string.
  Object.keys(vars).map((k) => {
    const regex = new RegExp(`{{${k}}}`, "g");
    text = text.replace(regex, vars[k]);
  });

  return text;
}

export const t = derived(locale, ($locale) => (key: string, vars = {}) =>
  translate($locale as Locale, key as any, vars)
);
