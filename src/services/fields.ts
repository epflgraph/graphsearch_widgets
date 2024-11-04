import type { Category } from "@/types/category";
import type { Concept } from "@/types/concept";
import type { Course } from "@/types/course";
import type { Lecture } from "@/types/lecture";
import type { Mooc } from "@/types/mooc";
import type { Person } from "@/types/person";
import type { Publication } from "@/types/publication";
import type { Fields } from "@/types/request";
import type { Startup } from "@/types/startup";
import type { Unit } from "@/types/unit";

export const categoryFields: Fields<Category> = [
  "id",
  "url",
  "external_url",
  "name",
  "description_short",
  "description_long",
  "path",
  "taxonomy",
  "depth",
];

export const conceptFields: Fields<Concept> = [
  "id",
  "url",
  "external_url",
  "name",
  "description_short",
  "description_long",
];

export const courseFields: Fields<Course> = [
  "id",
  "url",
  "external_url",
  "name",
  "description_short",
  "description_long",
  "short_code",
  "moodle",
  "latest_academic_year",
];

export const lectureFields: Fields<Lecture> = [
  "id",
  "url",
  "external_url",
  "name",
  "description_short",
  "description_long",
  "video_stream_url",
  "video_poster_url",
  "video_duration",
  "video_is_available",
  "vtt",
  "available_start_date",
  "available_end_date",
  "is_restricted",
];
export const moocFields: Fields<Mooc> = [
  "id",
  "url",
  "external_url",
  "name",
  "description_short",
  "description_long",
  "domain",
  "language",
  "level",
  "platform",
  "thumbnail_image_url",
];

export const personFields: Fields<Person> = [
  "id",
  "url",
  "external_url",
  "name",
  "description_short",
  "description_long",
  "is_at_epfl",
];

export const publicationFields: Fields<Publication> = [
  "id",
  "url",
  "external_url",
  "name",
  "description_short",
  "description_long",
  "subtype",
  "year",
  "published_in",
  "publisher",
];

export const startupFields: Fields<Startup> = [
  "id",
  "url",
  "external_url",
  "name",
  "description_short",
  "description_long",
];

export const unitFields: Fields<Unit> = [
  "id",
  "url",
  "external_url",
  "name",
  "description_short",
  "description_long",
  "type",
  "subtype",
  "path",
  "is_active_unit",
];

export const relatedCategoriesFields: Fields<Category> = [
  "id",
  "url",
  "external_url",
  "name",
  "description_medium",
  "path",
];

export const relatedConceptsFields: Fields<Concept> = [
  "id",
  "url",
  "external_url",
  "name",
  "description_medium",
];

export const relatedCoursesFields: Fields<Course> = [
  "id",
  "external_url",
  "name",
  "description_medium",
  "short_code",
  "latest_academic_year",
];

export const relatedLecturesFields: Fields<Lecture> = [
  "id",
  "url",
  "external_url",
  "name",
  "description_medium",
  "video_stream_url",
  "video_poster_url",
  "video_duration",
  "video_is_available",
  "is_restricted",
  "vtt",
  "available_start_date",
  "available_end_date",
  "course",
  "mooc",
];

export const relatedMoocsFields: Fields<Mooc> = [
  "id",
  "url",
  "external_url",
  "name",
  "description_medium",
  "domain",
  "language",
  "level",
  "platform",
  "thumbnail_image_url",
];

export const relatedPersonsFields: Fields<Person> = [
  "id",
  "url",
  "external_url",
  "name",
  "description_medium",
];

export const relatedPublicationsFields: Fields<Publication> = [
  "id",
  "url",
  "external_url",
  "name",
  "description_medium",
  "year",
  "published_in",
  "publisher",
];

export const relatedStartupsFields: Fields<Startup> = [
  "id",
  "url",
  "external_url",
  "name",
  "description_medium",
];

export const relatedUnitsFields: Fields<Unit> = [
  "id",
  "url",
  "external_url",
  "name",
  "description_medium",
  "path",
];
