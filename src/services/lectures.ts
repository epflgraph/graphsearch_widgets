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

export const getLecture = (
  { id, fields }: DocumentQueryParams,
  { signal }: QueryConfig
) =>
  api
    .get<DocumentResponse<Lecture>>(`/lectures/${id}`, {
      params: {
        fields,
      },
      signal,
    })
    .then((result) => result.data.item);

export const getLectureCategories = (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Category>>(`/lectures/${id}/categories`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getLectureConcepts = (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Concept>>(`/lectures/${id}/concepts`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getLectureCoreCourses = (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Course>>(`/lectures/${id}/core-courses`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getLectureCorePersons = (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Person>>(`/lectures/${id}/core-persons`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getLectureCourses = (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Course>>(`/lectures/${id}/courses`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getLectureLectures = (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Lecture>>(`/lectures/${id}/lectures`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getLecturePersons = (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Person>>(`/lectures/${id}/persons`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getLecturePublications = (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Publication>>(`/lectures/${id}/publications`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getLectureUnits = (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Unit>>(`/lectures/${id}/units`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);
