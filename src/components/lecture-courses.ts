import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { localized, msg } from "@lit/localize";
import { Task } from "@lit/task";

import { getLecture, getLectureCourses } from "@/services/lectures";

import { course, lecture } from "@/fields";

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
@customElement("graph-widget-lecture-courses")
export class LectureCourses extends Root {
  @property({ type: String })
  "lecture-id" = "";

  @property({ type: String })
  limit = "3";

  @property({ type: String })
  offset = "0";

  private _getLectureCourses = new Task(this, {
    task: async ([id, locale, limit, offset], { signal }) =>
      Promise.all([
        getLecture({ id, fields: lecture({ locale }) }, { signal }),
        getLectureCourses(
          {
            id,
            fields: course({ locale }),
            limit: Number(limit),
            offset: Number(offset),
          },
          { signal }
        ),
      ]),
    args: () => [this["lecture-id"], this.locale, this.limit, this.offset],
  });

  render() {
    return this._getLectureCourses.render({
      pending: () =>
        html`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,
      error: (error: Error) =>
        html`<graph-widget-error>${error.message}</graph-widget-error>`,
      complete: ([lecture, courses]) =>
        html`<graph-widget-section>
          ${msg(
            html`<graph-widget-section-title
              slot="header"
              description=${msg("Courses related to this lecture")}
            >
              ${lecture.video.title}
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
            href=${lecture._url}
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
