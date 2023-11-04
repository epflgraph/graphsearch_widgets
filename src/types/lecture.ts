import { MetaData } from "./base";
import { Course } from "./course";

export type Lecture = MetaData & {
  _type: "lecture";
  video: {
    id: string;
    url: string;
    embed_url: string;
    stream_url: string | null;
    title: string;
    subtitle: string | null;
  };
  creation_date_title: Date;
  creation_date_content: Date;
  creation_timestamp: number;
  requires_login: boolean;
  course: Course | null;
};
