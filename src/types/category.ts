import { MetaData, Types } from "./base";

export type Category = MetaData<Types.Category> & {
  depth: 0 | 1 | 2 | 3 | 4 | 5;
  taxonomy: Array<
    MetaData<Types.Category> & {
      depth: 0 | 1 | 2 | 3 | 4 | 5;
    }
  >;
  path: Array<MetaData<Types.Category>>;
};
