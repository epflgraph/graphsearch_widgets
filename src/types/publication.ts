import { Locale, MetaData } from "./base";

export type Publication = MetaData & {
  _type: "publication";
  title: string | null;
  type: Locale<string | null>;
  publisher: string | null;
  published_in: string | null;
  year: number | null;
  abstract: string | null;
};
