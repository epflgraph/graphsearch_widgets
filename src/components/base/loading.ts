import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { localized } from "@lit/localize";

import { Root } from "@/components/base/root";

@localized()
@customElement("graph-widget-loading")
export class Loading extends Root {
  @property({ type: String })
  limit = "1";

  render() {
    return html`<div class="flex flex-col gap-6">
      ${Array.from({ length: Number(this.limit) }).map(
        () =>
          html`<div class="flex flex-col gap-2">
            <div class="skeleton h-4 w-2/5"></div>
            <div class="skeleton h-2 w-full"></div>
            <div class="skeleton h-2 w-full"></div>
          </div>`
      )}
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-loading": Loading;
  }
}
