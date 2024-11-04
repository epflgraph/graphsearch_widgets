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

export const getLecture = (
  { id, fields }: DocumentQueryParams<Lecture>,
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
  { id, limit, offset, fields }: PagableQueryParamsWithId<Category>,
  { signal }: QueryConfig
) =>
  api
    .get<
      PagableResponse<{
        node: Category;
        edge: Pick<Category, "depth">;
      }>
    >(`/lectures/${id}/categories`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getLectureConcepts = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Concept>,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponse<{ node: Concept }>>(`/lectures/${id}/concepts`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getLectureCoreConcepts = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Concept>,
  { signal }: QueryConfig
) =>
  api
    .get<
      PagableResponse<{
        node: Concept;
        edge: {
          timestamps: number[];
        };
      }>
    >(`/lectures/${id}/core-concepts`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getLectureCoreCourses = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Course>,
  { signal }: QueryConfig
) =>
  api
    .get<
      PagableResponse<{
        node: Course;
        edge: {
          academic_year: string | null;
          video_duration: number | null;
          video_stream_url: string | null;
        };
      }>
    >(`/lectures/${id}/core-courses`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getLectureCoreMoocs = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Mooc>,
  { signal }: QueryConfig
) =>
  api
    .get<
      PagableResponse<{
        node: Mooc;
        edge: Pick<Mooc, "domain" | "language" | "level" | "platform">;
      }>
    >(`/lectures/${id}/core-moocs`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getLectureCorePersons = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Person>,
  { signal }: QueryConfig
) =>
  api
    .get<
      PagableResponse<{
        node: Person;
        edge: Pick<Person, "is_at_epfl"> & {
          latest_academic_year: string;
          teaching_formats: "Course" | "MOOC" | "CourseAndMOOC";
        };
      }>
    >(`/lectures/${id}/core-persons`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getLectureCourses = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Course>,
  { signal }: QueryConfig
) =>
  api
    .get<
      PagableResponse<{
        node: Course;
        edge: Pick<Course, "latest_academic_year">;
      }>
    >(`/lectures/${id}/courses`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getLectureLectures = (
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
    >(`/lectures/${id}/lectures`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getLectureMoocs = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Mooc>,
  { signal }: QueryConfig
) =>
  api
    .get<
      PagableResponse<{
        node: Mooc;
        edge: Pick<Mooc, "domain" | "language" | "level" | "platform">;
      }>
    >(`/lectures/${id}/moocs`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getLecturePersons = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Person>,
  { signal }: QueryConfig
) =>
  api
    .get<
      PagableResponse<{
        node: Person;
        edge: Pick<Person, "is_at_epfl">;
      }>
    >(`/lectures/${id}/persons`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getLecturePublications = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Publication>,
  { signal }: QueryConfig
) =>
  api
    .get<
      PagableResponse<{
        node: Publication;
        edge: Pick<Publication, "year" | "published_in" | "publisher">;
      }>
    >(`/lectures/${id}/publications`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getLectureStartups = (
  { id, limit, offset, fields }: PagableQueryParamsWithId<Startup>,
  { signal }: QueryConfig
) =>
  api
    .get<PagableResponse<{ node: Startup }>>(`/lectures/${id}/startups`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);

export const getLectureUnits = (
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
    >(`/lectures/${id}/units`, {
      params: {
        fields,
        limit,
        offset,
      },
      signal,
    })
    .then((result) => result.data);
