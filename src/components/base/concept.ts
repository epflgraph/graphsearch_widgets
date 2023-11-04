import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import get from "lodash/get";

import { URL_APP } from "@/shared/constants";

import type { Concept as TConcept } from "@/types/concept";

import { Root } from "@/components/base/root";

@customElement("graph-widget-concept")
export class Concept extends Root {
  @property({ type: Object })
  "concept" = {} as TConcept;

  render() {
    return html`<div class="flex flex-col gap-1">
      <a
        href=${new URL(`concept/${this.concept._id}`, URL_APP).toString()}
        class="link font-medium"
      >
        ${get(this.concept, ["name", this.locale, "value"])}
      </a>

      <p class="line-clamp-2 text-sm text-gray-600">
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
