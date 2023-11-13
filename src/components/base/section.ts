import { html } from "lit";
import { customElement } from "lit/decorators.js";

import { Root } from "@/components/base/root";

@customElement("graph-widget-section")
export class Section extends Root {
  render() {
    return html`
      <section class="flex flex-col gap-6">
        <slot name="header"></slot>
        <slot class="flex flex-col gap-2"></slot>
        <slot name="footer"></slot>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-section": Section;
  }
}
