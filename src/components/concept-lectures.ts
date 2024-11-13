import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { Task } from "@lit/task";

import { getConcept, getConceptLectures } from "@/services/concepts";
import { conceptFields, relatedLecturesFields } from "@/services/fields";

import "@/components/base/lecture";
import "@/components/base/loading";
import "@/components/base/no-results";
import { Root } from "@/components/base/root";
import "@/components/base/section";
import "@/components/base/sectionLink";

@customElement("graph-widget-concept-lectures")
export class ConceptLectures extends Root {
  @property({ type: String, attribute: "concept-id" })
  id = "";

  private _getConceptLectures = new Task(this, {
    task: async ([id, limit, offset], { signal }) =>
      Promise.all([
        getConcept({ id, fields: conceptFields }, { signal }),
        getConceptLectures(
          {
            id,
            fields: relatedLecturesFields,
            limit: Number(limit),
            offset: Number(offset),
          },
          { signal }
        ),
      ]),
    args: () => [this.id, this.limit, this.offset],
  });

  render() {
    return this._getConceptLectures.render({
      pending: () =>
        html`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,
      complete: ([concept, lectures]) =>
        html`<graph-widget-section>
          ${lectures.items.length
            ? lectures.items.map(
                (item) =>
                  html`<graph-widget-lecture
                    exportparts="link, lecture, lecture__name, lecture__description"
                    .lecture=${item.node}
                    locale=${this.locale}
                  ></graph-widget-lecture>`
              )
            : html`<graph-widget-no-results
                exportparts="no-results"
              ></graph-widget-no-results>`}
          <graph-widget-section-link
            exportparts="button"
            slot="footer"
            href=${concept.url}
          ></graph-widget-section-link>
        </graph-widget-section>`,
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-concept-lectures": ConceptLectures;
  }
}
