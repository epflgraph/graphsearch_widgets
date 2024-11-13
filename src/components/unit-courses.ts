import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { Task } from "@lit/task";

import { relatedCoursesFields, unitFields } from "@/services/fields";
import { getUnit, getUnitCourses } from "@/services/units";

import "@/components/base/course";
import "@/components/base/loading";
import "@/components/base/no-results";
import { Root } from "@/components/base/root";
import "@/components/base/section";
import "@/components/base/sectionLink";

@customElement("graph-widget-unit-courses")
export class UnitCourses extends Root {
  @property({ type: String, attribute: "unit-id" })
  id = "";

  private _getUnitCourses = new Task(this, {
    task: async ([id, limit, offset], { signal }) =>
      Promise.all([
        getUnit({ id, fields: unitFields }, { signal }),
        getUnitCourses(
          {
            id,
            fields: relatedCoursesFields,
            limit: Number(limit),
            offset: Number(offset),
          },
          { signal }
        ),
      ]),
    args: () => [this.id, this.limit, this.offset],
  });

  render() {
    return this._getUnitCourses.render({
      pending: () =>
        html`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,
      complete: ([unit, courses]) =>
        html`<graph-widget-section>
          ${courses.items.length
            ? courses.items.map(
                (item) =>
                  html`<graph-widget-course
                    exportparts="link, course, course__name, course__description"
                    .course=${item.node}
                    locale=${this.locale}
                  ></graph-widget-course>`
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
    "graph-widget-unit-courses": UnitCourses;
  }
}
