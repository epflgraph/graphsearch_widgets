import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { localized, msg } from "@lit/localize";
import { Task } from "@lit/task";

import get from "lodash/get";

import { getConcept, getConceptCourses } from "@/services/concepts";

import { concept, course } from "@/fields";

import "@/components/base/course";
import "@/components/base/error";
import "@/components/base/loading";
import "@/components/base/no-results";
import { Root } from "@/components/base/root";
import "@/components/base/section";
import "@/components/base/sectionLink";
import "@/components/base/sectionTitle";

import { Course } from "@/types/course";

@localized()
@customElement("graph-widget-concept-courses")
export class ConceptCourses extends Root {
  @property({ type: String })
  "concept-id" = "";

  @property({ type: String })
  limit = "3";

  @property({ type: String })
  offset = "0";

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
    args: () => [this["concept-id"], this.locale, this.limit, this.offset],
  });

  render() {
    return this._getConceptCourses.render({
      pending: () =>
        html`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,
      error: (error: Error) =>
        html`<graph-widget-error>${error.message}</graph-widget-error>`,
      complete: ([concept, courses]) =>
        html`<graph-widget-section>
          ${msg(
            html`<graph-widget-section-title
              slot="header"
              description=${msg("Courses related to this concept")}
            >
              ${get(concept, ["name", this.locale, "value"])}
            </graph-widget-section-title> `
          )}
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
