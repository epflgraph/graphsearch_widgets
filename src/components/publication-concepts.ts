import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { localized, msg } from "@lit/localize";
import { Task } from "@lit/task";

import { getPublication, getPublicationConcepts } from "@/services/publication";

import { URL_APP } from "@/shared/constants";

import { Root } from "@/components/base/root";
import "@/components/base/concept";
import "@/components/base/error";
import "@/components/base/loading";
import "@/components/base/section";
import "@/components/base/sectionLink";
import "@/components/base/sectionTitle";

import { Concept } from "@/types/concept";

@localized()
@customElement("graph-widget-publication-concepts")
export class PublicationConcepts extends Root {
  @property({ type: String })
  locale = "en";

  @property({ type: String })
  "publication-id" = "";

  @property({ type: String })
  limit = "3";

  @property({ type: String })
  offset = "0";

  private _getPublicationConcepts = new Task(this, {
    task: async ([id, locale, limit, offset], { signal }) =>
      Promise.all([
        getPublication({ id, locale, signal }),
        getPublicationConcepts({ id, locale, limit, offset, signal }),
      ]),
    args: () => [this["publication-id"], this.locale, this.limit, this.offset],
  });

  render() {
    return this._getPublicationConcepts.render({
      pending: () => html`<graph-widget-loading></graph-widget-loading>`,
      error: (error) => html`<graph-widget-error>${error}</graph-widget-error>`,
      complete: ([publication, concepts]) =>
        html`<graph-widget-section>
          ${msg(
            html`<graph-widget-section-title slot="header">
              Research domains related to ${publication.title}
            </graph-widget-section-title> `
          )}
          ${concepts.items.map(
            (item: Concept) =>
              html`<div slot="body">
                <graph-widget-concept
                  .concept=${item}
                  locale=${this.locale}
                ></graph-widget-concept>
              </div>`
          )}
          <div slot="footer">
            <graph-widget-section-link
              href="${URL_APP}/publication/${publication._id}/"
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`,
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-publication-concepts": PublicationConcepts;
  }
}
