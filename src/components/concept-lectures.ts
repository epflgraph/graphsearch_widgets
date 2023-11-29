import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { localized, msg } from "@lit/localize";
import { Task } from "@lit/task";

import get from "lodash/get";

import { getConcept, getConceptLectures } from "@/services/concepts";

import { concept, lecture } from "@/fields";

import "@/components/base/error";
import "@/components/base/lecture";
import "@/components/base/loading";
import "@/components/base/no-results";
import { Root } from "@/components/base/root";
import "@/components/base/section";
import "@/components/base/sectionLink";
import "@/components/base/sectionTitle";

import { Lecture } from "@/types/lecture";

@localized()
@customElement("graph-widget-concept-lectures")
export class ConceptLectures extends Root {
  @property({ type: String })
  "concept-id" = "";

  @property({ type: String })
  limit = "3";

  @property({ type: String })
  offset = "0";

  private _getConceptLectures = new Task(this, {
    task: async ([id, locale, limit, offset], { signal }) =>
      Promise.all([
        getConcept({ id, fields: concept({ locale }) }, { signal }),
        getConceptLectures(
          {
            id,
            fields: lecture({ locale }),
            limit: Number(limit),
            offset: Number(offset),
          },
          { signal }
        ),
      ]),
    args: () => [this["concept-id"], this.locale, this.limit, this.offset],
  });

  render() {
    return this._getConceptLectures.render({
      pending: () =>
        html`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,
      error: (error) => html`<graph-widget-error>${error}</graph-widget-error>`,
      complete: ([concept, lectures]) =>
        html`<graph-widget-section>
          ${msg(
            html`<graph-widget-section-title
              slot="header"
              description=${msg("Lectures related to this concept")}
            >
              ${get(concept, ["name", this.locale, "value"])}
            </graph-widget-section-title> `
          )}
          ${lectures.items.length
            ? lectures.items.map(
                (item: Lecture) =>
                  html`<graph-widget-lecture
                    .lecture=${item}
                    locale=${this.locale}
                  ></graph-widget-lecture>`
              )
            : html`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${concept._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`,
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-concept-lectures": ConceptLectures;
  }
}
