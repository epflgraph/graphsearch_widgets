import { html } from "lit";
import { customElement } from "lit/decorators.js";

import { localized, msg } from "@lit/localize";
import { Task } from "@lit/task";

import { getPerson, getPersonCourses } from "@/services/persons";

import { course, person } from "@/fields";

import "@/components/base/course";
import "@/components/base/loading";
import "@/components/base/no-results";
import { Root } from "@/components/base/root";
import "@/components/base/section";
import "@/components/base/sectionLink";
import "@/components/base/sectionTitle";

import { Course } from "@/types/course";

@localized()
@customElement("graph-widget-person-courses")
export class PersonCourses extends Root {
  private _getPersonCourses = new Task(this, {
    task: async ([id, locale, limit, offset], { signal }) =>
      Promise.all([
        getPerson({ id, fields: person({ locale }) }, { signal }),
        getPersonCourses(
          {
            id,
            fields: course({ locale }),
            limit: Number(limit),
            offset: Number(offset),
          },
          { signal }
        ),
      ]),
    args: () => [this.id, this.locale, this.limit, this.offset],
  });

  render() {
    return this._getPersonCourses.render({
      pending: () =>
        html`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,
      complete: ([person, courses]) =>
        html`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${msg("Courses related to this person")}
          >
            ${person.name_display}
          </graph-widget-section-title>
          ${courses.items.length
            ? courses.items.map(
                (item: Course) =>
                  html`<graph-widget-course
                    .course=${item}
                    locale=${this.locale}
                  ></graph-widget-course>`
              )
            : html`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${person._url}
          ></graph-widget-section-link>
        </graph-widget-section>`,
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-person-courses": PersonCourses;
  }
}
