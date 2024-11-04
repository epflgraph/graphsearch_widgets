import { Locale, Types } from "./base";

type Item = {
  id: string;
  type: `${Types}`;
  url: string;
  highlight?: {
    name: Locale<string | null>;
    long_description: Locale<string | null>;
  };
  name: Locale<string | null>;
  short_description?: Locale<string | null>;
  parent?: Item;
  depth?: number;
};

export type Params = {
  limit: number;
  q: string;
  types?: (`${Types}` | "any")[] | `${Types}` | "any";
};

export type Response = {
  query: Params;
  items: Item[];
  item: Item | null;
};
