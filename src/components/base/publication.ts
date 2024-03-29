import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { Publication as TPublication } from "@/types/publication";

import { Root } from "@/components/base/root";

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
    return html`<div part="publication" class="flex flex-col gap-1">
      <a
        part="link publication__title"
        class="link"
        href=${this.publication._url}
      >
        ${this.publication.title}
      </a>
      <div class="text-gray-600 text-sm">
        ${this.publication.abstract &&
        html`<p part="publication__abstract" class="line-clamp-2">
          ${this.publication.abstract}
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
