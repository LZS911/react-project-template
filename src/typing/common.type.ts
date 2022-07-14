type DictionaryValue = string | number | boolean | Dictionary;
export interface Dictionary {
  [key: string]: DictionaryValue;
}
export interface StringDictionary {
  [key: string]: string;
}
export type I18nKey = string;
export type ModalState = {
  [key: string]: boolean;
};
