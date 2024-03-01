import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import get from "lodash/get";

import type { Unit as TUnit } from "@/types/unit";

import { Root } from "@/components/base/root";

/**
 * Parts:
 * - link
 * - unit
 * - unit__name
 * - breadcrumbs
 * - breadcrumb
 */
@customElement("graph-widget-unit")
export class Unit extends Root {
  @property({ type: Object })
  "unit" = {} as TUnit;

  render() {
    return html`<div part="unit" class="flex flex-col gap-1">
      <a part="link unit__name" class="link" href=${this.unit._url}>
        ${get(this.unit, ["name", this.locale, "value"])}
      </a>

      <nav part="breadcrumbs" class="breadcrumbs py-0 text-sm">
        <ul>
          ${this.unit.path.map(
            (unit, i, units) => html`<li part="breadcrumb" key=${unit._id}>
              ${units.length > i + 1
                ? html`<a href=${unit._url} part="link" class="link">
                    ${unit.initials}
                  </a>`
                : unit.initials}
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
