import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { Task } from "@lit/task";

import { lectureFields, relatedUnitsFields } from "@/services/fields";
import { getLecture, getLectureUnits } from "@/services/lectures";

import "@/components/base/loading";
import "@/components/base/no-results";
import { Root } from "@/components/base/root";
import "@/components/base/section";
import "@/components/base/sectionLink";

import "@/components/base/unit";

@customElement("graph-widget-lecture-units")
export class LectureUnits extends Root {
  @property({ type: String, attribute: "lecture-id" })
  id = "";

  private _getLectureUnits = new Task(this, {
    task: async ([id, limit, offset], { signal }) =>
      Promise.all([
        getLecture({ id, fields: lectureFields }, { signal }),
        getLectureUnits(
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
    return this._getLectureUnits.render({
      pending: () =>
        html`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,
      complete: ([lecture, units]) =>
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
            href=${lecture.url}
          ></graph-widget-section-link>
        </graph-widget-section>`,
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-lecture-units": LectureUnits;
  }
}
