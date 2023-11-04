import { Locale, MetaData, Record } from "./base";

export type Unit = MetaData & {
  _type: "unit";
  name: Record;
  numeric_id: number | null;
  initials: string | null;
  type: Locale<string | null>;
  date_established: Date | null;
  date_terminated: Date | null;
  path: {
    _id: string;
    _type: string;
    _url: string;
    initials: string;
  }[];
};
