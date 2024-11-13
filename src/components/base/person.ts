import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { Person as TPerson } from "@/types/person";

import { Root } from "@/components/base/root";

import { localeRecord } from "@/util/locale";

/**
 * Parts:
 * - link
 * - person
 * - person__name
 * - person__description
 */
@customElement("graph-widget-person")
export class Person extends Root {
  @property({ type: Object })
  "person" = {} as TPerson;

  render() {
    const name = localeRecord({
      record: this.person.name,
      locale: this.locale,
    }).value;

    const description = localeRecord({
      record: this.person.description_medium,
      locale: this.locale,
    }).value;

    return html`<div part="person" class="flex flex-col gap-1">
      <a part="link person__name" class="link" href=${this.person.url}
        >${name}</a
      >
      <p part="person__description" class="line-clamp-2">${description}</p>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-person": Person;
  }
}
