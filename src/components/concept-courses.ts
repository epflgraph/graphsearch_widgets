import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { Task } from "@lit/task";

import { getConcept, getConceptCourses } from "@/services/concepts";

import { concept, course } from "@/fields";

import "@/components/base/course";
import "@/components/base/loading";
import "@/components/base/no-results";
import { Root } from "@/components/base/root";
import "@/components/base/section";
import "@/components/base/sectionLink";

import { Course } from "@/types/course";

@customElement("graph-widget-concept-courses")
export class ConceptCourses extends Root {
  @property({ type: String, attribute: "concept-id" })
  id = "";

  private _getConceptCourses = new Task(this, {
    task: async ([id, locale, limit, offset], { signal }) =>
      Promise.all([
        getConcept({ id, fields: concept({ locale }) }, { signal }),
        getConceptCourses(
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
    return this._getConceptCourses.render({
      pending: () =>
        html`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,
      complete: ([concept, courses]) =>
        html`<graph-widget-section>
          ${courses.items.length
            ? courses.items.map(
                (item: Course) =>
                  html`<graph-widget-course
                    exportparts="link, course, course__title, course__summary"
                    .course=${item}
                    locale=${this.locale}
                  ></graph-widget-course>`
              )
            : html`<graph-widget-no-results
                exportparts="no-results"
              ></graph-widget-no-results>`}
          <graph-widget-section-link
            exportparts="button"
            slot="footer"
            href=${concept._url}
          ></graph-widget-section-link>
        </graph-widget-section>`,
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-concept-courses": ConceptCourses;
  }
}
