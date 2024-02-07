import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import get from "lodash/get";

import type { Person as TPerson } from "@/types/person";

import { Root } from "@/components/base/root";

@customElement("graph-widget-person")
export class Person extends Root {
  @property({ type: Object })
  "person" = {} as TPerson;

  render() {
    return html`<div class="flex flex-col gap-1">
      <a href=${this.person._url} class="link font-medium self-start">
        ${this.person.name_display}
      </a>

      <p class="line-clamp-2 text-sm">
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
