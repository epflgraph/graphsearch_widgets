import { api } from "@/lib/axios";

import type {
  DocumentProps,
  DocumentResponse,
  PagablePropsWithId,
  PagableResponseWithId,
} from "./../types/base";
import type { Concept } from "./../types/concept";
import type { Person } from "./../types/person";

export const getPerson = ({ id, signal }: DocumentProps) =>
  api
    .get<DocumentResponse<Person>>(`persons/${id}`, {
      signal,
      params: {
        fields: `_id,name_display`,
      },
    })
    .then((result) => result.data.item);

export const getPersonConcepts = ({
  id,
  locale,
  limit,
  offset,
  signal,
}: PagablePropsWithId) =>
  api
    .get<PagableResponseWithId<Concept>>(`persons/${id}/concepts`, {
      signal,
      params: {
        limit,
        offset,
        fields: `_id,_description_large.${locale}.value,name.${locale}.value`,
      },
    })
    .then((result) => result.data);
