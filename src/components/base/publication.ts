import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { Publication as TPublication } from "@/types/publication";

import { Root } from "@/components/base/root";

@customElement("graph-widget-publication")
export class Publication extends Root {
  @property({ type: Object })
  "publication" = {} as TPublication;

  render() {
    return html`<div class="flex flex-col gap-1">
      <a href=${this.publication._url} class="link font-bold self-start">
        ${this.publication.title}
      </a>
      <div class="text-gray-600 text-sm">
        ${this.publication.abstract &&
        html`<p class="line-clamp-2">${this.publication.abstract}</p>`}
        ${this.publication.publisher &&
        html` <i class="line-clamp-1">${this.publication.publisher}</i> `}
        <span>${this.publication.year}</span>
      </div>
    </div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-publication": Publication;
  }
}
