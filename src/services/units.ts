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

export const getUnit = (
  { id, fields }: DocumentQueryParams,
  { signal }: QueryConfig
) =>
  api
    .get<DocumentResponse<Unit>>(`/units/${id}`, {
      params: {
        fields,
      },
      signal,
    })
    .then((result) => result.data.item);

export const getUnitCategories = (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Category>>(`/units/${id}/categories`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getUnitConcepts = (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Concept>>(`/units/${id}/concepts`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getUnitCorePersons = (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Person>>(`/units/${id}/core-persons`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getUnitCourses = (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Course>>(`/units/${id}/courses`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getUnitLectures = (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Lecture>>(`/units/${id}/lectures`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getUnitPersons = (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Person>>(`/units/${id}/persons`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getUnitPublications = (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Publication>>(`/units/${id}/publications`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getUnitUnits = (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Unit>>(`/units/${id}/units`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);
