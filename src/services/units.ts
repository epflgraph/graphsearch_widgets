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

export const getUnit = (
  { id, fields }: DocumentQueryParams<Unit>,
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
  { id, limit, offset, fields }: PagableQueryParamsWithId<Category>,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponse<{ node: Category; edge: Pick<Category, "depth"> }>>(
      `/units/${id}/categories`,
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

export const getUnitConcepts = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Concept>,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponse<{ node: Concept }>>(`/units/${id}/concepts`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getUnitCorePersons = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Person>,
  { signal }: QueryConfig
) =>
  api
    .get<
      PagableResponse<{
        node: Person;
        edge: Pick<Person, "is_at_epfl"> & {
          is_active_affiliation: boolean | null;
          current_position_rank: number | null;
        };
      }>
    >(`/units/${id}/core-persons`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getUnitCoreUnits = (
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
    >(`/units/${id}/core-units`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getUnitCourses = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Course>,
  { signal }: QueryConfig
) =>
  api
    .get<
      PagableResponse<{
        node: Course;
        edge: Pick<Course, "latest_academic_year">;
      }>
    >(`/units/${id}/courses`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getUnitLectures = (
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
    >(`/units/${id}/lectures`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getUnitMoocs = (
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
    >(`/units/${id}/moocs`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getUnitPersons = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Person>,
  { signal }: QueryConfig
) =>
  api
    .get<
      PagableResponse<{
        node: Person;
        edge: Pick<Person, "is_at_epfl"> & {
          is_active_affiliation: boolean | null;
          current_position_rank: number | null;
        };
      }>
    >(`/units/${id}/persons`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getUnitPublications = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Publication>,
  { signal }: QueryConfig
) =>
  api
    .get<
      PagableResponse<{
        node: Publication;
        edge: Pick<Publication, "year" | "published_in" | "publisher">;
      }>
    >(`/units/${id}/publications`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getUnitStartups = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Startup>,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponse<{ node: Startup }>>(`/units/${id}/startups`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getUnitUnits = (
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
    >(`/units/${id}/units`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);
