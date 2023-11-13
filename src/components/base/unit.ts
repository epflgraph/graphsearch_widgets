import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import get from "lodash/get";

import type { Unit as TUnit } from "@/types/unit";

import { Root } from "@/components/base/root";

@customElement("graph-widget-unit")
export class Unit extends Root {
  @property({ type: Object })
  "unit" = {} as TUnit;

  render() {
    return html`<div class="flex flex-col gap-1">
      <a href=${this.unit._url} class="link font-medium self-start">
        ${get(this.unit, ["name", this.locale, "value"])}
      </a>

      <nav class="breadcrumbs py-0 text-xs">
        <ul>
          ${this.unit.path.map(
            (unit, i, units) => html`<li key=${unit._id}>
              ${units.length > i + 1
                ? html`<a href=${unit._url}>${unit.initials}</a>`
                : html`<span class="text-gray-600">${unit.initials}</span>`}
            </li>`
          )}
        </ul>
      </nav>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-unit": Unit;
  }
}
