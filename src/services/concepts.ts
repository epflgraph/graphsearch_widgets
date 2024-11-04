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

export const getConcept = (
  { id, fields }: DocumentQueryParams<Concept>,
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
  { id, limit, offset, fields }: PagableQueryParamsWithId<Category>,
  { signal }: QueryConfig
) =>
  api
    .get<
      PagableResponse<{
        node: Category;
        edge: Pick<Category, "depth">;
      }>
    >(`/concepts/${id}/categories`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getConceptCoreCategories = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Category>,
  { signal }: QueryConfig
) =>
  api
    .get<
      PagableResponse<{
        node: Category;
        edge: Pick<Category, "depth">;
      }>
    >(`/concepts/${id}/core-categories`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getConceptConcepts = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Concept>,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponse<{ node: Concept }>>(`/concepts/${id}/concepts`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getConceptCourses = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Course>,
  { signal }: QueryConfig
) =>
  api
    .get<
      PagableResponse<{
        node: Course;
        edge: Pick<Course, "latest_academic_year">;
      }>
    >(`/concepts/${id}/courses`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getConceptLectures = (
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
    >(`/concepts/${id}/lectures`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getConceptMoocs = (
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
    >(`/concepts/${id}/moocs`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getConceptPersons = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Person>,
  { signal }: QueryConfig
) =>
  api
    .get<
      PagableResponse<{
        node: Person;
        edge: Pick<Person, "is_at_epfl">;
      }>
    >(`/concepts/${id}/persons`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getConceptPublications = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Publication>,
  { signal }: QueryConfig
) =>
  api
    .get<
      PagableResponse<{
        node: Publication;
        edge: Pick<Publication, "year" | "published_in" | "publisher">;
      }>
    >(`/concepts/${id}/publications`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getConceptStartups = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Startup>,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponse<{ node: Startup }>>(`/concepts/${id}/startups`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getConceptUnits = (
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
    >(`/concepts/${id}/units`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);
