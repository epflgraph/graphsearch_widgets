import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { Lecture as TLecture } from "@/types/lecture";

import { Root } from "@/components/base/root";

import { localeRecord } from "@/util/locale";

/**
 * Parts:
 * - link
 * - lecture
 * - lecture__title
 * - lecture__subtitle
 */
@customElement("graph-widget-lecture")
export class Lecture extends Root {
  @property({ type: Object })
  "lecture" = {} as TLecture;

  render() {
    const title = localeRecord({
      record: this.lecture.name,
      locale: this.locale,
    }).value;

    const description = localeRecord({
      record: this.lecture.description_medium,
      locale: this.locale,
    }).value;

    return html`<div part="lecture" class="flex flex-col gap-1">
      <a part="link lecture__title" class="link" href=${this.lecture.url}
        >${title}</a
      >
      <p part="lecture__subtitle" class="line-clamp-2">${description}</p>
    </div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-lecture": Lecture;
  }
}
