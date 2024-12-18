import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { Task } from "@lit/task";

import { relatedLecturesFields, unitFields } from "@/services/fields";
import { getUnit, getUnitLectures } from "@/services/units";

import "@/components/base/lecture";
import "@/components/base/loading";
import "@/components/base/no-results";
import { Root } from "@/components/base/root";
import "@/components/base/section";
import "@/components/base/sectionLink";

@customElement("graph-widget-unit-lectures")
export class UnitLectures extends Root {
  @property({ type: String, attribute: "unit-id" })
  id = "";

  private _getUnitLectures = new Task(this, {
    task: async ([id, limit, offset], { signal }) =>
      Promise.all([
        getUnit({ id, fields: unitFields }, { signal }),
        getUnitLectures(
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
    return this._getUnitLectures.render({
      pending: () =>
        html`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,
      complete: ([unit, lectures]) =>
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
            href=${unit.url}
          ></graph-widget-section-link>
        </graph-widget-section>`,
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-unit-lectures": UnitLectures;
  }
}
