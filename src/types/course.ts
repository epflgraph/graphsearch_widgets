import { MetaData, Record } from "./base";

export type Course = MetaData & {
  _type: "course";
  name: Record;
  summary: Record;
  others: Record;
  content: Record;
  keywords: Record;
  required_courses_ind: Record;
  required_courses_obl: Record;
  concepts_to_master: Record;
  teaching_method: Record;
  expected_work: Record;
  evaluation_method: Record;
  bibliography: Record;
  handouts: Record;
  note: Record;
  prepares_for_courses: Record;
  course_code: string;
  section_code: string;
};
