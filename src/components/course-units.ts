import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { localized, msg } from "@lit/localize";
import { Task } from "@lit/task";

import get from "lodash/get";

import { getCourse, getCourseUnits } from "@/services/courses";

import { unit, course } from "@/fields";

import { Unit } from "@/types/unit";

import "@/components/base/unit";
import "@/components/base/error";
import "@/components/base/loading";
import "@/components/base/no-results";
import { Root } from "@/components/base/root";
import "@/components/base/section";
import "@/components/base/sectionLink";
import "@/components/base/sectionTitle";

@localized()
@customElement("graph-widget-course-units")
export class CourseUnits extends Root {
  @property({ type: String })
  "course-id" = "";

  @property({ type: String })
  limit = "3";

  @property({ type: String })
  offset = "0";

  private _getCourseUnits = new Task(this, {
    task: async ([id, locale, limit, offset], { signal }) =>
      Promise.all([
        getCourse({ id, fields: course({ locale }) }, { signal }),
        getCourseUnits(
          {
            id,
            fields: unit({ locale }),
            limit: Number(limit),
            offset: Number(offset),
          },
          { signal }
        ),
      ]),
    args: () => [this["course-id"], this.locale, this.limit, this.offset],
  });

  render() {
    return this._getCourseUnits.render({
      pending: () =>
        html`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,
      error: (error: Error) =>
        html`<graph-widget-error>${error.message}</graph-widget-error>`,
      complete: ([course, units]) =>
        html`<graph-widget-section>
          ${msg(
            html`<graph-widget-section-title
              slot="header"
              description=${msg("Units related to this course")}
            >
              ${get(course, ["name", this.locale, "value"])}
            </graph-widget-section-title> `
          )}
          ${units.items.length
            ? units.items.map(
                (item: Unit) =>
                  html`<graph-widget-unit
                    .unit=${item}
                    locale=${this.locale}
                  ></graph-widget-unit>`
              )
            : html`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${course._url}
          ></graph-widget-section-link>
        </graph-widget-section>`,
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-course-units": CourseUnits;
  }
}
