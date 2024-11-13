import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { Task } from "@lit/task";

import { personFields, relatedCoursesFields } from "@/services/fields";
import { getPerson, getPersonCoreCourses } from "@/services/persons";

import "@/components/base/course";
import "@/components/base/loading";
import "@/components/base/no-results";
import { Root } from "@/components/base/root";
import "@/components/base/section";
import "@/components/base/sectionLink";

@customElement("graph-widget-person-core-courses")
export class PersonCoreCourses extends Root {
  @property({ type: String, attribute: "person-id" })
  id = "";

  private _getPersonCourses = new Task(this, {
    task: async ([id, limit, offset], { signal }) =>
      Promise.all([
        getPerson({ id, fields: personFields }, { signal }),
        getPersonCoreCourses(
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
    return this._getPersonCourses.render({
      pending: () =>
        html`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,
      complete: ([person, courses]) =>
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
            href=${person.url}
          ></graph-widget-section-link>
        </graph-widget-section>`,
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-person-core-courses": PersonCoreCourses;
  }
}
