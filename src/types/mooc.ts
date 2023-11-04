import { MetaData, Record } from "./base";

export type Mooc = MetaData & {
  _type: "mooc";
  name: Record;
  short_name: Record;
  group_name: Record;
  group_short_name: Record;
  platform: string | null;
  language: string;
  level: string | null;
  domain: string | null;
  teacher_school: string | null;
  epfl_school: string | null;
  short_description: string | null;
  full_description: string | null;
  course_url: string | null;
  thumbnail_image_url: string | null;
};
