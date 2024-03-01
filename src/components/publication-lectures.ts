import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { Task } from "@lit/task";

import {
  getPublication,
  getPublicationLectures,
} from "@/services/publications";

import { lecture, publication } from "@/fields";

import { Lecture } from "@/types/lecture";

import "@/components/base/lecture";
import "@/components/base/loading";
import "@/components/base/no-results";
import { Root } from "@/components/base/root";
import "@/components/base/section";
import "@/components/base/sectionLink";

@customElement("graph-widget-publication-lectures")
export class PublicationLectures extends Root {
  @property({ type: String, attribute: "publication-id" })
  id = "";

  private _getPublicationLectures = new Task(this, {
    task: async ([id, locale, limit, offset], { signal }) =>
      Promise.all([
        getPublication({ id, fields: publication({ locale }) }, { signal }),
        getPublicationLectures(
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
    return this._getPublicationLectures.render({
      pending: () =>
        html`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,
      complete: ([publication, lectures]) =>
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
            href=${publication._url}
          ></graph-widget-section-link>
        </graph-widget-section>`,
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-publication-lectures": PublicationLectures;
  }
}
