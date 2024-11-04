import { api } from "@/lib/axios";

import { QueryConfig } from "@/types/base";
import { Category } from "@/types/category";
import { Concept } from "@/types/concept";
import { Course } from "@/types/course";
import { Lecture } from "@/types/lecture";
import { Mooc } from "@/types/mooc";
import { Person } from "@/types/person";
import { Publication } from "@/types/publication";
import { DocumentQueryParams, PagableQueryParamsWithId } from "@/types/request";
import { DocumentResponse, PagableResponse } from "@/types/response";
import { Startup } from "@/types/startup";
import { Unit } from "@/types/unit";

export const getPerson = (
  { id, fields }: DocumentQueryParams<Person>,
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
  { id, limit, offset, fields }: PagableQueryParamsWithId<Category>,
  { signal }: QueryConfig
) =>
  api
    .get<
      PagableResponse<{
        node: Category;
        edge: Pick<Category, "depth">;
      }>
    >(`/persons/${id}/categories`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getPersonConcepts = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Concept>,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponse<{ node: Concept }>>(`/persons/${id}/concepts`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getPersonCoreCourses = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Course>,
  { signal }: QueryConfig
) =>
  api
    .get<
      PagableResponse<{
        node: Course;
        edge: Pick<Course, "latest_academic_year">;
      }>
    >(`/persons/${id}/core-courses`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getPersonCoreMoocs = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Mooc>,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponse<{ node: Mooc }>>(`/persons/${id}/core-moocs`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getPersonCorePublications = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Publication>,
  { signal }: QueryConfig
) =>
  api
    .get<
      PagableResponse<{
        node: Publication;
        edge: Pick<Publication, "year" | "published_in" | "publisher">;
      }>
    >(`/persons/${id}/core-publications`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getPersonCoreUnits = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Unit>,
  { signal }: QueryConfig
) =>
  api
    .get<
      PagableResponse<{
        node: Unit;
        edge: Pick<
          Unit,
          "is_active_unit" | "is_research_unit" | "subtype_rank"
        >;
      }>
    >(`/persons/${id}/core-units`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getPersonCourses = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Course>,
  { signal }: QueryConfig
) =>
  api
    .get<
      PagableResponse<{
        node: Course;
        edge: Pick<Course, "latest_academic_year">;
      }>
    >(`/persons/${id}/courses`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getPersonLectures = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Lecture>,
  { signal }: QueryConfig
) =>
  api
    .get<
      PagableResponse<{
        node: Lecture;
        edge: {
          video_duration: number | null;
          video_stream_url: string | null;
        };
      }>
    >(`/persons/${id}/lectures`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getPersonMoocs = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Mooc>,
  { signal }: QueryConfig
) =>
  api
    .get<
      PagableResponse<{
        node: Mooc;
        edge: Pick<
          Mooc,
          "domain" | "language" | "level" | "platform" | "thumbnail_image_url"
        >;
      }>
    >(`/persons/${id}/moocs`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getPersonPersons = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Person>,
  { signal }: QueryConfig
) =>
  api
    .get<
      PagableResponse<{
        node: Person;
        edge: Pick<Person, "is_at_epfl">;
      }>
    >(`/persons/${id}/persons`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getPersonPublications = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Publication>,
  { signal }: QueryConfig
) =>
  api
    .get<
      PagableResponse<{
        node: Publication;
        edge: Pick<Publication, "year" | "published_in" | "publisher">;
      }>
    >(`/persons/${id}/publications`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getPersonStartups = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Startup>,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponse<{ node: Startup }>>(`/persons/${id}/startups`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getPersonUnits = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Unit>,
  { signal }: QueryConfig
) =>
  api
    .get<
      PagableResponse<{
        node: Unit;
        edge: Pick<
          Unit,
          "is_active_unit" | "is_research_unit" | "subtype_rank"
        >;
      }>
    >(`/persons/${id}/units`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);
