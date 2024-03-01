import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { Task } from "@lit/task";

import { getPerson, getPersonCoreUnits } from "@/services/persons";

import { person, unit } from "@/fields";

import "@/components/base/loading";
import "@/components/base/no-results";
import { Root } from "@/components/base/root";
import "@/components/base/section";
import "@/components/base/sectionLink";

import "@/components/base/unit";

import { Unit } from "@/types/unit";

@customElement("graph-widget-person-core-units")
export class PersonCoreUnits extends Root {
  @property({ type: String, attribute: "person-id" })
  id = "";

  private _getPersonUnits = new Task(this, {
    task: async ([id, locale, limit, offset], { signal }) =>
      Promise.all([
        getPerson({ id, fields: person({ locale }) }, { signal }),
        getPersonCoreUnits(
          {
            id,
            fields: unit({ locale }),
            limit: Number(limit),
            offset: Number(offset),
          },
          { signal }
        ),
      ]),
    args: () => [this.id, this.locale, this.limit, this.offset],
  });

  render() {
    return this._getPersonUnits.render({
      pending: () =>
        html`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,
      complete: ([person, units]) =>
        html`<graph-widget-section>
          ${units.items.length
            ? units.items.map(
                (item: Unit) =>
                  html`<graph-widget-unit
                    exportparts="link, unit, unit__name, breadcrumbs, breadcrumb"
                    .unit=${item}
                    locale=${this.locale}
                  ></graph-widget-unit>`
              )
            : html`<graph-widget-no-results
                exportparts="no-results"
              ></graph-widget-no-results>`}
          <graph-widget-section-link
            exportparts="button"
            slot="footer"
            href=${person._url}
          ></graph-widget-section-link>
        </graph-widget-section>`,
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-person-core-units": PersonCoreUnits;
  }
}
