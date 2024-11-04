import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { Task } from "@lit/task";

import { getConcept, getConceptConcepts } from "@/services/concepts";
import { conceptFields, relatedConceptsFields } from "@/services/fields";

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
    task: async ([id, limit, offset], { signal }) =>
      Promise.all([
        getConcept({ id, fields: conceptFields }, { signal }),
        getConceptConcepts(
          {
            id,
            fields: relatedConceptsFields,
            limit: Number(limit),
            offset: Number(offset),
          },
          { signal }
        ),
      ]),
    args: () => [this.id, this.limit, this.offset],
  });

  render() {
    return this._getConceptConcepts.render({
      pending: () =>
        html`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,
      complete: ([concept, concepts]) =>
        html`<graph-widget-section>
          ${concepts.items.length
            ? concepts.items.map(
                (item) =>
                  html`<graph-widget-concept
                    exportparts="link, concept, concept__name, concept__description"
                    .concept=${item.node}
                    locale=${this.locale}
                  ></graph-widget-concept>`
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
    "graph-widget-concept-concepts": ConceptConcepts;
  }
}
