import { Locale, MetaData, Record } from "./base";

export type Concept = MetaData & {
  _type: "concept";
  name: Record;
  full_content_html: Record;
  full_content_no_markup: Record;
  page_id: Locale<number>;
  degree_score: number;
  is_ontology_category: boolean;
  is_ontology_concept: boolean;
  score_epfl_concept: number;
  is_person: boolean;
  is_company: boolean;
};
