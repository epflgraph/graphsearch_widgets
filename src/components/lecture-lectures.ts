import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { Task } from "@lit/task";

import { getLecture, getLectureLectures } from "@/services/lectures";

import { lecture } from "@/fields";

import "@/components/base/lecture";
import "@/components/base/loading";
import "@/components/base/no-results";
import { Root } from "@/components/base/root";
import "@/components/base/section";
import "@/components/base/sectionLink";

import { Lecture } from "@/types/lecture";

@customElement("graph-widget-lecture-lectures")
export class LectureLectures extends Root {
  @property({ type: String, attribute: "lecture-id" })
  id = "";

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
    args: () => [this.id, this.locale, this.limit, this.offset],
  });

  render() {
    return this._getLectureLectures.render({
      pending: () =>
        html`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,
      complete: ([lecture, lectures]) =>
        html`<graph-widget-section>
          ${lectures.items.length
            ? lectures.items.map(
                (item: Lecture) =>
                  html`<graph-widget-lecture
                    exportparts="link, lecture, lecture__title, lecture__subtitle"
                    .lecture=${item}
                    locale=${this.locale}
                  ></graph-widget-lecture>`
              )
            : html`<graph-widget-no-results
                exportparts="no-results"
              ></graph-widget-no-results>`}
          <graph-widget-section-link
            exportparts="button"
            slot="footer"
            href=${lecture._url}
          ></graph-widget-section-link>
        </graph-widget-section>`,
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-lecture-lectures": LectureLectures;
  }
}
