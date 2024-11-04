import type { Locale, Record } from "@/types/base";

export const localeRecord = ({
  locale,
  record,
}: {
  locale: "fr" | "en";
  record: Record;
}) =>
  record[locale].value
    ? record[locale]
    : record.en.value
    ? record.en // fallback to english
    : record.fr; // fallback to french;

export const localeValue = ({
  locale,
  value,
}: {
  locale: "fr" | "en";
  value?: Locale<string | null> | null;
}) => value && (value[locale] ? value[locale] : value.en ? value.en : value.fr);
