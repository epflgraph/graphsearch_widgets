// This utility type is used to get all the keys of an object and its nested objects.
// ie: const fields = Keys<SomeType> = ['foo', 'bar.zaz'];

type Field<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any
    ? never
    : K extends string
    ? T[K] extends Array<infer U>
      ? U extends object
        ? K | `${K}.${Field<U>}`
        : K
      : T[K] extends object
      ? K | `${K}.${Field<T[K]>}`
      : K
    : never;
}[keyof T];

export type Fields<T> = Field<T>[];

export type PagableQueryParams<T> = {
  fields?: Field<T>[];
  limit: number;
  offset: number;
};

export type PagableQueryParamsWithId<T> = PagableQueryParams<T> & {
  id: string;
};

export type DocumentQueryParams<T> = {
  id: string;
  fields?: Fields<T>;
};
