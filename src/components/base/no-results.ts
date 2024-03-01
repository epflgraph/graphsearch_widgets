import { html } from "lit";
import { customElement } from "lit/decorators.js";

import { localized, msg } from "@lit/localize";

import { Root } from "@/components/base/root";

/**
 * Parts:
 * - no-results
 */
@localized()
@customElement("graph-widget-no-results")
export class NoResults extends Root {
  render() {
    return html`<p part="no-results" class="text-gray-600 text-sm">
      ${msg("No results")}
    </p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-no-results": NoResults;
  }
}
