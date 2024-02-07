import { html } from "lit";
import { customElement } from "lit/decorators.js";

import { localized, msg } from "@lit/localize";

import { Root } from "@/components/base/root";

@localized()
@customElement("graph-widget-no-results")
export class NoResults extends Root {
  render() {
    return html`<div class="text-xs font-medium">${msg("No results")}</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-no-results": NoResults;
  }
}
