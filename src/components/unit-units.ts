import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { Task } from "@lit/task";

import { relatedUnitsFields, unitFields } from "@/services/fields";
import { getUnit, getUnitUnits } from "@/services/units";

import "@/components/base/loading";
import "@/components/base/no-results";
import { Root } from "@/components/base/root";
import "@/components/base/section";
import "@/components/base/sectionLink";

import "@/components/base/unit";

@customElement("graph-widget-unit-units")
export class UnitUnits extends Root {
  @property({ type: String, attribute: "unit-id" })
  id = "";

  private _getUnitUnits = new Task(this, {
    task: async ([id, limit, offset], { signal }) =>
      Promise.all([
        getUnit({ id, fields: unitFields }, { signal }),
        getUnitUnits(
          {
            id,
            fields: relatedUnitsFields,
            limit: Number(limit),
            offset: Number(offset),
          },
          { signal }
        ),
      ]),
    args: () => [this.id, this.limit, this.offset],
  });

  render() {
    return this._getUnitUnits.render({
      pending: () =>
        html`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,
      complete: ([unit, units]) =>
        html`<graph-widget-section>
          ${units.items.length
            ? units.items.map(
                (item) =>
                  html`<graph-widget-unit
                    exportparts="link, unit, unit__name, breadcrumbs, breadcrumb"
                    .unit=${item.node}
                    locale=${this.locale}
                  ></graph-widget-unit>`
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
    "graph-widget-unit-units": UnitUnits;
  }
}
