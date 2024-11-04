import { Locale, MetaData, Types } from "./base";
import { Concept } from "./concept";
import { Course } from "./course";
import { Mooc } from "./mooc";

export type Lecture = MetaData<Types.Lecture> & {
  video_stream_url: string | null;
  video_poster_url: string | null;
  video_duration: number | null;
  video_is_available: boolean;
  available_start_date: Date | null;
  available_end_date: Date | null;
  is_restricted: boolean;
  vtt: Locale<string | null>;
  course: Pick<
    Course,
    | "type"
    | "url"
    | "moodle"
    | "latest_academic_year"
    | "id"
    | "external_url"
    | "created"
    | "updated"
    | "subtype"
    | "short_code"
    | "name"
  > | null;
  mooc: Pick<
    Mooc,
    | "type"
    | "url"
    | "domain"
    | "language"
    | "level"
    | "platform"
    | "thumbnail_image_url"
    | "id"
    | "url"
    | "external_url"
    | "created"
    | "updated"
    | "subtype"
    | "short_code"
    | "name"
  >;
};

export type LectureConcept = {
  node: Concept;
  edge: {
    timestamps: number[];
  };
};
