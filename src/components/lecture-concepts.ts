import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { Task } from "@lit/task";

import { lectureFields, relatedConceptsFields } from "@/services/fields";
import { getLecture, getLectureConcepts } from "@/services/lectures";

import "@/components/base/concept";
import "@/components/base/loading";
import "@/components/base/no-results";
import { Root } from "@/components/base/root";
import "@/components/base/section";
import "@/components/base/sectionLink";

@customElement("graph-widget-lecture-concepts")
export class LectureConcepts extends Root {
  @property({ type: String, attribute: "lecture-id" })
  id = "";

  private _getLectureConcepts = new Task(this, {
    task: async ([id, limit, offset], { signal }) =>
      Promise.all([
        getLecture({ id, fields: lectureFields }, { signal }),
        getLectureConcepts(
          {
            id,
            fields: relatedConceptsFields,
            limit: Number(limit),
            offset: Number(offset),
          },
          { signal }
        ),
      ]),
    args: () => [this.id, this.limit, this.offset],
  });

  render() {
    return this._getLectureConcepts.render({
      pending: () =>
        html`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,
      complete: ([lecture, concepts]) =>
        html`<graph-widget-section>
          ${concepts.items.length
            ? concepts.items.map(
                (item) =>
                  html`<graph-widget-concept
                    exportparts="link, unit, unit__name, breadcrumbs, breadcrumb"
                    .concept=${item.node}
                    locale=${this.locale}
                  ></graph-widget-concept>`
              )
            : html`<graph-widget-no-results
                exportparts="no-results"
              ></graph-widget-no-results>`}
          <graph-widget-section-link
            exportparts="button"
            slot="footer"
            href=${lecture.url}
          ></graph-widget-section-link>
        </graph-widget-section>`,
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-lecture-concepts": LectureConcepts;
  }
}
