import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import get from "lodash/get";

import type { Person as TPerson } from "@/types/person";

import { Root } from "@/components/base/root";

/**
 * Parts:
 * - link
 * - person
 * - person__name
 * - person__biography
 */
@customElement("graph-widget-person")
export class Person extends Root {
  @property({ type: Object })
  "person" = {} as TPerson;

  render() {
    return html`<div part="person" class="flex flex-col gap-1">
      <a part="link person__name" class="link" href=${this.person._url}
        >${this.person.name_display}</a
      >
      <p part="person__biography" class="line-clamp-2">
        ${get(this.person, ["biography", this.locale])}
      </p>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-person": Person;
  }
}
