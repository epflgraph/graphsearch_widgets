import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { Root } from "@/components/base/root";

@customElement("graph-widget-section-title")
export class SectionTitle extends Root {
  @property({ type: String })
  "description" = "";
  render() {
    return html` <h1 class="text-xl font-medium">
        <slot class="line-clamp-2"></slot>
      </h1>
      <span class="text-xs text-gray-600"> ${this.description} </span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-section-title": SectionTitle;
  }
}
