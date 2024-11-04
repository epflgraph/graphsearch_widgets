import { MetaData, Types } from "./base";

export type Publication = MetaData<Types.Publication> & {
  year: number;
  published_in: string | null;
  publisher: string | null;
};
