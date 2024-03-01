import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { Task } from "@lit/task";

import { getUnit, getUnitConcepts } from "@/services/units";

import { concept, unit } from "@/fields";

import { Concept } from "@/types/concept";

import "@/components/base/concept";
import "@/components/base/loading";
import "@/components/base/no-results";
import { Root } from "@/components/base/root";
import "@/components/base/section";
import "@/components/base/sectionLink";

@customElement("graph-widget-unit-concepts")
export class UnitConcepts extends Root {
  @property({ type: String, attribute: "unit-id" })
  id = "";

  private _getUnitConcepts = new Task(this, {
    task: async ([id, locale, limit, offset], { signal }) =>
      Promise.all([
        getUnit({ id, fields: unit({ locale }) }, { signal }),
        getUnitConcepts(
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
    return this._getUnitConcepts.render({
      pending: () =>
        html`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,
      complete: ([unit, concepts]) =>
        html`<graph-widget-section>
          ${concepts.items.length
            ? concepts.items.map(
                (item: Concept) =>
                  html`<graph-widget-concept
                    exportparts="link, unit, unit__name, breadcrumbs, breadcrumb"
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
            href=${unit._url}
          ></graph-widget-section-link>
        </graph-widget-section>`,
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-unit-concepts": UnitConcepts;
  }
}
