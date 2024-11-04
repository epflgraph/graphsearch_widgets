import { MetaData, Types } from "./base";

export type Person = MetaData<Types.Person> & {
  is_at_epfl: boolean;
};
