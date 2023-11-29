import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { localized, msg } from "@lit/localize";

import { Root } from "@/components/base/root";

@localized()
@customElement("graph-widget-section-link")
export class SectionLink extends Root {
  @property({ type: String })
  href = "";

  render() {
    return html`<a
      href=${this.href}
      class="btn btn-outline btn-xs btn-primary hover:text-white"
    >
      ${msg("View on Graph Search")}
    </a>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-section-link": SectionLink;
  }
}
