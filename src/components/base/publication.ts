import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { Publication as TPublication } from "@/types/publication";

import { Root } from "@/components/base/root";

import { localeRecord } from "@/util/locale";

/**
 * Parts:
 * - link
 * - publication
 * - publication__title
 * - publication__abstract
 * - publication__publisher
 * - publication__year
 */
@customElement("graph-widget-publication")
export class Publication extends Root {
  @property({ type: Object })
  "publication" = {} as TPublication;

  render() {
    const title = localeRecord({
      record: this.publication.name,
      locale: this.locale,
    }).value;

    const description = localeRecord({
      record: this.publication.description_medium,
      locale: this.locale,
    }).value;

    return html`<div part="publication" class="flex flex-col gap-1">
      <a
        part="link publication__title"
        class="link"
        href=${this.publication.url}
      >
        ${title}
      </a>
      <div class="text-gray-600 text-sm">
        ${description &&
        html`<p part="publication__abstract" class="line-clamp-2">
          ${description}
        </p>`}
        ${this.publication.publisher &&
        html`
          <i part="publication__publisher" class="line-clamp-1">
            ${this.publication.publisher}
          </i>
        `}
        <span part="publication__year">${this.publication.year}</span>
      </div>
    </div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-publication": Publication;
  }
}
