import { PagableQueryParams, PagableQueryParamsWithId } from "./request";

export type PagableResponse<T> = {
  items: Array<T>;
  query: PagableQueryParams<Node> | PagableQueryParamsWithId<Node>;
  result_count: number;
  is_restricted?: boolean;
};

export type DocumentResponse<Node> = {
  item: Node;
  query: PagableQueryParamsWithId<Node>;
};
