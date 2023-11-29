import { html } from "lit";
import { customElement } from "lit/decorators.js";

import { Root } from "@/components/base/root";

@customElement("graph-widget-container")
export class Container extends Root {
  render() {
    return html`<div class="bg-white rounded px-4 py-6"><slot></slot></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-container": Container;
  }
}
