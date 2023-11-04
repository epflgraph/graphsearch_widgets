import { api } from "@/lib/axios";

import type {
  DocumentProps,
  DocumentResponse,
  PagablePropsWithId,
  PagableResponseWithId,
} from "./../types/base";
import type { Concept } from "./../types/concept";
import type { Publication } from "./../types/publication";

export const getPublication = ({ id, signal }: DocumentProps) =>
  api
    .get<DocumentResponse<Publication>>(`publications/${id}`, {
      signal,
      params: {
        fields: `_id,title`,
      },
    })
    .then((result) => result.data.item);

export const getPublicationConcepts = ({
  id,
  locale,
  limit,
  offset,
  signal,
}: PagablePropsWithId) =>
  api
    .get<PagableResponseWithId<Concept>>(`publications/${id}/concepts`, {
      signal,
      params: {
        limit,
        offset,
        fields: `_id,_description_large.${locale}.value,name.${locale}.value`,
      },
    })
    .then((result) => result.data);
