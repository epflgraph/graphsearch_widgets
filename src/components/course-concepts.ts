import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { Task } from "@lit/task";

import { getCourse, getCourseConcepts } from "@/services/courses";

import { concept, course } from "@/fields";

import { Concept } from "@/types/concept";

import "@/components/base/concept";
import "@/components/base/loading";
import "@/components/base/no-results";
import { Root } from "@/components/base/root";
import "@/components/base/section";
import "@/components/base/sectionLink";

@customElement("graph-widget-course-concepts")
export class CourseConcepts extends Root {
  @property({ type: String, attribute: "course-id" })
  id = "";

  private _getCourseConcepts = new Task(this, {
    task: async ([id, locale, limit, offset], { signal }) =>
      Promise.all([
        getCourse({ id, fields: course({ locale }) }, { signal }),
        getCourseConcepts(
          {
            id,
            fields: concept({ locale }),
            limit: Number(limit),
            offset: Number(offset),
          },
          { signal }
        ),
      ]),
    args: () => [this.id, this.locale, this.limit, this.offset],
  });

  render() {
    return this._getCourseConcepts.render({
      pending: () =>
        html`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,
      complete: ([course, concepts]) =>
        html`<graph-widget-section>
          ${concepts.items.length
            ? concepts.items.map(
                (item: Concept) =>
                  html`<graph-widget-concept
                    exportparts="link, concept, concept__name, concept__description"
                    .concept=${item}
                    locale=${this.locale}
                  ></graph-widget-concept>`
              )
            : html`<graph-widget-no-results
                exportparts="no-results"
              ></graph-widget-no-results>`}
          <graph-widget-section-link
            exportparts="button"
            slot="footer"
            href=${course._url}
          ></graph-widget-section-link>
        </graph-widget-section>`,
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-course-concepts": CourseConcepts;
  }
}
