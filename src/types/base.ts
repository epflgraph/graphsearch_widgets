export type Locale<T> = {
  en: T;
  fr: T;
};

export type Record = Locale<{
  is_auto_generated: boolean;
  is_auto_corrected: boolean;
  is_auto_translated: boolean;
  is_translated_from: string | null;
  value: string | null;
}>;

type Profile = {
  id: string;
  external_url: Locale<string | null>;
  created: Date;
  updated: Date | null;
  name: Record;
  description_short: Record;
  description_medium: Record;
  description_long: Record;
  subtype: Locale<string | null>;
  short_code: string | null;
};

export enum Types {
  Category = "category",
  Concept = "concept",
  Course = "course",
  Lecture = "lecture",
  Mooc = "mooc",
  Person = "person",
  Publication = "publication",
  Startup = "startup",
  Unit = "unit",
}

export type MetaData<Type extends Types> = Profile & {
  type: Type;
  url: string;
};

export type QueryConfig = {
  signal: AbortSignal;
};
