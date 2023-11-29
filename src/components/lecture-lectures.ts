import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { localized, msg } from "@lit/localize";
import { Task } from "@lit/task";

import { getLecture, getLectureLectures } from "@/services/lectures";

import { lecture } from "@/fields";

import "@/components/base/error";
import "@/components/base/lecture";
import "@/components/base/loading";
import "@/components/base/no-results";
import { Root } from "@/components/base/root";
import "@/components/base/section";
import "@/components/base/sectionLink";
import "@/components/base/sectionTitle";

import { Lecture } from "@/types/lecture";

@localized()
@customElement("graph-widget-lecture-lectures")
export class LectureLectures extends Root {
  @property({ type: String })
  "lecture-id" = "";

  @property({ type: String })
  limit = "3";

  @property({ type: String })
  offset = "0";

  private _getLectureLectures = new Task(this, {
    task: async ([id, locale, limit, offset], { signal }) =>
      Promise.all([
        getLecture({ id, fields: lecture({ locale }) }, { signal }),
        getLectureLectures(
          {
            id,
            fields: lecture({ locale }),
            limit: Number(limit),
            offset: Number(offset),
          },
          { signal }
        ),
      ]),
    args: () => [this["lecture-id"], this.locale, this.limit, this.offset],
  });

  render() {
    return this._getLectureLectures.render({
      pending: () =>
        html`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,
      error: (error: Error) =>
        html`<graph-widget-error>${error.message}</graph-widget-error>`,
      complete: ([lecture, lectures]) =>
        html`<graph-widget-section>
          ${msg(
            html`<graph-widget-section-title
              slot="header"
              description=${msg("Lectures related to this lecture")}
            >
              ${lecture.video.title}
            </graph-widget-section-title> `
          )}
          ${lectures.items.length
            ? lectures.items.map(
                (item: Lecture) =>
                  html`<graph-widget-lecture
                    .lecture=${item}
                    locale=${this.locale}
                  ></graph-widget-lecture>`
              )
            : html`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${lecture._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`,
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-lecture-lectures": LectureLectures;
  }
}
