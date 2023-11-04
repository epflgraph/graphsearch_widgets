import { MetaData, Record } from "./base";

export type Category = MetaData & {
  _type: "category";
  depth: 1 | 2 | 3 | 4 | 5;
  name: Record;
};
