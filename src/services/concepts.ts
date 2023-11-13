import { api } from "@/lib/axios";

import {
  DocumentQueryParams,
  DocumentResponse,
  PagableQueryParamsWithId,
  PagableResponseWithId,
  QueryConfig,
} from "@/types/base";
import { Category } from "@/types/category";
import { Concept } from "@/types/concept";
import { Course } from "@/types/course";
import { Lecture } from "@/types/lecture";
import { Person } from "@/types/person";
import { Publication } from "@/types/publication";
import { Unit } from "@/types/unit";

export const getConcept = (
  { id, fields }: DocumentQueryParams,
  { signal }: QueryConfig
) =>
  api
    .get<DocumentResponse<Concept>>(`/concepts/${id}`, {
      params: {
        fields,
      },
      signal,
    })
    .then((result) => result.data.item);

export const getConceptCategories = (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Category>>(`/concepts/${id}/categories`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getConceptConcepts = (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Concept>>(`/concepts/${id}/concepts`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getConceptCourses = (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Course>>(`/concepts/${id}/courses`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getConceptLectures = (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Lecture>>(`/concepts/${id}/lectures`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getConceptPersons = (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Person>>(`/concepts/${id}/persons`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getConceptPublications = (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Publication>>(`/concepts/${id}/publications`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getConceptUnits = (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Unit>>(`/concepts/${id}/units`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);
