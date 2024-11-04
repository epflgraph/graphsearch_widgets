import { MetaData, Types } from "./base";

type _Unit = MetaData<Types.Unit> & {
  is_active_unit: boolean;
  is_research_unit: boolean;
  subtype_rank: number;
};

export type Unit = _Unit & {
  path: Array<
    Pick<
      _Unit,
      | "id"
      | "type"
      | "url"
      | "is_active_unit"
      | "is_research_unit"
      | "subtype_rank"
    >
  >;
};
