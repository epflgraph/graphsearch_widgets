import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { localized } from "@lit/localize";

import { Root } from "@/components/base/root";

@localized()
@customElement("graph-widget-loading")
export class Loading extends Root {
  render() {
    return html` <graph-widget-section>
      <div slot="header" class="flex flex-col gap-2">
        <div class="skeleton h-5 w-3/6"></div>
        <div class="skeleton h-2 w-2/6"></div>
      </div>
      <div class="flex flex-col gap-6">
        ${Array.from({ length: Number(this.limit) }).map(
          () =>
            html`
              <div class="flex flex-col gap-2">
                <div class="skeleton h-4 w-5/6"></div>
                <div class="skeleton h-3 w-full"></div>
                <div class="skeleton h-3 w-full"></div>
              </div>
            `
        )}
      </div>
      <graph-widget-section-link slot="footer"></graph-widget-section-link>
    </graph-widget-section>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-loading": Loading;
  }
}
