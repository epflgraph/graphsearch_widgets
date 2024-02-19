import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import get from "lodash/get";

import type { Concept as TConcept } from "@/types/concept";

import { Root } from "@/components/base/root";

@customElement("graph-widget-concept")
export class Concept extends Root {
  @property({ type: Object })
  "concept" = {} as TConcept;

  render() {
    return html`<div class="flex flex-col gap-1">
      <a href=${this.concept._url} class="link font-bold self-start">
        ${get(this.concept, ["name", this.locale, "value"])}
      </a>

      <p class="line-clamp-2">
        ${get(this.concept, ["_description_large", this.locale, "value"])}
      </p>
    </div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-concept": Concept;
  }
}
