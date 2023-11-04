import { Locale, MetaData } from "./base";

export type Person = MetaData & {
  _type: "person";
  sciper: number | null;
  name_last: string | null;
  name_first: string | null;
  name_display: string | null;
  email: string | null;
  biography: Locale<string | null>;
  gender: Locale<string | null>;
};
