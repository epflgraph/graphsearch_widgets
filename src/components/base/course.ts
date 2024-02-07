import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import get from "lodash/get";

import type { Course as TCourse } from "@/types/course";

import { Root } from "@/components/base/root";

@customElement("graph-widget-course")
export class Course extends Root {
  @property({ type: Object })
  "course" = {} as TCourse;

  render() {
    const title = [
      this.course.course_code,
      get(this.course, ["name", this.locale, "value"]),
    ]
      .filter(Boolean)
      .join(": ");
    return html`<div class="flex flex-col gap-1">
      <a href=${this.course._url} class="link font-medium self-start"
        >${title}</a
      >
      <p class="line-clamp-2 text-sm">
        ${get(this.course, ["summary", this.locale, "value"])}
      </p>
    </div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-course": Course;
  }
}
