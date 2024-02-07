import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { Lecture as TLecture } from "@/types/lecture";

import { Root } from "@/components/base/root";

@customElement("graph-widget-lecture")
export class Lecture extends Root {
  @property({ type: Object })
  "lecture" = {} as TLecture;

  render() {
    return html`<div class="flex flex-col gap-1">
      <a href=${this.lecture._url} class="link font-medium self-start">
        ${this.lecture.video.title}
      </a>

      <p class="line-clamp-2 text-sm">${this.lecture.video.subtitle}</p>
    </div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-lecture": Lecture;
  }
}
