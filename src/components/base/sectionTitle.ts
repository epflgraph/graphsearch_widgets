import { html } from "lit";
import { customElement } from "lit/decorators.js";

import { Root } from "@/components/base/root";

@customElement("graph-widget-section-title")
export class SectionTitle extends Root {
  render() {
    return html`<h1 class="text-2xl font-medium"><slot></slot></h1>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-section-title": SectionTitle;
  }
}
