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

export const getPerson = (
  { id, fields }: DocumentQueryParams,
  { signal }: QueryConfig
) =>
  api
    .get<DocumentResponse<Person>>(`/persons/${id}`, {
      params: {
        fields,
      },
      signal,
    })
    .then((result) => result.data.item);

export const getPersonCategories = (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Category>>(`/persons/${id}/categories`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getPersonConcepts = (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Concept>>(`/persons/${id}/concepts`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getPersonCoreCourses = (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Course>>(`/persons/${id}/core-courses`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getPersonCoreLectures = (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Lecture>>(`/persons/${id}/core-lectures`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getPersonCorePublications = (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Publication>>(
      `/persons/${id}/core-publications`,
      {
        params: {
          fields,
          limit,
          offset,
        },
        signal,
      }
    )
    .then((result) => result.data);

export const getPersonCoreUnits = (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Unit>>(`/persons/${id}/core-units`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getPersonCourses = (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Course>>(`/persons/${id}/courses`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getPersonLectures = (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Lecture>>(`/persons/${id}/lectures`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getPersonPersons = (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Person>>(`/persons/${id}/persons`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getPersonPublications = (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Publication>>(`/persons/${id}/publications`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getPersonUnits = (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Unit>>(`/persons/${id}/units`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);
