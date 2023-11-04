export type Locale<T> = {
  en: T;
  fr: T;
};

export type Record = Locale<{
  is_auto_generated: boolean;
  is_auto_corrected: boolean;
  is_auto_translated: boolean;
  is_translated_from: boolean;
  value: string | null;
}>;

export type MetaData = {
  _id: string;
  _external_key: Locale<string | null>;
  _external_url: Locale<string | null>;
  _type: string;
  _url: string;
  _description_small: Record;
  _description_medium: Record;
  _description_large: Record;
};

export type Type =
  | "category"
  | "concept"
  | "course"
  | "lecture"
  | "mooc"
  | "person"
  | "publication"
  | "unit";

export type PagableQueryParams = {
  fields?: string | string[];
  limit: number;
  offset: number;
};

export type PagableQueryParamsWithId = PagableQueryParams & {
  id: string;
};

export type DocumentQueryParams = {
  id: string;
  fields?: string | string[];
};

export type PagableResponse<T> = {
  items: Array<T>;
  query: PagableQueryParams;
  result_count: number;
};

export type PagableResponseWithId<T> = {
  items: Array<T>;
  query: PagableQueryParamsWithId;
  result_count: number;
};

export type DocumentResponse<T> = {
  item: T;
  query: DocumentQueryParams;
};

export type DocumentProps = {
  id: string;
  locale: string;
  signal: AbortSignal;
};

export type PagablePropsWithId = DocumentProps & {
  limit: string;
  offset: string;
};
