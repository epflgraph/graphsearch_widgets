import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { Concept as TConcept } from "@/types/concept";

import { Root } from "@/components/base/root";

import { localeRecord } from "@/util/locale";

/**
 * Parts:
 * - link
 * - concept
 * - concept__name
 * - concept__description
 */

@customElement("graph-widget-concept")
export class Concept extends Root {
  @property({ type: Object })
  "concept" = {} as TConcept;

  render() {
    const title = localeRecord({
      record: this.concept.name,
      locale: this.locale,
    }).value;

    const description = localeRecord({
      record: this.concept.description_medium,
      locale: this.locale,
    }).value;

    return html`<div part="concept" class="flex flex-col gap-1">
      <a part="link concept__name" class="link" href=${this.concept.url}>
        ${title}
      </a>

      <p part="concept__description" class="line-clamp-2">${description}</p>
    </div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-concept": Concept;
  }
}
