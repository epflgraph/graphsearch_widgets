import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { Task } from "@lit/task";

import { lectureFields, relatedCoursesFields } from "@/services/fields";
import { getLecture, getLectureCourses } from "@/services/lectures";

import "@/components/base/course";
import "@/components/base/loading";
import "@/components/base/no-results";
import { Root } from "@/components/base/root";
import "@/components/base/section";
import "@/components/base/sectionLink";

@customElement("graph-widget-lecture-courses")
export class LectureCourses extends Root {
  @property({ type: String, attribute: "lecture-id" })
  id = "";

  private _getLectureCourses = new Task(this, {
    task: async ([id, limit, offset], { signal }) =>
      Promise.all([
        getLecture({ id, fields: lectureFields }, { signal }),
        getLectureCourses(
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
    return this._getLectureCourses.render({
      pending: () =>
        html`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,
      complete: ([lecture, courses]) =>
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
            href=${lecture.url}
          ></graph-widget-section-link>
        </graph-widget-section>`,
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-lecture-courses": LectureCourses;
  }
}
