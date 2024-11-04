import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { Course as TCourse } from "@/types/course";

import { Root } from "@/components/base/root";

import { localeRecord } from "@/util/locale";

/**
 * Parts:
 * - link
 * - course
 * - course__title
 * - course__summary
 */
@customElement("graph-widget-course")
export class Course extends Root {
  @property({ type: Object })
  "course" = {} as TCourse;

  render() {
    const name = [
      this.course.short_code,
      localeRecord({ record: this.course.name, locale: this.locale }).value,
    ]
      .filter(Boolean)
      .join(": ");

    const description = localeRecord({
      record: this.course.description_medium,
      locale: this.locale,
    }).value;

    return html`<div part="course" class="flex flex-col gap-1">
      <a part="link course__name" class="link" href=${this.course.url}
        >${name}</a
      >
      <p part="course__description" class="line-clamp-2">${description}</p>
    </div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-course": Course;
  }
}
