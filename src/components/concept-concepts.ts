import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { Task } from "@lit/task";

import { getConcept, getConceptConcepts } from "@/services/concepts";

import { concept } from "@/fields";

import { Concept } from "@/types/concept";

import "@/components/base/concept";
import "@/components/base/loading";
import "@/components/base/no-results";
import { Root } from "@/components/base/root";
import "@/components/base/section";
import "@/components/base/sectionLink";

@customElement("graph-widget-concept-concepts")
export class ConceptConcepts extends Root {
  @property({ type: String, attribute: "concept-id" })
  id = "";

  private _getConceptConcepts = new Task(this, {
    task: async ([id, locale, limit, offset], { signal }) =>
      Promise.all([
        getConcept({ id, fields: concept({ locale }) }, { signal }),
        getConceptConcepts(
          {
            id,
            fields: concept({ locale }),
            limit: Number(limit),
            offset: Number(offset),
          },
          { signal }
        ),
      ]),
    args: () => [this.id, this.locale, this.limit, this.offset],
  });

  render() {
    return this._getConceptConcepts.render({
      pending: () =>
        html`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,
      complete: ([concept, concepts]) =>
        html`<graph-widget-section>
          ${concepts.items.length
            ? concepts.items.map(
                (item: Concept) =>
                  html`<graph-widget-concept
                    exportparts="link, concept, concept__name, concept__description"
                    .concept=${item}
                    locale=${this.locale}
                  ></graph-widget-concept>`
              )
            : html`<graph-widget-no-results
                exportparts="no-results"
              ></graph-widget-no-results>`}
          <graph-widget-section-link
            exportparts="button"
            slot="footer"
            href=${concept._url}
          ></graph-widget-section-link>
        </graph-widget-section>`,
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-concept-concepts": ConceptConcepts;
  }
}
