import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { Task } from "@lit/task";

import {
  getPublication,
  getPublicationPublications,
} from "@/services/publications";

import { publication } from "@/fields";

import { Publication } from "@/types/publication";

import "@/components/base/loading";
import "@/components/base/no-results";
import "@/components/base/publication";
import { Root } from "@/components/base/root";
import "@/components/base/section";
import "@/components/base/sectionLink";

@customElement("graph-widget-publication-publications")
export class PublicationPublications extends Root {
  @property({ type: String, attribute: "publication-id" })
  id = "";

  private _getPublicationPublications = new Task(this, {
    task: async ([id, locale, limit, offset], { signal }) =>
      Promise.all([
        getPublication({ id, fields: publication({ locale }) }, { signal }),
        getPublicationPublications(
          {
            id,
            fields: publication({ locale }),
            limit: Number(limit),
            offset: Number(offset),
          },
          { signal }
        ),
      ]),
    args: () => [this.id, this.locale, this.limit, this.offset],
  });

  render() {
    return this._getPublicationPublications.render({
      pending: () =>
        html`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,
      complete: ([publication, publications]) =>
        html`<graph-widget-section>
          ${publications.items.length
            ? publications.items.map(
                (item: Publication) =>
                  html`<graph-widget-publication
                    exportparts="link, publication, publication__title, publication__abstract, publication__publisher, publication__year"
                    .publication=${item}
                    locale=${this.locale}
                  ></graph-widget-publication>`
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
    "graph-widget-publication-publications": PublicationPublications;
  }
}
