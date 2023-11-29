import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { localized, msg } from "@lit/localize";
import { Task } from "@lit/task";

import {
  getPublication,
  getPublicationPublications,
} from "@/services/publications";

import { publication } from "@/fields";

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
@customElement("graph-widget-publication-publications")
export class PublicationPublications extends Root {
  @property({ type: String })
  "publication-id" = "";

  @property({ type: String })
  limit = "3";

  @property({ type: String })
  offset = "0";

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
    args: () => [this["publication-id"], this.locale, this.limit, this.offset],
  });

  render() {
    return this._getPublicationPublications.render({
      pending: () =>
        html`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,
      error: (error: Error) =>
        html`<graph-widget-error>${error.message}</graph-widget-error>`,
      complete: ([publication, publications]) =>
        html`<graph-widget-section>
          ${html`<graph-widget-section-title
            slot="header"
            description=${msg("Publications related to this publication")}
          >
            ${publication.title}
          </graph-widget-section-title> `}
          ${publications.items.length
            ? publications.items.map(
                (item: Publication) =>
                  html`<graph-widget-publication
                    .publication=${item}
                    locale=${this.locale}
                  ></graph-widget-publication>`
              )
            : html`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${publication._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`,
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-publication-publications": PublicationPublications;
  }
}
