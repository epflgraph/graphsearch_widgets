type Params = {
  locale: string;
};

export const concept = ({ locale }: Params) =>
  [
    "_id",
    "_url",
    `_description_large.${locale}.value`,
    `name.${locale}.value`,
  ].toString();

export const course = ({ locale }: Params) =>
  [
    "_id",
    "_url",
    "course_code",
    `name.${locale}.value`,
    `summary.${locale}.value`,
  ].toString();

export const lecture = ({ locale }: Params) =>
  ["_id", "_url", "video"].toString();

export const person = ({ locale }: Params) =>
  ["_id", "_url", "name_display", `biography.${locale}`].toString();

export const publication = ({ locale }: Params) =>
  [
    "_id",
    "_url",
    "title",
    `type.${locale}`,
    "publisher",
    "published_in",
    "year",
    "abstract",
  ].toString();

export const unit = ({ locale }: Params) =>
  ["_id", "_url", `name.${locale}.value`, "path"].toString();
