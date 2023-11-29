import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { localized, msg } from "@lit/localize";
import { Task } from "@lit/task";

import get from "lodash/get";

import { getCourse, getCoursePublications } from "@/services/courses";

import { publication, course } from "@/fields";

import { Publication } from "@/types/publication";

import "@/components/base/publication";
import "@/components/base/error";
import "@/components/base/loading";
import "@/components/base/no-results";
import { Root } from "@/components/base/root";
import "@/components/base/section";
import "@/components/base/sectionLink";
import "@/components/base/sectionTitle";

@localized()
@customElement("graph-widget-course-publications")
export class CoursePublications extends Root {
  @property({ type: String })
  "course-id" = "";

  @property({ type: String })
  limit = "3";

  @property({ type: String })
  offset = "0";

  private _getCoursePublications = new Task(this, {
    task: async ([id, locale, limit, offset], { signal }) =>
      Promise.all([
        getCourse({ id, fields: course({ locale }) }, { signal }),
        getCoursePublications(
          {
            id,
            fields: publication({ locale }),
            limit: Number(limit),
            offset: Number(offset),
          },
          { signal }
        ),
      ]),
    args: () => [this["course-id"], this.locale, this.limit, this.offset],
  });

  render() {
    return this._getCoursePublications.render({
      pending: () =>
        html`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,
      error: (error: Error) =>
        html`<graph-widget-error>${error.message}</graph-widget-error>`,
      complete: ([course, publications]) =>
        html`<graph-widget-section>
          ${msg(
            html`<graph-widget-section-title
              slot="header"
              description=${msg("Publications related to this course")}
            >
              ${get(course, ["name", this.locale, "value"])}
            </graph-widget-section-title> `
          )}
          ${publications.items.length
            ? publications.items.map(
                (item: Publication) =>
                  html`<graph-widget-publication
                    .publication=${item}
                    locale=${this.locale}
                  ></graph-widget-publication>`
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
    "graph-widget-course-publications": CoursePublications;
  }
}
