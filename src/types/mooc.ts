import { MetaData, Types } from "./base";

type MOOCDomain =
  | "Basic Science"
  | "Environment"
  | "Life Science"
  | "Brain"
  | "Engineering"
  | "Urbanism"
  | "Computer Science"
  | "Business"
  | "Development"
  | "Misc"
  | "Water";

type MOOCLanguage = "English" | "French" | "German" | "Italian" | "Portuguese";

type MOOCLevel =
  | "Bachelor"
  | "Hors Programme"
  | "Master"
  | "Preparatory"
  | "Propedeutic";

type MOOCPlatform =
  | "coursera"
  | "courseraod"
  | "courseware"
  | "edx"
  | "edx edge"
  | "youtube";

export type Mooc = MetaData<Types.Mooc> & {
  domain: MOOCDomain | null;
  language: MOOCLanguage | null;
  level: MOOCLevel | null;
  platform: MOOCPlatform | null;
  thumbnail_image_url: URL | null;
};
