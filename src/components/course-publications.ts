import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { Task } from "@lit/task";

import { getCourse, getCoursePublications } from "@/services/courses";
import { courseFields, relatedPublicationsFields } from "@/services/fields";

import "@/components/base/loading";
import "@/components/base/no-results";
import "@/components/base/publication";
import { Root } from "@/components/base/root";
import "@/components/base/section";
import "@/components/base/sectionLink";

@customElement("graph-widget-course-publications")
export class CoursePublications extends Root {
  @property({ type: String, attribute: "course-id" })
  id = "";

  private _getCoursePublications = new Task(this, {
    task: async ([id, limit, offset], { signal }) =>
      Promise.all([
        getCourse({ id, fields: courseFields }, { signal }),
        getCoursePublications(
          {
            id,
            fields: relatedPublicationsFields,
            limit: Number(limit),
            offset: Number(offset),
          },
          { signal }
        ),
      ]),
    args: () => [this.id, this.limit, this.offset],
  });

  render() {
    return this._getCoursePublications.render({
      pending: () =>
        html`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,
      complete: ([course, publications]) =>
        html`<graph-widget-section>
          ${publications.items.length
            ? publications.items.map(
                (item) =>
                  html`<graph-widget-publication
                    exportparts="link, publication, publication__name, publication__description, publication__publisher, publication__year"
                    .publication=${item.node}
                    locale=${this.locale}
                  ></graph-widget-publication>`
              )
            : html`<graph-widget-no-results
                exportparts="no-results"
              ></graph-widget-no-results>`}
          <graph-widget-section-link
            exportparts="button"
            slot="footer"
            href=${course.url}
          ></graph-widget-section-link>
        </graph-widget-section>`,
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-course-publications": CoursePublications;
  }
}
