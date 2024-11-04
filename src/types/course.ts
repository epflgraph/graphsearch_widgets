import { MetaData, Types } from "./base";

export type Course = MetaData<Types.Course> & {
  moodle: string;
  latest_academic_year: string | null;
};
