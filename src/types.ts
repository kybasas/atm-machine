export type NumberCardType = string;

export type NumberAccountType = string;

export type CurrencyType = "dollars" | "rubles";

export type FieldsAccountType = "balance" | "isBlocked" | "cards" | "number";

export type FieldsByWorkWithAccountType =
  | "addToBalance"
  | "subtractFromBalance";


export interface CardInterface {
  number: NumberAccountType
}

export interface BillInterface {
  denomination: number
  currency: CurrencyType
}
