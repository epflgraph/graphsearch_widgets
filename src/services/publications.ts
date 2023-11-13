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

export const getPublication = (
  { id, fields }: DocumentQueryParams,
  { signal }: QueryConfig
) =>
  api
    .get<DocumentResponse<Publication>>(`/publications/${id}`, {
      params: {
        fields,
      },
      signal,
    })
    .then((result) => result.data.item);

export const getPublicationCategories = (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Category>>(`/publications/${id}/categories`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getPublicationConcepts = (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Concept>>(`/publications/${id}/concepts`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getPublicationCorePersons = (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Person>>(`/publications/${id}/core-persons`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getPublicationCourses = async (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Course>>(`/publications/${id}/courses`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getPublicationLectures = async (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Lecture>>(`/publications/${id}/lectures`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getPublicationPersons = async (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Person>>(`/publications/${id}/persons`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getPublicationPublications = async (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Publication>>(
      `/publications/${id}/publications`,
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

export const getPublicationUnits = async (
  { id, fields, limit, offset }: PagableQueryParamsWithId,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponseWithId<Unit>>(`/publications/${id}/units`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);
