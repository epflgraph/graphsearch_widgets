import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { Task } from "@lit/task";

import { getConcept, getConceptPersons } from "@/services/concepts";
import { conceptFields, relatedPersonsFields } from "@/services/fields";

import "@/components/base/loading";
import "@/components/base/no-results";
import "@/components/base/person";
import { Root } from "@/components/base/root";
import "@/components/base/section";
import "@/components/base/sectionLink";

@customElement("graph-widget-concept-persons")
export class ConceptPersons extends Root {
  @property({ type: String, attribute: "concept-id" })
  id = "";

  private _getConceptPersons = new Task(this, {
    task: async ([id, limit, offset], { signal }) =>
      Promise.all([
        getConcept({ id, fields: conceptFields }, { signal }),
        getConceptPersons(
          {
            id,
            fields: relatedPersonsFields,
            limit: Number(limit),
            offset: Number(offset),
          },
          { signal }
        ),
      ]),
    args: () => [this.id, this.limit, this.offset],
  });

  render() {
    return this._getConceptPersons.render({
      pending: () =>
        html`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,
      complete: ([concept, persons]) =>
        html`<graph-widget-section>
          ${persons.items.length
            ? persons.items.map(
                (item) =>
                  html`<graph-widget-person
                    exportparts="link, person, person__name, person__description"
                    .person=${item.node}
                    locale=${this.locale}
                  ></graph-widget-person>`
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
    "graph-widget-concept-persons": ConceptPersons;
  }
}
