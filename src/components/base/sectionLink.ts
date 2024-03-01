import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

import { localized, msg } from "@lit/localize";

import { Root } from "@/components/base/root";

/**
 * Parts:
 * - button
 */
@localized()
@customElement("graph-widget-section-link")
export class SectionLink extends Root {
  @property({ type: String })
  href = "";

  render() {
    const classes = {
      btn: true,
      "bg-white": true,
      "btn-xs": true,
      "hover:text-white": true,
      "btn-outline": this.href,
      "btn-primary": this.href,
      "btn-disabled": !this.href,
    };

    return html`<a part="button" href=${this.href} class=${classMap(classes)}>
      ${msg("View on Graph Search")}
    </a>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-section-link": SectionLink;
  }
}
