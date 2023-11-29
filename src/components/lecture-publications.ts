import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { localized, msg } from "@lit/localize";
import { Task } from "@lit/task";

import { getLecture, getLecturePublications } from "@/services/lectures";

import { lecture, publication } from "@/fields";

import "@/components/base/error";
import "@/components/base/loading";
import "@/components/base/no-results";
import "@/components/base/publication";
import { Root } from "@/components/base/root";
import "@/components/base/section";
import "@/components/base/sectionLink";
import "@/components/base/sectionTitle";

import { Publication } from "@/types/publication";

@localized()
@customElement("graph-widget-lecture-publications")
export class LecturePublications extends Root {
  @property({ type: String })
  "lecture-id" = "";

  @property({ type: String })
  limit = "3";

  @property({ type: String })
  offset = "0";

  private _getLecturePublications = new Task(this, {
    task: async ([id, locale, limit, offset], { signal }) =>
      Promise.all([
        getLecture({ id, fields: lecture({ locale }) }, { signal }),
        getLecturePublications(
          {
            id,
            fields: publication({ locale }),
            limit: Number(limit),
            offset: Number(offset),
          },
          { signal }
        ),
      ]),
    args: () => [this["lecture-id"], this.locale, this.limit, this.offset],
  });

  render() {
    return this._getLecturePublications.render({
      pending: () =>
        html`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,
      error: (error: Error) =>
        html`<graph-widget-error>${error.message}</graph-widget-error>`,
      complete: ([lecture, publications]) =>
        html`<graph-widget-section>
          ${msg(
            html`<graph-widget-section-title
              slot="header"
              description=${"Publications related to this lecture"}
            >
              ${lecture.video.title}
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
            href=${lecture._url}
          ></graph-widget-section-link>
        </graph-widget-section>`,
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-lecture-publications": LecturePublications;
  }
}
