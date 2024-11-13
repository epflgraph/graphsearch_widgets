import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { Task } from "@lit/task";

import { relatedPersonsFields, unitFields } from "@/services/fields";
import { getUnit, getUnitCorePersons } from "@/services/units";

import "@/components/base/loading";
import "@/components/base/no-results";
import "@/components/base/person";
import { Root } from "@/components/base/root";
import "@/components/base/section";
import "@/components/base/sectionLink";

@customElement("graph-widget-unit-core-persons")
export class UnitCorePersons extends Root {
  @property({ type: String, attribute: "unit-id" })
  id = "";

  private _getUnitPersons = new Task(this, {
    task: async ([id, limit, offset], { signal }) =>
      Promise.all([
        getUnit({ id, fields: unitFields }, { signal }),
        getUnitCorePersons(
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
    return this._getUnitPersons.render({
      pending: () =>
        html`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,
      complete: ([unit, persons]) =>
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
            href=${unit.url}
          ></graph-widget-section-link>
        </graph-widget-section>`,
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-unit-core-persons": UnitCorePersons;
  }
}
