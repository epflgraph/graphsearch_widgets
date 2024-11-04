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

export const getCourse = (
  { id, fields }: DocumentQueryParams<Course>,
  { signal }: QueryConfig
) =>
  api
    .get<DocumentResponse<Course>>(`/courses/${id}`, {
      params: {
        fields,
      },
      signal,
    })
    .then((result) => result.data.item);

export const getCourseCategories = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Category>,
  { signal }: QueryConfig
) =>
  api
    .get<
      PagableResponse<{
        node: Category;
        edge: Pick<Category, "depth">;
      }>
    >(`/courses/${id}/categories`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getCourseConcepts = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Concept>,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponse<{ node: Concept }>>(`/courses/${id}/concepts`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getCourseCoreLectures = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Lecture>,
  { signal }: QueryConfig
) =>
  api
    .get<
      PagableResponse<{
        node: Lecture;
        edge: {
          academic_year: string | null;
          video_duration: number | null;
          video_stream_url: string | null;
        };
      }>
    >(`/courses/${id}/core-lectures`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getCourseCorePersons = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Person>,
  { signal }: QueryConfig
) =>
  api
    .get<
      PagableResponse<{
        node: Person;
        edge: Pick<Person, "is_at_epfl"> & {
          latest_academic_year: string | null;
        };
      }>
    >(`/courses/${id}/core-persons`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getCourseCourses = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Course>,
  { signal }: QueryConfig
) =>
  api
    .get<
      PagableResponse<{
        node: Course;
        edge: Pick<Course, "latest_academic_year">;
      }>
    >(`/courses/${id}/courses`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getCourseLectures = (
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
    >(`/courses/${id}/lectures`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getCourseMoocs = (
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
    >(`/courses/${id}/moocs`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getCoursePersons = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Person>,
  { signal }: QueryConfig
) =>
  api
    .get<
      PagableResponse<{
        node: Person;
        edge: Pick<Person, "is_at_epfl">;
      }>
    >(`/courses/${id}/persons`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getCoursePublications = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Publication>,
  { signal }: QueryConfig
) =>
  api
    .get<
      PagableResponse<{
        node: Publication;
        edge: Pick<Publication, "year" | "published_in" | "publisher">;
      }>
    >(`/courses/${id}/publications`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getCourseStartups = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Startup>,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponse<{ node: Startup }>>(`/courses/${id}/startups`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getCourseUnits = (
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
    >(`/courses/${id}/units`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);
